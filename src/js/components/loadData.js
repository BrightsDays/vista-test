async function loadData (data) {
        //const fetch = require('node-fetch');
    let response = await fetch(data);
    let answer = await response.json();
        
    return answer;
}

export default loadData;