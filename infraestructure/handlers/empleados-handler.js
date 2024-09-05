const responseHttp = require('../helpers/response')
const { 
  getEmpleados: getEmpleadosController, 
  createEmpleado: createEmpleadosController,
  updateEmpleado: updateEmpleadoController
} = require('../../application/controllers/empleados-controller')

module.exports.getEmpleados = async (event) => {
  const { success, data, message, statusCode } = await getEmpleadosController();

  return responseHttp(success, data, message, statusCode);
};

module.exports.createEmpleado = async (event) => {
  const { success, data, message, statusCode } = await createEmpleadosController(JSON.parse(event.body));

  return responseHttp(success, data, message, statusCode);
};

module.exports.updateEmpleado = async (event) => {
  const { success, data, message, statusCode } = await updateEmpleadoController(JSON.parse(event.body), event.pathParameters.id);

  return responseHttp(success, data, message, statusCode);
};