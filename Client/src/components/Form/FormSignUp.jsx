import { useState } from "react";
import { validation } from "./../Validation/validation.js"
import { createNewAccount } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import styles from './forms.module.css'
import { redirectLogIn } from "../../redux/actions.js";

const Form = () => {
    
    const dispatch = useDispatch()

    let [newUserData, setNewUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

    let [errors, setErrors] = useState({})

    const inputs = ['username', 'email', 'password']

    const handleChange = (event) => {
        event.preventDefault()
        setNewUserData({ 
            ...newUserData, // Otra forma de traer lo que tenia el estado.
            [event.target.name]: event.target.value 
        })
        
        setErrors(validation({
            ...newUserData,
            [event.target.name]: event.target.value
        }))
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
        createNewAccount(newUserData, dispatch)
    }

    const redirectionLogIn = (event) => {
        event.preventDefault()
        redirectLogIn(dispatch)
    }

    return (

        <form className={ `${styles.formContainer} ${styles.signUpFocus}` } onSubmit={handleSubmit}>
            <h1>- Sign Up -</h1>
            
            {inputs?.map(input => {

                return (
                <div className={styles.inputContainer}>

                    <label className={styles.label} htmlFor={input} >{input}</label>
                    <input className={styles.input} name={input} type={input == 'password' ? 'password' : 'text'} onChange={handleChange} value={newUserData.input} placeholder="Ej: email@gmail.com"></input>                      
                    
                    <div className={styles.errorContainer} >
                        {errors[input] ? <p className={styles.error}>{errors[input]}</p> : null}
                    </div>
                    
                </div>
                )}
            )}
            
            <button className={styles.submitButton} type='submit' disabled={errors.input || errors.password || !newUserData.username || !newUserData.email || !newUserData.password}>
                Create account
            </button>

            <hr className={styles.hr}/>

            <button className={styles.submitButton} onClick={redirectionLogIn}>
                Ya tengo una cuenta
            </button>

        </form>
    );   
}

export default Form;