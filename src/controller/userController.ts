import { Request, Response } from 'express'
import { AppDataSource } from '../configs/database'
import { User } from '../entity/User'

/* User数据表的增删改查操作 */

//新增一条数据
export async function insertUserInfo (request: Request, response: Response) {
  const user = new User()
  user.name = request.body.name
  user.age = request.body.password
  user.address = request.body.address
  user.email = request.body.email
  user.school = request.body.school
  user.createAt = Date.now()

  const userRepository = AppDataSource.getRepository(User)
  await userRepository.save(user)
  response.json({
    code: 200,
    msg: 'Successfully added user',
    data: true
  })
}

//查询所有的数据
export async function getUserInfo (request: Request, response: Response) {
  const userRepository = AppDataSource.getRepository(User)
  const allUser = await userRepository.find()
  response.json({
    code: 200,
    msg: 'Successfully query user',
    data: allUser
  })
}
