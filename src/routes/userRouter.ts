import { insertUserInfo, getUserInfo } from '../controller/userController'
import express from 'express'

const router = express.Router()


//存入用户的数据
router.post('/user',insertUserInfo)

//查询所有的用户
router.get('/user',getUserInfo)

export default router
