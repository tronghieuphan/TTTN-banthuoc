import "./FormLogin.scss";
import { TextField, Button, Link } from "@mui/material";
import logo from "../../assets/image/logo.png";

function LoginPage() {
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

                        <form action="" method="">
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
                            <br />
                            <Button className="mt-4 w-100 p-3 fs-5 fw-bold  " variant="contained">
                                Đăng nhập
                            </Button>
                        </form>
                        <p className="pt-3 text-center">
                            Bạn chưa có tài khoản?<Link to=""> Tạo tài khoản</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
