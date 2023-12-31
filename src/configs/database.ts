import "reflect-metadata"
import { DataSource } from 'typeorm'
import { User } from '../entity/User'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'zx123456',
  database: 'userInfo',
  synchronize: false,
  logging: true,
  entities: [User]
})

// 创建数据库连接
const createDatabaseConnect = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('数据库连接成功')
    })
    .catch(async (err: Error) => {
      console.log('数据库连接失败:', err)
    })
}

export { createDatabaseConnect, AppDataSource }
