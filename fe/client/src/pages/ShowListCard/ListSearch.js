import CardProduct from "../../components/Card/CardProduct/CartProduct";
import sanPhamAPI from "../../services/sanPhamAPI";
import "../../components/Card/CardProduct/style.scss";
import loaiSanPhamAPI from "../../services/loaisanphamAPI";
import { GiMedicines } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import { FcLike, FcFlashOn } from "react-icons/fc";
import { Image } from "react-bootstrap";
import "./ListCard.scss";

function ListSearch() {

  const keysearch = JSON.parse(localStorage.getItem("KEYSEARCH"));


  const [spsearch, setSPSearch] = useState([]);
  console.log(spsearch);
  const getSPSearch = async (a) => {
    const data = await sanPhamAPI.getByName(a);
    setSPSearch(data.data);
  };

  useEffect(() => {
    getSPSearch(keysearch);
}, [keysearch]);
  return (
    <>
      {/* <h2 className="m-3">SẢN PHẨM LOẠI</h2>
      <div className="d-flex flex-wrap justify-content-center ">
        <CardProduct moi={produce} />
      </div> */}

      <div className="section_1 d-flex justify-content-center">
        <div>
          <Section>
            <p
              className="text-center"
              style={{ fontSize: "25px", color: "#fff" }}
            >
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
