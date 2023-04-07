import { Input, Button } from "antd";

import React from "react";

function XuatxuDetail() {
    return (
        <>
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
        </>
    );
}

export default XuatxuDetail;
