import { User } from "../models/user.model"
import { newToken } from "../utils/middlerwares/authverify";
import bcrypt from "bcrypt";
export async function signUp(req,res){
  try {
    //registers for new users
    const { email, password } = req.body;
    //verify if the user is in the database
    let userIn = await User.findOne({email});
    console.log(userIn)
    if(userIn){
      return res.status(400).json({message: "El email ya está en uso, prueba otro"});
    }
    //if pass first test then create a new user
    const encryptPassword = await bcrypt.hash(password, 8);
    const user = await User.create({email, password: encryptPassword});
    
    if(!user){
      return res.status(400).json({message: "we can¿t created the user"});
    }
    //then token is generated
    const token = newToken(user);
    //return the email of the new user
    res.status(200).cookie("SECURE_ACCESS",token, {
      httpOnly: true,
      path: "/",
      secure: true,
    })
    .json({email});
  } catch (e) {
    //res.status(400).json({ message: "El usuario no pudo ser creado" });
    throw new Error(e)
  }
}

export async function signIn(req, res) {
  try {
    // login for the users
    //pass email and password
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "No ingresó email y/o contraseña" });
    }
    const user = await User.findOne({ email });
    //validated user
    if (!user) return res.status(400).json({ message: "El usuario no existe" });
    //validated with bcrypt
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrecta" });
    }
    // response the token for the user
    const token = newToken(user);

    res.status(200)
      .cookie("SECURE_ACCESS", token, {
        httpOnly: true,
        path: "/",
        secure: true,
      })
      .json({ email: user.email }); // here also return the user body

  } catch (e) {
    res.status(400).json({ message: "No se pudo autenticar" });
  }
}