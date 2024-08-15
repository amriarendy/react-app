import Category from "../models/CategoryModel.js";

export const getAll = async (req, res) => {
  try {
    const response = await Category.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWhere = async (req, res) => {
  try {
    const response = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const store = async (req, res) => {
  try {
    await Category.create(req.body);
    res
      .status(201)
      .json({ code: 201, status: "success", message: "Data created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const update = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ code: 201, status: "success", message: "Data updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ code: 200, status: "success", message: "Data deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
