// baolong01dev
// rU8aBT4ItqGFOesx

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment.js'
let trelloDatabaseInstance = null

// khởi tạo đối tượng mongoClientInstance để connect tới MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// kết nối tới database
export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// GET_DB kh async có nhiệm vụ export ra trello database instance sau khi đã connect thành công với MongoDB để chúng ta sử dụng ở nhiều nơi khác nhau trong code, lưu ý phải đảm bảo chỉ luôn gọi getDB này sau khi đã kết nối thành công tới mongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to DB first')
  return trelloDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}
