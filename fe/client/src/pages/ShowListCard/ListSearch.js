import CardProduct from "../../components/Card/CardProduct/CartProduct";
import sanPhamAPI from "../../services/sanPhamAPI";
import "../../components/Card/CardProduct/style.scss";
import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import { useSelector } from "react-redux";
import { FcFlashOn } from "react-icons/fc";
import "./ListCard.scss";

function ListSearch() {
    const keysearch = JSON.parse(localStorage.getItem("KEYSEARCH"));
    const { searchvalue } = useSelector((state) => state.search);
    const [spsearch, setSPSearch] = useState([]);
    const [search, setKey] = useState("");
    const getSPSearch = async (a) => {
        const data = await sanPhamAPI.getByName(a);
        setSPSearch(data.data);
    };
    useEffect(() => {
        setKey(searchvalue);
    }, [searchvalue]);
    useEffect(() => {
        getSPSearch(keysearch);
    }, [keysearch]);
    return (
        <>
            <div className="section_1 d-flex justify-content-center">
                <div>
                    <Section>
                        <p className="text-center" style={{ fontSize: "25px", color: "#fff" }}>
                            <FcFlashOn /> KẾT QUẢ TÌM KIẾM VỚI TỪ KHÓA "{keysearch}" <FcFlashOn />
                        </p>
                        <div className="d-flex flex-wrap justify-content-center">
                            {spsearch.map((value) => (
                                <CardProduct moi={value} key={value.id} />
                            ))}
                        </div>
                    </Section>
                </div>
            </div>
        </>
    );
}

export default ListSearch;
