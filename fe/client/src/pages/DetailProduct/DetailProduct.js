import { useEffect, useState } from "react";
import CardProduct from "../../components/Card/CardProduct/CartProduct";
import InfoProduct from "./InfoProduct";
import SliderDetail from "./SliderDetail";
import { FcFlashOn } from "react-icons/fc";
import { useSelector } from "react-redux";
import sanPhamAPI from "../../services/sanPhamAPI";
function DetailProduct() {
    // const { thongtinsanpham } = useSelector((state) => state.sanpham);
    const thongtinsanpham = JSON.parse(localStorage.getItem("SANPHAM"));
    console.log("thongtinsanpham: ", thongtinsanpham);

    const [chitiet, setChiTiet] = useState({});

    let obj = {
        id: thongtinsanpham.id,
    };
    console.log("obj: ", obj);
    const getChiTiet = async (obj) => {
        const data = await sanPhamAPI.getSanPhamChiTiet(obj);
        setChiTiet(data.data);
    };

    useEffect(() => {
        getChiTiet(obj);
    }, []);

    return (
        <>
            <div className="container-fluid w-100">
                <div className="row mx-5">
                    <div className="col-md-5 ml-5">
                        <div className=" mt-5 ">
                            <SliderDetail />
                            <div className="row w-100">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 ml-5">
                        <div className=" mt-5 ">
                            <InfoProduct thongtinsanpham={chitiet} />
                        </div>
                    </div>
                </div>
                {/* 
                <p className="text-left m-3 fw-bold fs-3">
                    <FcFlashOn /> SẢN PHẨM LIÊN QUAN <FcFlashOn />
                </p>
                <div className="d-flex flex-wrap justify-content-center">
                    {produce.map((produce) => (
                        <CardProduce produce={produce} />
                    ))}
                </div> */}
            </div>
        </>
    );
}

export default DetailProduct;
