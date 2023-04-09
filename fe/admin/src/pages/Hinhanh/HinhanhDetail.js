import { Input, Button } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import sanPhamAPI from "../../services/sanPhamAPI";
import React from "react";

function HinhanhDetail() {
  //XỬ LÝ LƯU THÔNG TIN SẢN PHẨM VỪA CHỌN Ở DATATABLE
  const { state } = useLocation();
  let hinhanh = null;
  if (state) {
    //nếu có state thì lưu, không thì giữ nguyên là null
    hinhanh = state.record;
  }

  // TẠO STATE CHO CÁC THÔNG TIN
  const initialValues = {
    id: hinhanh ? hinhanh.id : "",
    url: hinhanh ? hinhanh.url : "",
    Masp: hinhanh ? hinhanh.idmsp : "",
  };


  
  const [values, setValues] = useState(initialValues);
  const [sanphamList, setSanphamList] = useState([]);

  useEffect(() => {
    const getAllSp = async () => {
      const res = await sanPhamAPI.getAll();
      setSanphamList(res.data);
    };
    getAllSp();
  }, []);

  //XỬ LÝ THAY ĐỔI SP
  const handleChangeSP = (e) => {
    const { id, name } = e.target;
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];

    setValues({
      ...values,
      [id]: el.getAttribute("id"),
      [name]: el.getAttribute("value"),
    });
  };

  return (
    <>
      <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
        <div>
          <form action="" method="post">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="justify-content-cen ter w-100 ">
                <label className="m-2 w-100">Đường dẫn</label>
                <Input
                  className="m-1 w-100"
                  id="outlined-basic"
                  label="Url"
                  type="text"
                  variant="outlined"
                  value=""
                />
              </div>
              <div className="justify-content-center w-60 ">
                <label className="m-2 w-33">Tên Sản phẩm</label>
                <select
                  value={values.Tensp ? values.Tensp : "choose"}
                  onChange={handleChangeSP}
                  className="form-select"
                  aria-label="Default select example"
                  id="Masp"
                  name="Tensp"
                >
                  <option value="choose">Mã sản phẩm</option>
                  {sanphamList.map((sanpham) => {
                    console.log(sanpham);
                    return (
                      <option
                        value={sanpham.Tensp}
                        key={sanpham.id}
                        id={sanpham.id}
                      >
                        {sanpham.Tensp}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                className="mx-2"
                style={{
                  background: "#1677FF",
                  color: "#fff",
                  border: "1px solid #1677FF",
                  padding: "3px 15px",
                  borderRadius: "5px",
                }}
              >
                {/* {xuatxu.Tenxx ? "Lưu" : "Thêm"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default HinhanhDetail;
