import CRUD_xuatXu from "../sevices/CRUD_xuatXu";

let create_xuatXu = async (req, res) => {
    let xuatxu = await CRUD_xuatXu.createXuatXu(req.body);
    res.status(200).json(xuatxu);
};

let getAll_xuatXu = async (req, res) => {
    let xuatxu = await CRUD_xuatXu.getAllXuatXu();
    console.log(xuatxu);
    res.status(200).json(xuatxu);
};
let getName_xuatXu = async (req, res) => {
    let xuatxu = await CRUD_xuatXu.getByNameXuatXu(req.query);
    res.status(200).json(xuatxu);
};

let delete_xuatXu = async (req, res) => {
    let tenxuatxu = req.params.tenxx;
    let xuatxu = await CRUD_xuatXu.deleteXuatXu(tenxuatxu);
    res.status(200).json(xuatxu);
};
let update_xuatXu = async (req, res) => {
    // let tenxuatxu = req.params;
    let xuatxu = await CRUD_xuatXu.updateXuatXu(req.body);
    res.status(200).json(xuatxu);
};

module.exports = {
    create_xuatXu,
    getAll_xuatXu,
    delete_xuatXu,
    update_xuatXu,
    getName_xuatXu,
};
