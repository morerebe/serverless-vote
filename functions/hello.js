let votesArray = [0, 0, 0, 0];

exports.handler = async event => {

    const v =  event.queryStringParameters.vote
        if (v === "a") {
            votesArray[0] += 1;
        }
        else if (v === "b") {
            votesArray[1] += 1;
        }
        else if (v === "c") {
            votesArray[2] += 1;
        }
        else if (v === "d") {
            votesArray[3] += 1;
        }
        else if (v === "r") {
            votesArray = [0, 0, 0, 0];
        }
        
        console.log(JSON.stringify(votesArray));

        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin' : '*'},
            body: JSON.stringify(votesArray),
        }
  }