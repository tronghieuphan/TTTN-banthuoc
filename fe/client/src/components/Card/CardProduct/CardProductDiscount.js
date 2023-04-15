import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { setDataSP } from "../../../slices/sanphamSlice";
import ButtonBuy from "../../Button/Button"
function CardProduceDiscount(props) {
    let mang = props.khuyenmai;
    const text = <span>{mang.Tensp}</span>;
    const dispatch = useDispatch();
    const handleAddStore = (obj) => {
        dispatch(setDataSP(obj));
        localStorage.setItem("SANPHAM", JSON.stringify(obj));
    };
    return (
        <Link to="/product-details" style={{ textDecoration: "none",color:"#050E29" }} onClick={() => handleAddStore(mang)}>
            <div style={{ width: "13rem" }} className="m-3 bordercard">
                <div style={{ width: "100%", height: "200px", border: "1px solid black" }}>
                    <img variant="top" className="w-100 " />
                </div>

                <div>
                    <Tooltip placement="top" title={text}>
                        <div className="title">{mang.Tensp}</div>
                    </Tooltip>
                </div>

                <div className="price1">
                    <span>
                        {mang.Giakm.toLocaleString("it-IT", { style: "currency", currency: "VND" })}
                    </span>
                </div>
                <div className="quycach">{mang.Quycach}</div>
                <div className="discount">
                    {mang.Dongia.toLocaleString("it-IT", { style: "currency", currency: "VND" })}
                </div>
                <div className="text-center">
                   <ButtonBuy />
                </div>
            </div>
        </Link>
    );
}

export default CardProduceDiscount;
