const { responseSuccess, responseFail } = require('../helpers/response') 

const data = [
    {
        primerNombre: "José",
        segundoNombre: "Felix",
        primerApellido: "Ribas",
        segundoApellido: "Caldera",
        fechaNacimiento: new Date('2000-01-20'),
        tipoIdentificacion: "cc",
        numeroIdentificacion: "3131588",
        sueldo: 2000.0
    },
    {
        primerNombre: "Kelvin",
        segundoNombre: "Rafael",
        primerApellido: "Mosquera",
        segundoApellido: "Betancourt",
        fechaNacimiento: new Date('1997-06-20'),
        tipoIdentificacion: "nit",
        numeroIdentificacion: "66654847",
        sueldo: 3000.0
    },
];

const getEmpleados = async () => {
    let response = null;

    try {
        response = responseSuccess({ data })
    } catch (error) {
        reponse = responseFail({ 
            message: "Error inesperado"
        })
    }

    return response;
}

module.exports = {
    getEmpleados
}