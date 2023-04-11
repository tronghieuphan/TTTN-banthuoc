import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { useState } from "react";
function InfoProduct() {
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
                    Thương hiệu: <Link>Tất Thành</Link>
                </p>
                <h3>
                    Siro bổ phế Bối Mẫu Forte Mom And Baby Tất Thành hỗ trợ giảm ho, đau rát họng,
                    khản tiếng (125ml){" "}
                </h3>
                <hr />
                <h4>55.000đ/Chai</h4>
                <p>
                    <span className="fw-bold">Đơn vị bán: </span>{" "}
                    <Button variant="outlined">Chai</Button>
                </p>
                <p>
                    <span className="fw-bold">Danh mục: </span>
                    <span>Dung dịch</span>
                </p>
                <p>
                    <span className="fw-bold">Loại sản phẩm: </span>
                    <span>Chăm sóc da</span>
                </p>
                <p>
                    <span className="fw-bold"> Quy cách: </span>
                    <span>1 Chai x 1 Chai</span>
                </p>
                <p>
                    <span className="fw-bold"> Xuất xữ thương hiệu: </span>
                    <span>Việt Nam</span>
                </p>
                <p>
                    <span className="fw-bold">Nhà sản xuất: </span>
                    <span> CN CTY CP DƯỢC PHẨM SYNTECH</span>
                </p>
                <p>
                    <span className="fw-bold">Công dụng: </span>
                    <span>
                        Bối Mẫu Forte Tất Thành hỗ trợ bổ phổi ích phế, hỗ trợ giảm ho, đau rát
                        họng, khản tiếng.
                    </span>
                </p>
                <div className="d-flex">
                    <span
                        className="fw-bold d-flex align-items-center"
                        style={{ marginRight: "4%" }}
                    >
                        Chọn số lượng:
                    </span>
                    <div className="w-25 ml-5">
                        <div className="d-flex border-button" style={{ width: "fit-content" }}>
                            <Button onClick={handleDecrease}>-</Button>
                            <Input
                                className="rounded-0 text-center"
                                type="text"
                                value={quatity}
                                readOnly
                            />
                            <Button onClick={handleIncrease}>+</Button>
                        </div>
                    </div>
                </div>
                <Button className="w-50 p-2 mt-4 fs-5 fw-bold" variant="contained">
                    Chọn mua
                </Button>
            </div>
        </>
    );
}

export default InfoProduct;
