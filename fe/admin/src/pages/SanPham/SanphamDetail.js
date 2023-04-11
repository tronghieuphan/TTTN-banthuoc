import { Select, Input, Form, Button } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { exist, successDialog } from "../../components/Dialog/Dialog";
import thuonghieuAPI from "../../services/thuonghieuAPI";
import xuatXuAPI from "../../services/xuatXuAPI";
import loaiSanPhamAPI from "../../services/loaiSanPhamAPI";
import nhaCungCapAPI from "../../services/nhaCungCapAPI"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sanphamAPI from "../../services/sanPhamAPI";
import { setDataSP } from "../../slices/dataAdd";
function SanphamDetail() {
  // const [loading, setLoading] = useState(false);


  const [TH, setListTh] = useState([]);
  const [XX, setListXX] = useState([]);
  const [NCC, setListNCC] = useState([]);
  const [LSP, setListLSP] = useState([]);

   const { sanpham } = useSelector((state) => state.dataAdd);
const dispatch =useDispatch();
  const getAllTh = async () => {
    try {
        const response = await thuonghieuAPI.getAll();
        console.log(response);
        setListTh(response.data);
    } catch (err) {
        throw new Error(err);
    }
};
const getAllXx = async () => {
  try {
      const response = await xuatXuAPI.getAll();
      setListXX(response.data);
  } catch (err) {
      throw new Error(err);
  }
};
 const getAllNcc = async () => {
        try {
            const response = await nhaCungCapAPI.getAll();
            setListNCC(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getAllLSP = async () => {
      try {
          const response = await loaiSanPhamAPI.getAll();
          setListLSP(response.data);
      } catch (err) {
          throw new Error(err);
      }
  };

useEffect(() => {
  getAllTh();
  getAllXx();
  getAllLSP();
  getAllNcc();
  
}, []);


//thêm
const handleCreate = async (obj) => {
  const data = await sanphamAPI.create(obj);
  console.log(data.data);
  if (data.data.message === "SanPham Exist") {
      exist();
  } else if (data.data.message === "Create Successfully") {
      successDialog();
  }
};
//SỬA
const handleUpdate = async (obj) => {
  const data = await sanphamAPI.update(obj);
   console.log('data.data.message: ', data.data.message);
  if (data.data.message === "Update SanPham Successful") {
     
      successDialog();
  }
};
const deleteStore = ()=>
{
  dispatch(setDataSP([]))
}
const handleSubmit = (e) => {
  console.log("obj: ", e);
  Swal.fire({
      title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
      confirmButtonText: "Lưu",
      showCancelButton: true,
      cancelButtonText: "Hủy",
      customClass: {
          title: "fs-5 text-dark",
          confirmButton: "bg-primary shadow-none",
          cancelButton: "bg-warning shadow-none",
      },
  }).then((result) => {
      if (result.isConfirmed) {
          // UPDATE
          if (sanpham.id) {
              // console.log(">>>>");
              handleUpdate(e);
          }
          //CREATE
          else {
              handleCreate(e);
          }
      }
  });
};


    let Thuonghieu = [];
    let Xuatxu = [];
    let Nhacungcap = [];
    let Loaisanpham = [];
    TH.map((values, index) => Thuonghieu.push({ name: values.id, code: values.Tenth }));
    NCC.map((values, index) => Nhacungcap.push({ name: values.id, code: values.Tenncc }));
    XX.map((values, index) => Xuatxu.push({ name: values.id, code: values.Tenxx }));
    LSP.map((values, index) => Loaisanpham.push({ name: values.id, code: values.Tenloai }));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <Link to="/sanpham-list">
          <Button className="mx-4" onClick={deleteStore}>Quay lại</Button>
        </Link>
        <div className="m-4 ">
          <div className="bd-radius bg-content p-4 text-muted fw-bold">
            <div className="d-flex justify-content-between">
              <p className="fs-3 w-75">THÔNG TIN CHI TIẾT SẢN PHẨM</p>
            </div>
            <hr className="w-100 " />
            <br />
            <div>
              <Form onFinish={handleSubmit}>
                {sanpham.Tensp ? (
                  <Form.Item name="id" label="Id:" initialValue={sanpham.id}>
                     
                    <Input disabled/>
                  </Form.Item>
                ) : (
                  ""
                )}
                <div className="d-flex flex-wrap justify-content-between">
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Tensp"
                      label="Tên Sản Phẩm"
                        initialValue={sanpham.Tensp}
                    >
                      <Input
                        className=" w-100"
                        label="Tên Sản Phẩm"
                        type="text"
                      />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Dongia"
                      label="Đơn giá"
                      initialValue={sanpham.Dongia}

                    >
                      <Input className=" w-100" type="text" />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Donviban"
                      label="Đơn vị bán"
                      initialValue={sanpham.Donviban}

                    >
                      <Input
                        className=" w-100"
                        label="Đơn vị bán"
                        type="text"
                      />
                    </Form.Item>
                  </div>

                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Dangbaoche"
                      label="Dạng bào chế"
                         initialValue={sanpham.Dangbaoche}
                    >
                      <Input
                        className=" w-100"
                        label="Dạng bào chế"
                        type="text"
                      />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Quycach"
                      label="Quy cách"
                        initialValue={sanpham.Quycach}
                    >
                      <Input className=" w-100" label="Quy cách" type="text" />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Congdung"
                      label="Công dụng"
                      initialValue={sanpham.Congdung}

                    >
                      <Input className=" w-100" type="text" />
                    </Form.Item>
                  </div>

                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Giakm"
                      label="Giá khuyến mãi"
                      initialValue={sanpham.Giakm}

                    >
                      <Input
                        className=" w-100"
                        label="Giá khuyến mãi"
                        type="text"
                      />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Soluongtk"
                      label="Số lượng"
                      initialValue={sanpham.Soluongtk}

                    >
                      <Input className=" w-100" type="text" />
                    </Form.Item>
                  </div>

                  {/* //khoá ngoại */}
                  {/* Mã loại sp  */}
                  <div className="mt-3 justify-content-between w-30">
                    <Form.Item
<<<<<<< HEAD
                      className="my-4 w-33"
                      name="maloai"
=======
                      className="my-2 w-33"
                      name="Maloai"
>>>>>>> f09ec7031be3a4bd263053ec28691561e1a1c7ac
                      label="Loại sản phẩm"
                      initialValue={sanpham.Maloai}

                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="Chọn loại sản phẩm"
                        optionFilterProp="children"
                        // onChange={onChange}
                        //  onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={Loaisanpham.map((item) => ({
                          value: item.name,
                          label: item.code,
                        }))}
                      />
                    </Form.Item>
                  </div>
                  {/* Xuất Xứ */}
                  <div className="justify-content-between w-30">
                    <Form.Item
<<<<<<< HEAD
                      className="my-4 w-33"
                      name="maxx"
=======
                      className="my-2 w-33"
                      name="Maxx"
>>>>>>> f09ec7031be3a4bd263053ec28691561e1a1c7ac
                      label="Xuất xứ"
                      initialValue={sanpham.Maxx}

                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="Chọn nơi xuất xứ "
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={Xuatxu.map((item) => ({
                          value: item.name,
                          label: item.code,
                        }
                        ))}
                      />
                    </Form.Item>
                  </div>
                  {/* Thương hiệu */}
                  <div className="justify-content-between w-30">
                    <Form.Item
<<<<<<< HEAD
                      className="my-4 w-33"
                      name="maxx"
=======
                      className="my-2 w-33"
                      name="Math"
>>>>>>> f09ec7031be3a4bd263053ec28691561e1a1c7ac
                      label="Thương hiệu"
                      initialValue={sanpham.Math}

                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="Chọn thương hiệu "
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={Thuonghieu.map((item) => ({
                          value: item.name,
                          label: item.code,
                        }))}
                      />
                    </Form.Item>
                  </div>
                  {/* Nhà cung cấp */}
                  <div className="justify-content-between w-30">
                    <Form.Item
<<<<<<< HEAD
                      className="my-4 w-33"
                      name="mancc"
=======
                      className="my-2 w-33"
                      name="Mancc"
>>>>>>> f09ec7031be3a4bd263053ec28691561e1a1c7ac
                      label="Nhà cung cấp"
                      initialValue={sanpham.Mancc}

                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="chọn nhà cung cấp"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={Nhacungcap.map((item) => ({
                          value: item.name,
                          label: item.code,
                        }))}
                      />
                    </Form.Item>
                  </div>
                </div>


                <div className="d-flex m-3 w-100 justify-content-center">
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="m-2">
                      Lưu
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" className="m-2">
                      Hủy
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SanphamDetail;
