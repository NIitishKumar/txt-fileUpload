"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const uploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req.files;
    console.log(req.file, req.files, files);
    try {
        // const file = 
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
    }
    catch (error) {
        res.status(400).json({ message: "Siomthing went wrong !", err: error.message });
    }
});
exports.uploadFile = uploadFile;
