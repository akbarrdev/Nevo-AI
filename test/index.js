// import nevo from "../src/index.js";
const nevo = require("../src/index.js");
nevo.ask({ apiKey: "akbarrdev", prompt: "Hello, how are you?" }).then((response) => {
    console.log(response)
})