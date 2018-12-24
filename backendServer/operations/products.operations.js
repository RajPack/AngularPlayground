const fs = require('fs');
const productsJSONPath = "./DB/products.json";


function fetchProductsData () {
    let data = fs.readFileSync(productsJSONPath, {encoding: "utf-8"});
    return data;
}

module.exports = {
    fetch: fetchProductsData
}


