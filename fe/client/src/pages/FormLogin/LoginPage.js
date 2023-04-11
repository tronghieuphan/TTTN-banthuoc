import "./FormLogin.scss";
import { TextField, Button} from "@mui/material";
import logo from "../../assets/image/logo.png";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { login } from "../../slices/userSlice";
function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const init = {
        tendangnhap: "",
        matkhau: "",
    };
    const [account, setAccount] = useState(init);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        let obj = {
            tendangnhap: account.tendangnhap,
            matkhau: account.matkhau,
        };
        if (account.tendangnhap === "" || account.matkhau === "") {
        } else {
            let a = await nguoiDungAPI.login(obj);
            console.log('a: ', a.data.data);
            if (a.data === "Fail Login") {
            } else {
                if (a.data === "Fail Matkhau") {
                } else {
                    dispatch(login(a.data.data));
                    navigate("/home");
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

                        <form onSubmit={handleSubmit} method="post">
                            <TextField
                                className="w-100 py-2"
                                id="standard-basic"
                                label="Tên đăng nhập"
                                name="tendangnhap"
                                variant="standard"
                                onChange={handleOnChange}

                            />
                            <br />
                            <TextField
                                className="w-100 py-2"
                                id="standard-password-input"
                                label="Mật khẩu"
                                type="password"
                                name="matkhau"
                                autoComplete="current-password"
                                variant="standard"
                                onChange={handleOnChange}

                            />
                            <br />
                            <Button className="mt-4 w-100 p-3 fs-5 fw-bold  " variant="contained" type="submit">
                                Đăng nhập
                            </Button>
                        </form>
                        <p className="pt-3 text-center">
                            Bạn chưa có tài khoản?<Link to="/register"><div>Tạo tài khoản</div></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
