const fs = require('fs');
const appJSONPath = "./DB/app.json";


function fetchAppData () {
    let data = fs.readFileSync(appJSONPath, {encoding: "utf-8"});
    return data;
}

function setTitle (title) {
    let data = fs.readFileSync(appJSONPath, {encoding: "utf-8"});
    var dataObj = JSON.parse(data);
    dataObj.title = title;
    fs.writeFileSync(appJSONPath, JSON.stringify(dataObj));
    return fetchAppData();
}

module.exports = {
    fetch: fetchAppData,
    setTitle: setTitle
}


