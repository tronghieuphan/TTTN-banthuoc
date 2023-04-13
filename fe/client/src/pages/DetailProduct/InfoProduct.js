import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { useState } from "react";
function InfoProduct(props) {
    let thongtin = props.thongtinsanpham;

    const [quatity, setQuatity] = useState(0);

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
    return (
        <>
            <div className="w-100">
                <p className="fw-bold">
                    Thương hiệu: <Link>{thongtin.Tenth}</Link>
                </p>
                <h3>{thongtin.Tensp}</h3>
                <hr />
                <h4>{thongtin.Dongia}</h4>
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
                    <span>{thongtin.Tenloai}</span>
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
                <Button type="submit" className="w-50 p-2 mt-4 fs-5 fw-bold" variant="contained">
                    Chọn mua
                </Button>
            </div>
        </>
    );
}

export default InfoProduct;
