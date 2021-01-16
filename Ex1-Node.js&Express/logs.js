const fs = require('fs');
const colors = require('colors');
const moment = require('moment');
const logFile = './logs.txt';
const logs = []; 

function logWriter (msg, Errors = false) {
    const travelTime = moment().add(0, 'minutes').format('hh:mm:ss A');
    const currDate = moment().format('DD-MM-YYYY');
    const fullMsg = currDate + ' -> ' + travelTime + ': ' + msg + '\n';

    if(Errors == true) console.log(colors.red(fullMsg));
    else console.log(colors.green(fullMsg));
    logs.push(fullMsg);
    fs.appendFile(logFile, fullMsg, (err) => {
        if(err) console.log(err.message);
    })

}

function returnLogs (){
    return logs;
}

module.exports = {
    logWriter,
    returnLogs
}
