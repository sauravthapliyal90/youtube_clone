//reqire('dotenv').config({path: './env'})

import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`)
     })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})































/*
;(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is lsitening on port ${process.env.PORT}`);
        })
    } catch (error) {
        throw error
    }
})()
*/