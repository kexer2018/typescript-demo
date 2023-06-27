import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/userRouter'

import { createDatabaseConnect } from './configs/database'
const PORT = 3001

const app = express()
app.use(bodyParser.json())

app.use('/api', router)

//启动服务器
app.listen(PORT, async () => {
  //启动数据库
  await createDatabaseConnect()

  console.log(`Server is running on port ${PORT}`)
})
