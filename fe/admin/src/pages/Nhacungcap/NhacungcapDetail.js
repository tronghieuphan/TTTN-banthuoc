import { Select, Input } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";

function NhacungcapDetail() {
    const [city, listCity] = useState([]);
    const [district, listDistrict] = useState([]);
    const [ward, listWard] = useState([]);

    //Lây API Thành phố
    const getAllCity = async () => {
        try {
            const response = await addressAPI.getAll_Province();
            listCity(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    //Lây API Thành phố
    const getAllDistrict = async () => {
        try {
            const response = await addressAPI.getAll_District();
            listDistrict(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    //Lây API Thành phố
    const getAllWard = async () => {
        try {
            const response = await addressAPI.getAll_Ward();
            listWard(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllCity();
        getAllDistrict();
        getAllWard();
    }, []);
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
      // Lấy API Thành Phố
      let arraycity = [];
      let arraydistrict = [];
      let arrayward = [];
      city.map((values, index) => arraycity.push(values.name));
      district.map((values, index) => arraydistrict.push(values.name));
      ward.map((values, index) => arrayward.push(values.name));
    return (
        <>
            <div className="m-4 ">
                <div className="bd-radius bg-content p-4 text-muted fw-bold">
                    <div className="d-flex justify-content-between">
                        <p className="fs-3 w-75">THÔNG TIN CHI TIẾT NHÀ CUNG CẤP</p>
                    </div>
                    <hr className="w-100 " />
                    <br />
                    <div>
                        <form action="" method="">
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="justify-content-center w-30 ">
                                    <label className="m-1 w-33">Tên nhà cung cấp:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Tên nhà cung cấp"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30 ">
                                    <label className="m-1 w-33">Email:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Email"
                                        type="text"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30 ">
                                    <label className="m-1 w-33">Số điện thoại:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Số điện thoại"
                                        type="tel"
                                        variant="outlined"
                                        value=""
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Phường/Xã:</label>
                                    <Select
                                        className="m-2 w-100"
                                        showSearch
                                        style={{
                                            width: 160,
                                        }}
                                        placeholder="Chọn phường, xã"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? "")
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        options={arrayward.map((item) => ({
                                            value: item,
                                            label: item,
                                        }))}
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Quận/Huyện:</label>
                                    <Select
                                        className="m-2 w-100"
                                        showSearch
                                        style={{
                                            width: 160,
                                        }}
                                        placeholder="Chọn quận, huyện"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? "")
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        options={arraydistrict.map((item) => ({
                                            value: item,
                                            label: item,
                                        }))}
                                    />
                                </div>
                                <div className="justify-content-center w-30">
                                    <label className="m-2 w-33">Thành phố/Tỉnh:</label>
                                    <Select
                                        className="m-2 w-100"
                                        showSearch
                                        style={{
                                            width: 160,
                                        }}
                                        placeholder="Chọn thành phố, tỉnh"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? "")
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        options={arraycity.map((item) => ({
                                            value: item,
                                            label: item,
                                        }))}
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

export default NhacungcapDetail;
