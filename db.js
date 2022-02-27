const mongoose = require("mongoose")
const mongoURI = `mongodb://127.0.0.1:27017/ExpressMongoAPI`
const connectDB = async () => {
    const conn = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`MongoDB connected`)
    return mongoose.connection.getClient()
}

module.exports = {connectDB}