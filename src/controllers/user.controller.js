import List from "../models/list.model";
import {User} from "../models/user.model";

//get all list in the database 
export async function getAllListFavs(req,res){
  try {
    const {id} = req.body;
    const user = await User.findById({_id:id});
    if (!user) {
      res.status(404).json({ message: "No existe el usuario, error" });
    }

    //get the array
    const {favsLists} = user;

    //pass the array to find all list for this user
    const allListFavs = await List.find({_id: favsLists});

    res.status(200).json(allListFavs);
  } catch (e) {
    res.status(400).json({ message: "El usuario no pudo ser creado" });
  }
}

//client give the name of the list
export async function createOneListFavs(req,res){
  try {
    const _id = req.body.id;
    const listName = req.body.name;

    //create new list for the user
    const list = await List.create({name:listName});

    //add the _id to the [list fav array] for the user
    await User.findOneAndUpdate({_id}, {$push :{favsLists: list._id}});

    res.status(200).json({message: "La lista se creó"});
  } catch (e) {
    res.status(400).json({ message: "El usuario no pudo ser creado" });
  }
}

//list for one user
export async function getOneListFavs(req,res){
  try {
    //we asume the id is the id of the list
    const id = req.params;
    const list = await List.findById({_id: id});
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ message: "La lista no pudo ser obtenida" });
  }
}

//delete one list for one user
export async function deleteOneListFavs(req,res){
  try {
    //we asume the id is the id of the list
    const id = req.params;
    const list = await List.deleteOne({_id:id});
    res.status(200).json({message: "Lista eliminada con éxito"});
  } catch (e) {
    res.status(400).json({ message: "La lista no pudo ser eliminada" });
  }
}