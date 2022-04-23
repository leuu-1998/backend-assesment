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
  favsLists: {
    type: [{type: Schema.Types.ObjectId, ref: "List"}],
    required: false,
    default: [],
  },
})

const User = model("User", userSchema);

module.exports = {
  User,
}
