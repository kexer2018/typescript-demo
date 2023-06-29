import { Request, Response, request } from 'express'
import { AppDataSource } from '../configs/database'
import { User } from '../entity/User'

/* 封装所有的User表的增删改查方法 */

export default class userService {
  private userRepository: any
  constructor () {
    this.userRepository = AppDataSource.getRepository(User)
  }

  //获取所有用户信息
  getUserInfo = async (request: Request, response: Response) => {
    const allUser = await this.userRepository.find()
    return allUser
  }

  //获取指定name的用户的信息
  getUserInfoById = async (request: Request, response: Response) => {
    const { id } = request.params
    const userInfo = await this.userRepository.find({ where: { id } })
    return userInfo
  }

  //将数据写入数据库
  insertUserInfo = async (request: Request, response: Response) => {
    const { uid, name, age, address, email, school } = request.body
    const createAt = Date.now()
    const userData = {
      uid,
      name,
      age,
      address,
      email,
      school,
      createAt
    }
    const result = await this.userRepository.save(userData)
    return result
  }

  //修改指定uid的个人信息
  updateUserInfoByUid = async (request: Request, response: Response) => {
    const { uid, name, age, address, email, school } = request.body
    const userInfo = await this.userRepository.findOne({ where: { uid } })
    userInfo.name = name
    userInfo.age = age
    userInfo.address = address
    userInfo.email = email
    userInfo.school = school
    const result = await this.userRepository.save(userInfo)
    return result
  }

  //删除指定uid的个人信息
  deleteUserInfoByUid = async (request: Request, response: Response) => {
    const { uid } = request.body
    const userInfo = await this.userRepository.findOne({ where: { uid } })
    if (!userInfo) {
      return '找不到该用户'
    }
    const { success } = await this.userRepository.remove(userInfo)
    return success
  }

  //删除所有用户信息
  deleteUserInfoAll = async (request: Request, response: Response) => {
    const data = await this.userRepository.clear()
    if (!data) {
      return '已全部删除'
    }
    return false
  }
}
