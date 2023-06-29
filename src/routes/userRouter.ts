import userController from '../controller/userController'
import { Router } from 'express'

const router = Router()

//存入用户的数据
router.post('/user', userController.insertUserInfo)

//查询所有的用户
router.get('/user', userController.getUserInfo)

//获取数据表中指定id的信息
router.get('/user/:id', userController.getUserInfoByUid)

//修改指定uid的用户信息
router.put('/user',userController.updateUserInfoByUid)

//删除指定uid的用户信息
router.delete('/user',userController.deleteUserInfoByUid)

//删除所有的用户信息
router.delete('/userAll',userController.deleteUserInfoAll)

export default router
