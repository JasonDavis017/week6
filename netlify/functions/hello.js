// defines a lambda function
exports.handler = async function(event) {

  // a lambda function returns a status code and a string of data
  // will alwasy return an object with a status code and a body
  // status code will almost alwyas be 200 (which means OK), but check out URL given for more options
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // body: `Hello from the back-end!` // a string of data
    body: `Commented out the line above and set to new value`
  }
}

// we will use js to fetch the status code and the body
// every time we change the code and save, we recompile the lamda function