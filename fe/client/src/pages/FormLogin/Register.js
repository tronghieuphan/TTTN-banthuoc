import "./FormLogin.scss";
import logo from "../../assets/image/logo.png";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import nguoiDungAPI from "../../services/nguoiDungAPI";
function RegisterPage() {
    const navigate = useNavigate();
    const handleRegister = async (obj) => {
        console.log(obj);
        if (
            obj.Holot === undefined ||
            obj.Ten === undefined ||
            obj.Tendangnhap === undefined ||
            obj.Matkhau === undefined ||
            obj.Email === undefined ||
            obj.Sdt === undefined
        ) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
        } else {
            const data = await nguoiDungAPI.register(obj);
            console.log(data.data);
            if (data.data.result === "Email Exist") {
                toast.error("Email đã tồn tại, vui lòng nhập lại email khác");
            } else if (data.data.result === "Sdt Exist") {
                toast.error("Số điện thoại đã tồn tại, vui lòng nhập lại số điện thoại khác");
            } else if (data.data.result === "NguoiDung Exist") {
                toast.error("Tên đăng nhập này đã được sử dụng vui lòng tìm tên khác");
            } else if (data.data.message === "Create Successfull") {
                toast.success("Chúc mừng bạn đã đăng ký tài khoản thành công !");
                navigate("/login");
            }
        }
    };
    return (
        <>
            <div className="content-center bg-login">
                <div className="box-register">
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
                        <p className="color-text2">Hãy nhập thông tin để đăng ký tài khoản nào</p>

                        <Form onFinish={handleRegister} layout="vertical" size="lagre">
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Item className="fw-bold" label="Họ lót" name="Holot">
                                        <Input className="py-2 " />
                                    </Form.Item>
                                </div>{" "}
                                <div className="col-md-6">
                                    <Form.Item name="Ten" className="fw-bold" label="Tên">
                                        <Input className="py-2" />
                                    </Form.Item>
                                </div>
                            </div>
                            <Form.Item className="fw-bold" label="Tên đăng nhập" name="Tendangnhap">
                                <Input className="w-100 py-2" />
                            </Form.Item>
                            <Form.Item name="Matkhau" className="fw-bold" label="Mật khẩu">
                                <Input className="w-100 py-2" type="password" />
                            </Form.Item>
                            <Form.Item name="Sdt" className="fw-bold" label="Số điện thoại">
                                <Input className="w-100 py-2" type="tel" />
                            </Form.Item>
                            <Form.Item name="Email" className="fw-bold" label="Email">
                                <Input className="w-100 py-2" type="email" />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    className=" w-100 fw-bold  "
                                    size="large"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Tạo tài khoản
                                </Button>
                            </Form.Item>
                        </Form>
                        <Link to="/login">Quay trở lại </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
