
const fs = require("fs");

const addFile = (data) => {
    const dt = JSON.stringify(data)
    fs.writeFile("userdata,json", dt, () => {
        console.log("file written successfully");
    })
}

const viewFile = () => {
    const data = view()
    console.log(data);
}

const view = () => {
    var dt;
    var data = fs.readFileSync("userdata.json", "utf-8")
    dt = JSON.parse(data)
    return dt;
}

module.exports = { addFile, viewFile }