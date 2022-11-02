import { Request, Response } from "express"
import fs from 'fs'


export const uploadFile = async (req:Request, res:Response) => {
    console.log(req.file)
    try {
        let reqFile : any = req.file?.path
        const file = 
        fs.readFile(reqFile,(err,data) => {
            let temp : any = []
            data.toString().split("\n").map(x => {
                let data = x.split(" - ")
                let trans : any = data[2]
                
                while(trans.includes("&quot;")){
                    trans = trans.replace("&quot;",'"')
                }
                trans = JSON.parse(trans)
                temp.push({"timestamp":data[0],logLevvel:data[1],transactionId:trans?.transactionId,err:trans.err ? trans.err : trans.details})
            })
            console.log(temp)
            res.status(200).json({message:"File Data !",data:temp})})
    } catch (error : any) {
        res.status(400).json({message:"Siomthing went wrong !",err:error.message})
    }
}