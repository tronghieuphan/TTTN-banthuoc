import { Select, Input } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";

function SanphamDetail() {
    return (
        <>
            <div className="m-4 ">
                <div className="bd-radius bg-content p-4 text-muted fw-bold">
                    <div className="d-flex justify-content-between">
                        <p className="fs-3 w-75">THÔNG TIN CHI TIẾT SẢN PHẨM</p>
                    </div>
                    <hr className="w-100 " />
                    <br />
                    <div>
                        <form action="" method="">
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="justify-content-center w-30 ">
                                    <label className="m-1 w-33">Tên Sản phẩm:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Tên Sản phẩm"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30 ">
                                    <label className="m-1 w-33">Đơn giá:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Đơn giá"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30 ">
                                    <label className="m-1 w-33">Đơn vị bán</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Đơn vị bán"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Dạng bào chế</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Dạng bào chế"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Quy cách</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Quy cách"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Công dụng</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Công dụng"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Giá khuyến mãi</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Giá khuyến mãi"
                                       
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Số lượng</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Số lượng"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Mã Loại</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Dạng bào chế"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Mã xuất xứ</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Mã xuất xứ"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Mã thương hiệu</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="mã thương hiệu"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Mã nhà cung cấp </label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Mã nhà cung cấp"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SanphamDetail;
