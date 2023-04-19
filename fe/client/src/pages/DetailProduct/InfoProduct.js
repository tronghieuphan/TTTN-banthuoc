import { Button } from "@mui/material";
import { Input } from "antd";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setDataListSP } from "../../slices/dondathangSlice";
function InfoProduct(props) {
    let thongtin = props.thongtinsanpham;
    const [quatity, setQuatity] = useState(0);
    let account = JSON.parse(localStorage.getItem("ACCOUNT"));
    const thongtinsp = JSON.parse(localStorage.getItem("SANPHAM"));
    const navigate = useNavigate();
    let obj = {
        Mand: account?.id,
        id: thongtin?.id,
        Tensp: thongtin.Tensp,
        Giakm: thongtin.Giakm,
        Dongia: thongtin.Dongia,
        Soluong: quatity,
        Thanhtien: (thongtin.Giakm !== null ? thongtin.Giakm : thongtin.Dongia) * quatity,
    };
    let handleIncrease = () => {
        if (quatity < 5) {
            setQuatity(quatity + 1);
        }
    };
    let handleDecrease = () => {
        if (quatity > 0) {
            setQuatity(quatity - 1);
        }
    };
    let a = [];
    const handAddSp = async (obj) => {
        if (account?.id) {
            a = JSON.parse(localStorage.getItem("LISTSP")) || [];
            let p = a.find((item) => item.id === obj.id);
            if (p) {
                if (p.Soluong + obj.Soluong >= 5) {
                    Swal.fire({
                        icon: "error",
                        title: "Bạn chỉ được đặt tối đa 5 sản phẩm",
                    });
                    p.Soluong = 5;
                } else {
                    p.Soluong += obj.Soluong;
                }
            } else {
                a.push(obj);
            }
            localStorage.setItem("LISTSP", JSON.stringify(a));
        } else {
            Swal.fire({
                title: "Bạn hãy đăng nhập để được mua hàng nào ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Tôi đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
        }
    };

    return (
        <>
            <div className="w-100">
                <p className="fw-bold">Thương hiệu: {thongtin.Tenth}</p>
                <h3>{thongtin.Tensp}</h3>
                <hr />
                {thongtin.Giakm === null ? (
                    <h4>
                        Giá:{" "}
                        {thongtin.Dongia?.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </h4>
                ) : (
                    <h4 className="d-flex">
                        Giá:{" "}
                        <div
                            style={{
                                textDecoration: "line-through",
                                fontSize: "14px",
                                margin: "10px 0px",
                                color: "silver",
                            }}
                        >
                            {thongtin.Dongia?.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </div>
                        <div style={{ fontWeight: "bold", color: "#0F62F9" }}>
                            {thongtin.Giakm?.toLocaleString("it-IT", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </div>
                    </h4>
                )}
                <p>
                    <span className="fw-bold">Đơn vị bán: </span>{" "}
                    <Button variant="outlined">{thongtin.Donviban}</Button>
                </p>
                <p>
                    <span className="fw-bold">Danh mục: </span>
                    <span>{thongtin.Tendm}</span>
                </p>
                <p>
                    <span className="fw-bold">Loại sản phẩm: </span>
                    <span>{thongtin.Loai}</span>
                </p>
                <p>
                    <span className="fw-bold"> Quy cách: </span>
                    <span>{thongtin.Quycach}</span>
                </p>
                <p>
                    <span className="fw-bold"> Xuất xứ thương hiệu: </span>
                    <span>{thongtin.Tenxx}</span>
                </p>
                <p>
                    <span className="fw-bold">Nhà cung cấp: </span>
                    <span> {thongtin.Tenncc}</span>
                </p>
                <p>
                    <span className="fw-bold">Công dụng: </span>
                    <span>{thongtin.Congdung}</span>
                </p>
                <div className="d-flex">
                    <span
                        className="fw-bold d-flex align-items-center"
                        style={{ marginRight: "4%" }}
                    >
                        Chọn số lượng:
                    </span>
                    <form>
                        <div className="w-25 ml-5">
                            <div className="d-flex border-button" style={{ width: "fit-content" }}>
                                <Button onClick={handleDecrease}>-</Button>
                                <Input
                                    className="rounded-0 text-center"
                                    type="text"
                                    value={quatity}
                                    readOnly
                                    style={{ width: "100px" }}
                                />
                                <Button onClick={handleIncrease}>+</Button>
                            </div>
                        </div>
                    </form>
                </div>
                {thongtinsp.Soluongtk === 0 ? (
                    <Button className="w-50 p-2 mt-4 fs-5 fw-bold" variant="contained">
                        Hết hàng
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        className="w-50 p-2 mt-4 fs-5 fw-bold"
                        variant="contained"
                        onClick={() => handAddSp(obj)}
                    >
                        Chọn mua
                    </Button>
                )}
            </div>
        </>
    );
}

export default InfoProduct;
