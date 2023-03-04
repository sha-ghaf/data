const fs = require("fs")
// add data
const addPerson = (firstName , lastName , city , age , id , degree) => {
    // degree = []
    const allData = loadData()
    const duplicatedData = allData.filter ((obj) => {
        return obj.id === id
    })
    console.log(duplicatedData)
    var aver, sum = 0
    if (degree === null || degree === 0){
        return 0;
    } else{
        for (let i = 0; i < degree.length; i++) {
            sum += degree[i]
        }
    }
    aver = sum / degree.length
    if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            firstName : firstName,
            lastName : lastName,
            city : city,
            age : age,
            degree : degree,
            totalDegree : sum,
            aveDegree : aver
        })
        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
}
// delete data
const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter ((obj) => {
        return obj.id !== id 
    })
    saveAllData(dataToKeep)
}
// read data
const readData = (id) => {
    const allData = loadData()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id 
    })
    console.log(itemNeeded)
}
// list data
const listData = () => {
    const allData = loadData()
    allData.forEach ((obj) => {
        console.log(obj.firstName , obj.age , obj.city)
    })
}
// load data
const loadData = () => {
    try {
        const dataJson = fs.readFileSync ("data.json").toString()
        return JSON.parse (dataJson)
    } catch {
        return []
    }

}
// save data
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("data.json" , saveAllDataJson)
}

module.exports = {
    addPerson,
    deleteData, 
    readData,
    listData
}