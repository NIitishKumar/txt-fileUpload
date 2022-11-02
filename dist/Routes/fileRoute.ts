import express, {Request, Response} from 'express'
import {uploadFile } from '../Controller/fileController'
const router = express.Router()

router.post("/",uploadFile)


export default router;