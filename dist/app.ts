import express,{ Application, Request, Response, NextFunction } from "express";
import fs from "fs";
import fileRoute from "./Routes/fileRoute";
import multer from "multer";
import cors from 'cors'
const upload = multer({ dest: 'uploads/' })
const app : Application = express()
app.use(cors())



app.get("/",(req:Request, res:Response, next:NextFunction) => {
    res.send("Server is running on port 4000 !")
})


app.use("/file-upload",upload.single('file'),fileRoute)


// fs.readFile(`${__dirname}/file.txt`,(err,data) => {
//     let temp : any = []
//     data.toString().split("\n").map(x => {
//         let data = x.split(" - ")
//         let trans : any = data[2]
//         while(trans.includes("&quot;")){
//             trans = trans.replace("&quot;",'"')
//         }
//         trans = JSON.parse(trans)
//         // let templatae = {
//         //     logLevel:String,
//         //     transactionId:String,
//         //     err:String,
            
//         // }
//         temp.push({"timestamp":data[0],logLevvel:data[1],transactionId:trans?.transactionId,err:trans.err ? trans.err : trans.details})
//     })
//     console.log(temp)})

app.listen(4000, () => {
    console.log("Server is runing !")
})