// learn more about http functions here: https://arc.codes/guides/http
exports.handler = async function http () {
  console.log('API Called')
  return {
    type: 'application/json',
    body: JSON.stringify({
      msg: 'hello from your API'
    })
  }
}
