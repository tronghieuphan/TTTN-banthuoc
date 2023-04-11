import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import React from "react";
import Swal from "sweetalert2";
import { setDataTH } from "../../slices/thuonghieudanhmucSlice";

function ThuonghieuDetail(props) {
  //GOI PROPS
  const handleCreate = props.handleCreate;
  const handleUpdate = props.handleUpdate;

  const { thuonghieu } = useSelector((state) => state.thdm);
  const dispatch = useDispatch();
  //SET GIÁ TRỊ CHO BIẾN
  const [tenth, setTenth] = useState("");

  useEffect(() => {
    setTenth(thuonghieu.Tenth);
  }, [thuonghieu]);

  //XỬ LÝ NHẬP LIỆU
  const handleOnChange = (e) => {
    setTenth(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: thuonghieu.id,
      Tenth: tenth, // biến Tenxx phải ghi đúng với phần data.Tenxx bên be
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
        if (thuonghieu.Tenth) {
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
    setTenth("");
    dispatch(setDataTH([]));
  };
  return (
    <>
      <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
        <div>
          <form onSubmit={handleSubmit} method="post">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="justify-content-cen ter w-100 ">
                <label className="m-2 w-100">Tên thương hiệu</label>
                <Input
                  className="m-1 w-100"
                  id="outlined-basic"
                  label="Tên thương hiệu"
                  type="text"
                  variant="outlined"
                  name="tenth"
                  value={tenth || ""}
                  onChange={handleOnChange}
                />
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
                  {thuonghieu.Tenth ? "Lưu" : "Thêm"}
                </button>

                <Button type="primary" onClick={handleReset}>
                  Hủy
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ThuonghieuDetail;
