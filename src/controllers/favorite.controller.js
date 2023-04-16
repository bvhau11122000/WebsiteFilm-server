import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

const addFavorite = async (req, res) => {
  try {
    const isFavorite = await favoriteModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (isFavorite) return responseHandler.ok(res, isFavorite);

    const favorite = new favoriteModel({
      ...req.body,
      user: req.user.id
    });

    await favorite.save();

    responseHandler.created(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

const removeFavorite = async (req, res) => {
  try {
    const { favoriteId } = req.params;

    const favorite = await favoriteModel.deleteOne({
      _id: favoriteId
    });
    console.log(favorite);
    // if (!favorite) return responseHandler.notfound(res);
    
    // await favorite.remove().exec();
    console.log("HUHHUUU");
    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getFavoritesOfUser = async (req, res) => {
  try {
    const favorite = await favoriteModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};
const getAll = async (req, res) => {
  try {
    const favorite = await favoriteModel.find({});
console.log(favorite);
    responseHandler.ok(res, favorite);
  } catch {
    responseHandler.error(res);
  }
};

export default { 
  addFavorite,
  removeFavorite,
  getFavoritesOfUser,
  getAll
};