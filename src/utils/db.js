import mongoose from "mongoose";
import config from "../config/dev.js";

export async function connect() {
  await mongoose.connect(config.dburl)
  .then(()=>{
    console.log("Connection established successfully")
  })
  .catch((e)=>{
    console.log(e);
  })
}