import { useEffect, useState } from "react";
import CardProduct from "../../components/Card/CardProduct/CartProduct";
import InfoProduct from "./InfoProduct";
import SliderDetail from "./SliderDetail";
import { FcFlashOn } from "react-icons/fc";
import sanPhamAPI from "../../services/sanPhamAPI";
function DetailProduct() {
    // const { thongtinsanpham } = useSelector((state) => state.sanpham);
    const thongtinsanpham = JSON.parse(localStorage.getItem("SANPHAM"));

    const [sp, setThongtin] = useState([]);
    const [chitiet, setChiTiet] = useState({});
    const [splienquan, setSanPhamLienQuan] = useState([]);

    let obj = {
        id: thongtinsanpham.id,
    };
    let objloai = {
        Maloai: thongtinsanpham.Maloai,
    };

    const getChiTiet = async (obj) => {
        const data = await sanPhamAPI.getSanPhamChiTiet(obj);
        setChiTiet(data.data);
    };
    const getSanPhamLienQuan = async (obj) => {
        const data = await sanPhamAPI.getSanPhamLienQuan(obj);
        setSanPhamLienQuan(data.data);
    };

    useEffect(() => {
        getChiTiet(obj);
        getSanPhamLienQuan(objloai);
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        setThongtin(thongtinsanpham);
    }, [thongtinsanpham]);

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

                <p className="text-left m-3 fw-bold fs-3">
                    <FcFlashOn /> SẢN PHẨM LIÊN QUAN <FcFlashOn />
                </p>
                <div
                    className="d-flex flex-wrap justify-content-center p-3"
                    style={{ backgroundColor: "#E5EEFF", borderRadius: "20px" }}
                >
                    {splienquan.map((values) => {
                        return <CardProduct moi={values} key={values.id} />;
                    })}
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}

export default DetailProduct;
