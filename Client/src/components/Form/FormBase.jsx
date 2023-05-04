import { useSelector } from 'react-redux';
import imageLogin from './../../assets/rick_and_morty.jpg'
import Form from './FormLogIn';
import FormSignUp from './FormSignUp'; 
import styles from './formBase.module.css'

const FormBase = () => {
    const signUp = useSelector(state => state.signUp)
    
    return (
        <div className={styles.containerAccess}>
            <h1>Welcome to Rick & Morty app</h1>
                
            <div className={styles.imgContainer} >
                <img src={imageLogin} className={styles.image} />

                { signUp ? <Form /> : <FormSignUp />}
            </div>
        </div>
    )
}

export default FormBase;


