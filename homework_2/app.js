const yargs = require('yargs');
const file = require(__dirname + "/operations.js");

yargs.command({

    command: 'Employee',

    builder: {
        EmpID: {
            type: "number"
        },

        EmpName: {
            type: "String"
        },

        EmpEmail: {
            type: "String"
        },

        dept: {
            typre: "String"
        }
    },

    handler: (argv) => {

        const newEmp = {
            EmpID: argv.EmpID,
            EmpName: argv.EmpName,
            EmpEmail: argv.EmpEmail,
            dept: argv.dept
        };

        file.addNew(newEmp);
    }
})

yargs.command({

    command: "view",

    handler: () => {

        file.readFile();
    }
});

yargs.command({

    command: "remove",

    builder: {

        EmpID: {
            type: 'Number'
        }

    },

    handler: (argv) => {

        file.remove(argv.EmpID);
    }
})

yargs.argv;