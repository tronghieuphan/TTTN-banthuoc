import "./FormLogin.scss";
import { TextField, Button } from "@mui/material";
import logo from "../../assets/image/logo.png";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
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
            toast.error("Vui lòng nhập đầy đủ thông tin!");
        } else {
            let a = await nguoiDungAPI.login(obj);
            console.log('a: ', a.data.data);
            if (a.data === "Fail Login") {
                toast.error("Tài khoản không tồn tại !");
            } else {
                if (a.data === "Fail Matkhau") {
                    toast.error("Mật khẩu không chính xác!");
                } else {
                    toast.success("Đăng nhập thành công");
                    dispatch(login(a.data.data));
                    navigate("/home");
                }
            }
        }
    };
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
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
                                    autoComplete="current-password"
                                    variant="standard"
                                    name="matkhau"
                                    onChange={handleOnChange}
                                />
                                <br />
                                <Button
                                    className="mt-4 w-100 p-3 fs-5 fw-bold  "
                                    variant="contained"
                                    type="submit"
                                >
                                    Đăng nhập
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default LoginPage;
