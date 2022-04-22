import mongoose from "mongoose";

const favSchema = new mongoose.Schema({
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

const Fav = mongoose.model("Fav", favSchema);
export default Fav;