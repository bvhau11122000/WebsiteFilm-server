import responseHandler from "../handlers/response.handler.js";
import filmModel from "../models/film.model.js";

const create = async (req, res) => {
  try {
    const {  } = req.params;

    const Films = new filmModel({
     
      ...req.body
    });
    await Films.save();
    responseHandler.created(res, { 
      ...Films._doc,
      id: Films.id,
      
    });
  } catch {
    responseHandler.error(res);
  }
};

  const removeFilm = async (req, res) => {
    try {
      const { filmId } = req.params;
  
      const film = await filmModel.deleteOne({
        _id: filmId
      });
      console.log(film);
      responseHandler.ok(res);
    } catch {
      responseHandler.error(res);
    }
  };
  const getAll = async (req, res) => {
    try {
      const films = await filmModel.find({}).sort("-createdAt");
      responseHandler.ok(res, films);
    } catch {
      responseHandler.error(res);
    }
  };
  export default { 
    create,
    removeFilm,
    getAll
  };