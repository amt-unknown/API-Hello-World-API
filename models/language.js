//Config
const mongoose = require("mongoose")
const {Schema} = mongoose

//Schema
const languageSchema = new Schema ({
    name: {type: String, required: true},
    gretting: String,
    pangram: String,
    filler: String
})

//Models and Exports
const Language = mongoose.models('Language', languageSchema)
module.exports = Language