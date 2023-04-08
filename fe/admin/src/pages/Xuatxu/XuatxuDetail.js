import { Input, Button } from "antd";
import { motion } from "framer-motion";
import React from "react";

function XuatxuDetail() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                    <div>
                        <form action="" method="">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className="justify-content-center w-90 ">
                                    <label className="m-1 w-100">Tên xuất xứ:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Tên xuất xứ"
                                        variant="outlined"
                                        value=""
                                    />
                                    <Button className="mt-3">Thêm</Button>
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
