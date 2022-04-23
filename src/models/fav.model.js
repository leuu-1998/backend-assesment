import {Schema, model} from "mongoose";

const favSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
})

const Fav = model("Fav", favSchema);
export default Fav;