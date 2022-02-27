const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")

var app = express()

const {
    connectDB
} = require("./db")

// Basic Security - Helmet
app.use(
    helmet({
        contentSecurityPolicy: false
    })
)

// Bodyparser
app.use(express.json({
    limit: "50mb"
}))

// Morgan explanation
app.use(morgan("dev"))

//locals
app.use(async (req, res, next) => {
    next()
})

app.use("/", require("./routers"))

//Error handler function
app.use((err, req, res, next) => {
    const error = app.get("env") === "development" ? err : {}
    const status = err.status || 500
    console.log(err)
    //Respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    })
    //Respond to ourselves
    console.error(err)
})

app.listen(3000, () => {
    console.log('listening on *:3000');
});