//const { number } = require("yargs");
const yargs = require("yargs")
const file = require("./fileop")

yargs.command({
    command: "add",
    builder: {
        fname: {
            type: String
        },
        lname: {
            type: String
        },
        add: {
            type: String
        },
        age: {
            type: Number
        },
        pho: {
            type: Number
        },
        email: {
            type: String
        },
    },
    handler: function (argv) {
        const data = {
            fname: argv.fname,
            lname: argv.lname,
            add: argv.add,
            age: argv.age,
            pho: argv.pho,
            email: argv.email

        }
        file.addFile(data);
    }
})

yargs.command({
    command: "view",
    handler: function () {
        file.viewFile()
    }
})
yargs.argv