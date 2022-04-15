import express from "express";
import bodyParser from "body-parser";
import { connect } from "./utils/db.js";
import config from "./config/dev.js";
const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended:true}));

const start = async () => {
  try {
    //connect to the database
    await connect();
    //start server
    app.listen(config.port,()=>{
      console.log(`REST api running on port ${config.port}`);
      console.log(`http://localhost/${config.port}`);
    })
  } catch (e) {
    console.log(e);
  }
}

start();