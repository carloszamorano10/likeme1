import { createLikeModels, getlikeModels, modifyLikeModels, deleteLikesModels } from "../models/likeModels.js";

export const createLike = async (req, res) => {
  try {
    const { titulo, url, img = url, descripcion } = req.body;
    const newLike = await createLikeModels(titulo, img, descripcion);
    res.json(newLike);
  } catch (error) {
    console.log("error =>", error);
  }
};

export const getAllLikes = async (req, res) => {
  try {
    const likes = await getlikeModels();
    res.json(likes);
  } catch (error) {
    console.log("error =>", error);
  }
};

export const modifyLikes = async(req, res) =>{
  try {
    const {id}= req.params
    const modifylike = await modifyLikeModels(id)
    res.json(modifylike)
  } catch (error) {
     console.log("error =>", error);
  }
}

export const deleteLikes = async (req, res)=>{
 try {
  const {id}= req.params
  const deleteLike = await deleteLikesModels(id)
  res.json(deleteLike)
 } catch (error) {
  console.log("error =>", error);
 }
}