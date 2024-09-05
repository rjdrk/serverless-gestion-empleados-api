const responseHttp = require('../helpers/response')
const { getEmpleados:getEmpleadosController } = require('../../application/controllers/empleados-controller')

module.exports.getEmpleados = async (event) => {
  const response = await getEmpleadosController();

  return responseHttp(response.success, response.data, response.message, response.statusCode, event);
};
