// EMAIL
// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.

// PASSWORD
// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

const emailRegex = new RegExp('/[\w_.-]+@[\w.-]+[.][a-z]+');
const passwordRegex = new RegExp('/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/')
//Lockhead positivo. Tiene que haber por lo menos: w->letras d->numeros
//El segundo lockhead obliga que tenga una mayuscula


export const emailValidation = (email) => {
    if(email.length <= 0 ) return 'El campo no puede estar vacio';

    if(email && !emailRegex.test(email)) return 'Ingrese un email válido'

    if(email.length > 35) return 'El email puede contener 35 caracteres como maximo';

    return ''
}

export const passwordValidation = (password) => {
    if(password.length < 1) return 'El campo no puede estar vacio';

    if(password.length < 6 || password.length > 10 ) return 'La contraseña debe contener 6 y 10 caracteres';

    if(password && !passwordRegex.test(password)) {
        return 'La contraseña debe contener al menos un número, una mayúscula y entre 6 y 10 caracteres';
    }
    //Ver de desabilitar boton submit 
}