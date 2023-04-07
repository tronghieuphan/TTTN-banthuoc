import "./FormLogin.scss";
import { TextField, Button } from "@mui/material";
import logo from "../../assets/image/logo.png";

function RegisterPage() {
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

                        <form action="" method="">
                            <div className="d-flex w-100">
                                <TextField
                                    className="py-2 w-50"
                                    id="standard-basic"
                                    label="Họ lót"
                                    value=""
                                    variant="standard"
                                />
                                <br />

                                <TextField
                                    className="py-2 w-50 "
                                    id="standard-basic"
                                    label="Tên"
                                    value=""
                                    variant="standard"
                                    style={{ marginLeft: "10%" }}
                                />
                                <br />
                            </div>
                            <TextField
                                className="w-100 py-2"
                                id="standard-basic"
                                label="Tên đăng nhập"
                                value=""
                                variant="standard"
                            />
                            <br />
                            <TextField
                                className="w-100 py-2"
                                id="standard-password-input"
                                label="Mật khẩu"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                value="fafasfs"
                            />
                            <TextField
                                className="w-100 py-2"
                                id="standard-basic"
                                label="Số điện thoại"
                                value=""
                                variant="standard"
                                type="tel"
                            />
                            <br />
                            <TextField
                                className="w-100 py-2"
                                id="standard-basic"
                                label="Email"
                                value=""
                                variant="standard"
                                type="email"
                            />
                            <br />

                            <Button className="mt-4 w-100 p-3 fs-5 fw-bold  " variant="contained">
                                Tạo tài khoản
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
