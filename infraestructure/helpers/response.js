const responseHttp = (success, data = null, message = null, statusCode = 200, input) => {
    return {
        statusCode,
        body: JSON.stringify({
          success,
          message,
          data,
          input
        },
        null,
        2),
    };
}

module.exports = responseHttp;