
const emailRegex = /[\w_.-]+@[\w.-]+[.][a-z]+/i
const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/i
//Lockhead positivo. Tiene que haber por lo menos: w->letras d->numeros
//El segundo lockhead obliga que tenga una mayuscula

export const validation = (userData) => {
    const errors = {};

    //EMAIL 

    if(!userData.email) errors.email = 'The field cannot be empty';

    if(userData.email && !emailRegex.test(userData.email)) errors.email = 'Enter a valid email'

    if(userData.email.length > 35) errors.email = 'The email can contain a maximum of 35 characters.';

    // PASSWORD
    
    if(!userData.password) errors.password = 'The field cannot be empty';

    if(userData.password.length < 6 || userData.password.length > 10 ) errors.password = 'Password must contain 6 and 10 characters';

    if(userData.password && !passwordRegex.test(userData.password)) {
        errors.password = 'Must have a number, a capital letter and between 6 and 10 characters';
    }
    return errors;
}