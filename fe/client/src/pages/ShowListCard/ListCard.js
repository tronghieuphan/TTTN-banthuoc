import CardProduct from "../../components/Card/CardProduct/CartProduct";
import sanPhamAPI from "../../services/sanPhamAPI";
import "../../components/Card/CardProduct/style.scss";
import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import { FcFlashOn } from "react-icons/fc";
import "./ListCard.scss";
import { useSelector } from "react-redux";
function ListCard() {
    const maLoai = JSON.parse(localStorage.getItem("MALOAI"));
    const [ml, setMaloai] = useState([]);
    const [spcungloai, setSPCungLoai] = useState([]);
    const { thongtindanhmuc } = useSelector((state) => state.danhmuc);
    const getByMaLoai = async (a) => {
        const data = await sanPhamAPI.getByMaLoai(a);
        setSPCungLoai(data.data);
    };

    useEffect(() => {
        getByMaLoai(maLoai);
    }, [maLoai]);
    useEffect(() => {
        setMaloai(thongtindanhmuc);
    }, [thongtindanhmuc]);
    return (
        <>
            {/* <h2 className="m-3">SẢN PHẨM LOẠI</h2>
      <div className="d-flex flex-wrap justify-content-center ">
        <CardProduct moi={produce} />
      </div> */}

            <div className="section_1 d-flex justify-content-center">
                <div>
                    <Section>
                        <p className="text-center" style={{ fontSize: "25px", color: "#fff" }}>
                            <FcFlashOn /> SẢN PHẨM CÙNG LOẠI <FcFlashOn />
                        </p>
                        <div className="d-flex flex-wrap justify-content-center">
                            {spcungloai.map((value) => (
                                <CardProduct moi={value} key={value.id} />
                            ))}
                        </div>
                    </Section>
                </div>
            </div>
        </>
    );
}

export default ListCard;
