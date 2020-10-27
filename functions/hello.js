let positionArray = [0, 0];

exports.handler = async event => {

    const lat =  event.queryStringParameters.lat;
    const lng =  event.queryStringParameters.lat;
        positionArray[0] = lat;
        positionArray[1] = lng;
        
        console.log(JSON.stringify(positionArray));

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin' : '*'},
            body: JSON.stringify(positionArray),
        }
  }