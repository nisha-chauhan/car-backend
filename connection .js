
const mongoose = require("mongoose")

async function mongoConnectionString(url) {

    return mongoose.connect(url).then(() => {
        console.log(`Database is connected`)
    }).catch((err) => {
        console.log("Database is not Connected", err)
    })
}


mongoose.exports = {
    mongoConnectionString
}