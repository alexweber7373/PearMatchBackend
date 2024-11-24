// imports
const express = require('express')
require('dotenv').config()

// instances
const app = express()
const port = process.env.PORT

// block starts express app on given port
app.listen(port, () => {
    console.log(`Backend running on port ${port}`)
})