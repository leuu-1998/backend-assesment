import {Schema, model} from "mongoose";
const listSchema = new Schema({

  name : {
    type: String,
    required: true,
  },
  content:{
    type: [{
      type: {
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
      }
    }],
    required: false,
    default: [],
  }
});

const List = model("List", listSchema);
export default List;
