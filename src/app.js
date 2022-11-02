"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const fileRoute_1 = __importDefault(require("./Routes/fileRoute"));
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.send("Server is running on port 4000 !");
});
app.use("/file-upload", fileRoute_1.default);
fs_1.default.readFile(`${__dirname}/file.txt`, (err, data) => {
    let temp = [];
    data.toString().split("\n").map(x => {
        let data = x.split(" - ");
        let trans = data[2];
        while (trans.includes("&quot;")) {
            trans = trans.replace("&quot;", '"');
        }
        trans = JSON.parse(trans);
        // let templatae = {
        //     logLevel:String,
        //     transactionId:String,
        //     err:String,
        // }
        temp.push({ "timestamp": data[0], logLevvel: data[1], transactionId: trans === null || trans === void 0 ? void 0 : trans.transactionId, err: trans.err ? trans.err : trans.details });
    });
    console.log(temp);
});
app.listen(4000, () => {
    console.log("Server is runing !");
});
