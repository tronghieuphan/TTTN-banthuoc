import { Select, Input, Form, Button, DatePicker, Switch } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import thuonghieuAPI from "../../services/thuonghieuAPI";
import XuatxuAPI from "../../services/xuatXuAPI";
import loaisanPhamAPI from "../../services/loaisanPhamAPI";
import nhaCungCapAPI from "../../services/nhaCungCapAPI"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SanphamDetail() {
  const [loading, setLoading] = useState(false);

  const [listTh, setList] = useState([]);
  const getAllTh = async () => {
    try {
        setLoading(true);
        const response = await thuonghieuAPI.getAll();
        console.log(response);
        setList(response.data);
        setLoading(false);
    } catch (err) {
        throw new Error(err);
    }
};
useEffect(() => {
  getAllTh();
}, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <Link to="/sanpham-list">
          <Button className="mx-4">Quay lại</Button>
        </Link>
        <div className="m-4 ">
          <div className="bd-radius bg-content p-4 text-muted fw-bold">
            <div className="d-flex justify-content-between">
              <p className="fs-3 w-75">THÔNG TIN CHI TIẾT SẢN PHẨM</p>
            </div>
            <hr className="w-100 " />
            <br />
            <div>
              <Form>
                {/* {sanpham.Tensp ? (
                  <Form.Item name="id" label="Id:">
                    <Input />
                  </Form.Item>
                ) : (
                  ""
                )} */}
                <div className="d-flex flex-wrap justify-content-between">
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="Tensp"
                      label="Tên Sản Phẩm"
                      //   initialValue={nguoidung.Email}
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
                      name="dongia"
                      label="Đơn giá"
                      //   initialValue={nguoidung.Email}
                    >
                      <Input className=" w-100" label="Đơn giá" type="text" />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="dvb"
                      label="Đơn vị bán"
                      //   initialValue={nguoidung.Email}
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
                      name="dbc"
                      label="Dạng bào chế"
                      //   initialValue={nguoidung.Email}
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
                      name="dbc"
                      label="Quy cách"
                      //   initialValue={nguoidung.Email}
                    >
                      <Input className=" w-100" label="Quy cách" type="text" />
                    </Form.Item>
                  </div>
                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="dbc"
                      label="Công dụng"
                      //   initialValue={nguoidung.Email}
                    >
                      <Input className=" w-100" label="Công dụng" type="text" />
                    </Form.Item>
                  </div>

                  <div className=" mt-4 justify-content-between w-30 ">
                    <Form.Item
                      className=" w-33"
                      name="dbc"
                      label="Giá khuyến mãi"
                      //   initialValue={nguoidung.Email}
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
                      name="dbc"
                      label="Số lượng"
                      //   initialValue={nguoidung.Email}
                    >
                      <Input className=" w-100" label="Số lượng" type="text" />
                    </Form.Item>
                  </div>

                  {/* //khoá ngoại */}
                  {/* Mã loại sp  */}
                  <div className="justify-content-between w-30">
                    <Form.Item
                      className="my-2 w-33"
                      name="maloai"
                      label="Loại sản phẩm"
                      //   initialValue={nguoidung.Thanhpho}
                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="chọn loại sản phẩm"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        // options={arraycity.map((item) => ({
                        //   value: item.code,
                        //   label: item.name,
                        // }))}
                      />
                    </Form.Item>
                  </div>
                  {/* Xuất Xứ */}
                  <div className="justify-content-between w-30">
                    <Form.Item
                      className="my-2 w-33"
                      name="maxx"
                      label="Xuất xứ"
                      //   initialValue={nguoidung.Thanhpho}
                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="chọn nơi xuất xứ "
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        // options={arraycity.map((item) => ({
                        //   value: item.code,
                        //   label: item.name,
                        // }))}
                      />
                    </Form.Item>
                  </div>
                  {/* Thương hiệu */}
                  <div className="justify-content-between w-30">
                    <Form.Item
                      className="my-2 w-33"
                      name="maxx"
                      label="Thương hiệu"
                      initialValue={thuonghieuAPI.Thanhpho}
                    >
                      <Select
                        className="w-100"
                        showSearch
                        style={{
                          width: 160,
                        }}
                        placeholder="chọn thương hiệu "
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        // options={arraycity.map((item) => ({
                        //   value: item.code,
                        //   label: item.name,
                        // }))}
                      />
                    </Form.Item>
                  </div>
                  {/* Nhà cung cấp */}
                  <div className="justify-content-between w-30">
                    <Form.Item
                      className="my-2 w-33"
                      name="mancc"
                      label="Nhà cung cấp"
                      //   initialValue={nguoidung.Thanhpho}
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
                        // options={arraycity.map((item) => ({
                        //   value: item.code,
                        //   label: item.name,
                        // }))}
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
