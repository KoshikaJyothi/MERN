import exp from 'express'
import { userApp } from './APIs/userApi.js'
import cookieParser from "cookie-parser"
import mongoose from 'mongoose'

const app = exp()
const port = 4000

// middleware
app.use(exp.json())

app.use(cookieParser())
// routes
app.use('/user-api', userApp)

// db connection
async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/backenddb')
        console.log("DB connection success")

        app.listen(port, () => {
            console.log("Server is listening on port", port)
        })

    } catch (err) {
        console.log("Error in DB connection", err)
    }
}

connectDB()
