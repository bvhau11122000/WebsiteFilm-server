import responseHandler from "../handlers/response.handler.js";
import viewModel from "../models/view.model.js";

const addView = async (req, res) => {
  try {
    const isView = await viewModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (isView) return responseHandler.ok(res, isView);

    const view = new viewModel({
      ...req.body,
      user: req.user.id
    });

    await view.save();

    responseHandler.created(res, view);
  } catch {
    responseHandler.error(res);
  }
};

const removeView= async (req, res) => {
  try {
    const { viewId } = req.params;
    const view = await viewModel.deleteOne({
      _id: viewId
    }); 
    console.log(view)
    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getViewOfUser = async (req, res) => {
  try {
    const view = await viewModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, view);
  } catch {
    responseHandler.error(res);
  }
};
const getAll = async (req, res) => {
  try {
    
    const view = await viewModel.find({});
    responseHandler.ok(res, view);
  } catch {
    responseHandler.error(res);
  }
};

export default { 
    addView,
    removeView,
    getViewOfUser,
    getAll
};