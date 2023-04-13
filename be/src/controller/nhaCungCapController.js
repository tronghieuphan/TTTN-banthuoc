import CRUD_nhaCungCap from "../sevices/CRUD_nhaCungCap";

let create_nhaCungCap = async (req, res) => {
    let nhacungcap = await CRUD_nhaCungCap.createNhaCungCap(req.body);
    res.status(200).json(nhacungcap);
};

let getAll_nhaCungCap = async (req, res) => {
    let nhacungcap = await CRUD_nhaCungCap.getAllNhaCungCap();
    res.status(200).json(nhacungcap);
};
let getName_nhaCungCap = async (req, res) => {
    let nhacungcap = await CRUD_nhaCungCap.getByNameNhaCungCap(req.query);
    res.status(200).json(nhacungcap);
};

let delete_nhaCungCap = async (req, res) => {
    let tennhacungcap = req.params.tenncc;
    let nhacungcap = await CRUD_nhaCungCap.deleteNhaCungCap(tennhacungcap);
    res.status(200).json(nhacungcap);
};
let update_nhaCungCap = async (req, res) => {
    let nhacungcap = await CRUD_nhaCungCap.updateNhaCungCap(req.body);
    res.status(200).json(nhacungcap);
};

module.exports = {
    create_nhaCungCap,
    getAll_nhaCungCap,
    delete_nhaCungCap,
    update_nhaCungCap,
    getName_nhaCungCap,
};
