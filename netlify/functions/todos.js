// defines a lambda function
exports.handler = async function(event) {

  // an Array of to-dos
  let toDos = [`IDEA newsletter`, `Eat food`, `Party`]

  // write the Array of to-dos to the *back-end* console
  console.log(toDos)

  // turn the Array into a String
  let dataAsString = JSON.stringify(toDos)

  // write the "stringified" Array to the *back-end* console
  console.log(dataAsString)

  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // body: `Hello from the back-end!` // a string of data
    //body: toDos // updated STRING of data; can't just be toDos bc that's an array
    body: dataAsString // a string of data
  }
}