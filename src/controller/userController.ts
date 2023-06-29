import { Request, Response, request } from 'express'
import userService from '../service/userService'

/* 封装User数据表的增删改查操作 */

class userController {
  private userService = new userService()

  //获取所有的用户信息
  getUserInfo = async (request: Request, response: Response) => {
    try {
      const result = await this.userService.getUserInfo(request, response)
      response.json(handeleSuccess(result))
    } catch (err: any) {
      response.json(handeleFailure(err))
    }
  }

  //根据用户的uid查询用户信息
  getUserInfoByUid = async (request: Request, response: Response) => {
    try {
      const result = await this.userService.getUserInfoById(request, response)
      response.json(handeleSuccess(result))
    } catch (err: any) {
      response.json(handeleFailure(err))
    }
  }

  //新增一条数据
  insertUserInfo = async (request: Request, response: Response) => {
    try {
      const result = await this.userService.insertUserInfo(request, response)
      response.json(handeleSuccess(result))
    } catch (err: any) {
      response.json(handeleFailure(err))
    }
  }

  //修改指定uid的用户信息
  updateUserInfoByUid = async (request: Request, response: Response) => {
    try {
      const result = await this.userService.updateUserInfoByUid(request,response)
      response.json(handeleSuccess(result))
    } catch (err: any) {
      response.json(handeleFailure(err))
    }
  }

  //删除指定uid的用户信息
  deleteUserInfoByUid = async (request: Request, response: Response) => {
    try {
      const result = await this.userService.deleteUserInfoByUid(request,response)
      response.json(handeleSuccess(result))
    } catch (err: any) {
      response.json(handeleFailure(err))
    }
  }

  //删除指定uid的用户信息
  deleteUserInfoAll = async (request: Request, response: Response) => {
    try {
      const result = await this.userService.deleteUserInfoAll(request,response)
      response.json(handeleSuccess(result))
    } catch (err: any) {
      response.json(handeleFailure(err))
    }
  }
}

//对于失败和成功的信息的处理
function handeleSuccess (result: any) {
  return {
    status: 200,
    message: 'RUN SERVICE SUCCESS',
    data: result
  }
}

function handeleFailure (err: Error) {
  return {
    status: -1,
    message: 'RUN SERVICE FAILED',
    data: err
  }
}

export default new userController()
