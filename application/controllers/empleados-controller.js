const { responseSuccess, responseFail } = require('../helpers/response') 
const { StatusCodes } = require('http-status-codes');

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

const createEmpleado = async (empleadoData) => {
    let response = null;

    try {
        console.log("Empleado Data", empleadoData)
        response = responseSuccess({ 
            message: "Empleado Creado!!",
            data: empleadoData,
         }, StatusCodes.CREATED)
    } catch (error) {
        reponse = responseFail({ 
            message: "Error inesperado"
        })
    }

    return response;
}

const updateEmpleado = async (empleadoData, id) => {
    let response = null;
    let data = {id, empleadoData}

    try {
        console.log("Empleado Data", empleadoData);
        console.log("Empleado id", id);

        response = responseSuccess({ 
            message: "Empleado actualizado!!",
            data,
         }, StatusCodes.OK)
    } catch (error) {
        reponse = responseFail({ 
            message: "Error inesperado"
        })
    }

    return response;
}

module.exports = {
    getEmpleados,
    createEmpleado,
    updateEmpleado
}