import "./FormLogin.scss";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { login } from "../../slices/userSlice";
import { Form, Input, Button } from "antd";
import { useState } from "react";
function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [err, setError] = useState("");
    const handleSubmit = async (e) => {
        if (e.tendangnhap === undefined || e.matkhau === undefined) {
            setError("Nhập thông tin đầy đủ nào");
        } else {
            let a = await nguoiDungAPI.login(e);
            console.log("a: ", a.data);
            if (a.data === "Fail Login") {
                setError("Tài khoản không tồn tại");
            } else {
                if (a.data === "Fail Matkhau") {
                    setError("Mật khẩu không chính xác");
                } else {
                    dispatch(login(a.data.data));
                    localStorage.setItem("ACCOUNT", JSON.stringify(a.data.data))
                    navigate("/");

                }
            }
        }
    };

    return (
        <>
            <div className="content-center bg-login">
                <div className="box-login">
                    <div className="bg-icon p-4 mt-4">
                        <img
                            src={logo}
                            alt=""
                            className="rounded mx-auto d-block "
                            style={{ width: "250px", height: "80px" }}
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="color-text1">Xin chào bạn đến với HLVLH!</h3>
                        <p className="color-text2">
                            Hãy đăng nhập để được trãi nghiệm website một cách tốt nhất{" "}
                        </p>
                        <br />
                        <Form onFinish={handleSubmit} layout="vertical">
                            <Form.Item name="tendangnhap" label="Tên đăng nhập" className="fw-bold">
                                <Input className="w-100 py-2" id="standard-basic" />
                            </Form.Item>

                            <Form.Item name="matkhau" label="Mật khẩu" className="fw-bold">
                                <Input className="w-100 py-2" type="password" />
                            </Form.Item>
                            <span className="text-danger">{err}</span>
                            <Button type="primary" htmlType="submit" size="large" className="w-100">
                                Đăng nhập
                            </Button>
                        </Form>
                        <p className="pt-3 text-center">
                            Bạn chưa có tài khoản?
                            <Link to="/register">
                                <div>Tạo tài khoản</div>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
