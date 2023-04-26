import { useState } from "react";
import { validation } from "./../Validation/validation.js"
import styles from './form.module.css'
import imageLogin from './../../assets/rick_login.jpg'
import { useDispatch } from "react-redux";
import { accessLogin } from "../../redux/actions.js";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    let [errors, setErrors] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        setUserData({ 
            ...userData, // Otra forma de traer lo que tenia el estado.
            [event.target.name]: event.target.value 
        })
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };
    
    const handleSubmit = (event) => {
        event.preventDefault()
    
        accessLogin(userData, dispatch)
        
        //accessLogin && navigate('/home');
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            <img src={imageLogin} className={styles.image} />
            
            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor='email' >Email </label>
                <input className={styles.input} name='email' type='text' onChange={handleChange} value={userData.email} placeholder="Ej: email@gmail.com"></input>
            
                <div className={styles.errorContainer} >
                    {errors.email ? <p className={styles.error}>{errors.email}</p> : null}
                </div>

            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor='password' >Password </label>
                <input className={styles.input} name='password' type='password' onChange={handleChange} value={userData.password} placeholder='Ingresa una contraseña'></input>
            
                <div className={styles.errorContainer} >
                    {errors.password ? <p className={styles.error}>{errors.password}</p> : null}
                </div>
            </div>

            <button className={styles.submitButton} type='submit' disabled={errors.email || errors.password || !userData.email || !userData.password}>
                Submit
            </button>
        </form>
    );   
}

export default Form;