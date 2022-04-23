import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favsList: {
    name: {
      type: String,
      required: false,
    },
    content: {
      type: [{type: Schema.Types.ObjectId, ref: "Fav",}],
      required: false,
      default: [],
    },
  }
})

const User = model("User", userSchema);

module.exports = {
  User,
}