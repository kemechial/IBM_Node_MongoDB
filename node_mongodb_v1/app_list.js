const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:gEox1EsynQunAo4zFSv8RfBl@172.21.251.215:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })