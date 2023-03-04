const  fs = require ("fs")
const validator = require("validator")
const yargs = require("yargs")
const index = require ("./index")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        firstName : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lastName : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        degree :  {
            describe: "adding the degree ",
            demandOption: true,
            type: "array"
        }
    },
    handler: (x)=> {
        index.addPerson(
            x.firstName, 
            x.lastName, 
            x.city,
            x.age,
            x.id,
            x.aveDegree,
            x.totalDegree,
            x.degree 
        )
    }
})

yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        index.deleteData(x.id)
    }
})

yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        index.readData (x.id)
    }
})

yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        index.listData()
    }
})
yargs.parse() 
// node app.js add --firstName="shimaa" --lastName="shimo" --city="fayoum" --age= "20" --id="1" --degree="[80, 90, 99, 85, 96, 88]"


