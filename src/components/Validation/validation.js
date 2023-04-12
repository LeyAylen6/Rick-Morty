
const emailRegex = /[\w_.-]+@[\w.-]+[.][a-z]+/i
const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/i
//Lockhead positivo. Tiene que haber por lo menos: w->letras d->numeros
//El segundo lockhead obliga que tenga una mayuscula

export const validation = (userData) => {
    const errors = {};

    //EMAIL 

    if(!userData.email) errors.email = 'El campo no puede estar vacio';

    if(userData.email && !emailRegex.test(userData.email)) errors.email = 'Ingrese un email válido'

    if(userData.email.length > 35) errors.email = 'El email puede contener 35 caracteres como maximo';

    // PASSWORD
    
    if(!userData.password) errors.password = 'El campo no puede estar vacio';

    if(userData.password.length < 6 || userData.password.length > 10 ) errors.password = 'La contraseña debe contener 6 y 10 caracteres';

    if(userData.password && !passwordRegex.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número, una mayúscula y entre 6 y 10 caracteres';
    }
    return errors;
}