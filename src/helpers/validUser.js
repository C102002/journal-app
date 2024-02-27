function validUser(name) {
    const conditions = [
        { badPattern: /\W/, errorMessage: 'no puede tener caracteres espciales' },
        { badPattern: /\s/, errorMessage: 'La contraseña no puede contener espacios en blanco' },
        { badPattern: /^[^A-Z]/, errorMessage: 'El usuario no puede inciar con un número' },
        { badPattern: /^(\w{0,5}|\w{13,})$/, errorMessage: 'la longitud no cumple' },
    ]
    const badPattern = conditions.find(condition => condition.badPattern.test(name))

    if (badPattern) console.log(badPattern.errorMessage)

    return !badPattern
}