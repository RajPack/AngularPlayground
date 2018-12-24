const fs = require('fs');
const appJSONPath = "./DB/app.json";


function fetchAppData () {
    let data = fs.readFileSync(appJSONPath, {encoding: "utf-8"});
    return data;
}

module.exports = {
    fetch: fetchAppData
}


