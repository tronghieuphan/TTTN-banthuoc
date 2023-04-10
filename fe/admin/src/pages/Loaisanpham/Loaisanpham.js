import { Form, Select } from "antd";
import { useEffect, useState } from "react";
import sanPhamAPI from "../../services/sanPhamAPI";
import React from "react";

function LoaisanphamDetail() {
    const [sanphamList, setSanphamList] = useState([]);

    const getAllSp = async () => {
        const res = await sanPhamAPI.getAll();
        setSanphamList(res.data);
    };
    useEffect(() => {
        getAllSp();
    });
    let listSp = [];
    sanphamList.map((values, index) => listSp.push({ Masp: values.Masp, Tensp: values.Tensp }));
    //Xử lý nhập liệu url

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };

    return (
        <>
            <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                <Form onFinish={[]}>
                    <div className="d-flex flex-wrap justify-content-between">
                        <Form.Item className="my-2 w-33" name="Masp" label="Sản phẩm">
                            <Select
                                className="w-100"
                                showSearch
                                style={{
                                    width: 160,
                                }}
                                placeholder="Chọn sản phẩm"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={sanphamList.map((item) => ({
                                    value: item.Masp,
                                    label: item.Tensp,
                                }))}
                            />
                        </Form.Item>
                        <Select
                            showSearch
                            style={{
                                width: 160,
                            }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                            }
                            options={sanphamList.map((item) => ({
                                value: item.id,
                                label: item.Tensp,
                            }))}
                        />
                    </div>
                </Form>
            </div>
        </>
    );
}

export default LoaisanphamDetail;
