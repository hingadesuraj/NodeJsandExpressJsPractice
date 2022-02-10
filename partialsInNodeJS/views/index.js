const { partials } = require("handlebars");
const path = require('path');

const hbs = require(hbs);


// set partials 

const partialsPath = path.join(__dirname,"../templete/header.hbs");

// hbs.registerParticals(path of partials folder )
hbs.registerParticals(partialsPath);



// use partials
//   Like these
{{>header}}




