import CRUD_thuongHieu from "../sevices/CRUD_thuongHieu";

let create_thuongHieu = async (req, res) => {
    let thuonghieu = await CRUD_thuongHieu.createThuongHieu(req.body);
    console.log("req.body: ", req.body);
    res.status(200).json(thuonghieu);
};

let getAll_thuongHieu = async (req, res) => {
    let thuonghieu = await CRUD_thuongHieu.getAllThuongHieu();
    console.log(thuonghieu);
    res.status(200).json(thuonghieu);
};
let getName_thuongHieu = async (req, res) => {
    let thuonghieu = await CRUD_thuongHieu.getByNameThuongHieu(req.body);
    res.status(200).json(thuonghieu);
};

let delete_thuongHieu = async (req, res) => {
    let tenthuonghieu = req.params.tenth;
    let thuonghieu = await CRUD_thuongHieu.deleteThuongHieu(tenthuonghieu);
    res.status(200).json(thuonghieu);
};
let update_thuongHieu = async (req, res) => {
    // let tenthuonghieu = req.params;
    let thuonghieu = await CRUD_thuongHieu.updateThuongHieu(
        // tenthuonghieu,
        req.body
    );
    res.status(200).json(thuonghieu);
};

module.exports = {
    create_thuongHieu,
    getAll_thuongHieu,
    delete_thuongHieu,
    update_thuongHieu,
    getName_thuongHieu,
};
