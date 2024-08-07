import Tag from "../models/TagModel.js"

export const getAll = async(req, res) => {
    try {
        const response = await Tag.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getWhere = async(req, res) => {
    try {
        const response = await Tag.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const store = async(req, res) => {
    try {
        await Tag.create(req.body);
        res.status(201).json({msg: "User Cerated!"});
    } catch (error) {
        console.log(error.message);
    }
}

export const update = async(req, res) => {
    try {
        await Tag.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated!"});
    } catch (error) {
        console.log(error.message);
    }
}

export const destroy = async(req, res) => {
    try {
        await Tag.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted!"});
    } catch (error) {
        console.log(error.message);
    }
}