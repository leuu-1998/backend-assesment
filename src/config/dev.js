export default {
  secrets:{
    jwt: process.env.JWT_SECRET,
    jwtExp: "24h",
  },
  dburl :"mongodb://127.0.0.1:27017/api-favs",
  port: 3000,
}