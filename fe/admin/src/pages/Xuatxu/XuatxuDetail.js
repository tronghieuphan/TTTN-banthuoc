import { Input, Button } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import xuatXuAPI from "../../services/xuatXuAPI";
import { successDialog } from "../../components/Dialog/Dialog";
import { useSelector } from "react-redux";

function XuatxuDetail(props) {
    const { xuatxu } = useSelector((state) => state.xxdm);
    const [tenxx, setTenxx] = useState("");
    const [listxx, setList] = useState([]);

    useEffect(() => {
        setTenxx(xuatxu.Tenxx);
    }, [xuatxu]);
    const handleOnChange = (e) => {
        setTenxx(e.target.value);
    };
    const getAllXx = async () => {
        try {
            const response = await xuatXuAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const handleCreate = async (e) => {
        const response = await xuatXuAPI.create(tenxx);
        if (response.data.message === "Create Successfully") {
            successDialog();
            getAllXx();
        }
    };
    
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                    <div>
                        <form onSubmit={handleCreate} method="">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className="justify-content-center w-90 ">
                                    <label className="m-1 w-100">Tên xuất xứ:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Tên xuất xứ"
                                        variant="outlined"
                                        type="text"
                                        name="tenxx"
                                        value={tenxx || ""}
                                        onChange={handleOnChange}
                                    />
                                    <Button className="mt-3" type="submit">
                                        Thêm
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default XuatxuDetail;
