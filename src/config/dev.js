export default {
  secrets:{
    jwt: process.env.JWT_SECRET,
  },
  dburl :"mongodb://127.0.0.1:27017/api-favs",
  port: 3000,
}