import { Input, Button } from "antd";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sanPhamAPI from "../../services/sanPhamAPI";
import React from "react";
import { setDataHA } from "../../slices/hinhanhdanhmucSlice";
import Swal from "sweetalert2";

function HinhanhDetail(props) {
  const handleCreate = props.handleCreate;
  const handleUpdate = props.handleUpdate;

  const { hinhanh } = useSelector((state) => state.hadm);
  
  const dispatch = useDispatch();
  //SET GIÁ TRỊ CHO BIẾN
  const [url, setUrl] = useState("");
  const [masp, setMasp] = useState("");

  // useEffect(() => {}, [hinhanh]);

  // TẠO STATE CHO CÁC THÔNG TIN
  const initialValues = {
    id: hinhanh ? hinhanh.id : "",
    url: hinhanh ? hinhanh.url : "",
    Masp: hinhanh ? hinhanh.Masp : "",
  };

  const [values, setValues] = useState(initialValues);
  const [sanphamList, setSanphamList] = useState([]);

  useEffect(() => {
    const getAllSp = async () => {
      const res = await sanPhamAPI.getAll();
      setSanphamList(res.data);
    };
    setUrl(hinhanh.Url);
    setMasp(hinhanh.Masp);
    getAllSp();
  }, [hinhanh]);
  //Xử lý nhập liệu url
  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

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

   // XỬ LÝ THÊM SỬA
   const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
        id: hinhanh.id,
        Url: url,
        Masp:values.Masp,
    };
    console.log(">>>", obj);
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
            //UPDATE
            if (hinhanh.Url) {
                handleUpdate(obj);
            }
            //CREATE
            else {
                handleCreate(obj);
            }
        }
    });
};

  //RESET LẠI GIÁ TRỊ VỀ BAN ĐẦU
  const handleReset = () => {
    setUrl("");
    setMasp("");
    dispatch(setDataHA([]));
  };

  return (
    <>
      <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
        <div>
          <form onSubmit={handleSubmit} method="post">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="justify-content-cen ter w-100 ">
                <label className="m-2 w-100">Đường dẫn</label>
                <Input
                  className="m-1 w-100"
                  id="inputUrl"
                  label="Tên xuất xứ"
                  variant="outlined"
                  type="text"
                  name="url"
                  value={url || ""}
                  onChange={handleOnChange}
                />
              </div>
              <div className="justify-content-center w-60 ">
                <label className="m-2 w-100">Mã Sản phẩm</label>
                <select
                  value={ values.Masp ? masp : "choose"}
                  onChange={handleChangeSP}
                  className="form-select"
                  aria-label="Default select example"
                  id="Masp"
                  name="Masp"
                >
                  <option value="choose">Mã sản phẩm</option>
                  {sanphamList.map((sanpham) => {
                    console.log(sanpham);
                    return (
                      <option
                        value={sanpham.id}
                        key={sanpham.id}
                        id={sanpham.id}
                      >
                        {sanpham.id}
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
                {hinhanh.Url ? "Lưu" : "Thêm"}
              </button>
              <Button
                type="primary"
                className="mx-2"
                
                onClick={handleReset}
              >
                Hủy
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default HinhanhDetail;
