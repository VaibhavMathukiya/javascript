const fs = require('fs');

const addNew = (data) => {

    let allData = read();

    const duplicate = allData.find(e => {

        return e.EmpID == data.EmpID

    });

    if (duplicate) {

        console.log("Employee ID already exists. Enter a new one!");
        return;

    } else {

        allData.push(data);
        fs.writeFileSync('File.JSON', JSON.stringify(allData));
        console.log("New Employee added!");
    };
};

const readFile = () => {

    const content = read();
    console.log(content);
};
const read = () => {


    try {

        let content = fs.readFileSync('File.JSON', "utf-8");
        content = JSON.parse(content);
        return content;

    } catch (error) {

        return [];

    };
};

const remove = (id) => {

    let allData = read();
    let newData = allData.filter(e => {

        return e.EmpID != id

    });

    fs.writeFileSync('File.JSON', JSON.stringify(newData));
    console.log("Employee data updated!");
};

module.exports = { addNew, readFile, remove }