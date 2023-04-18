import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { setDataSP } from "../../../slices/sanphamSlice";
import "./style.scss";
import { useEffect } from "react";

function CardProduct(props) {
    let moi = props.moi;

    const text = <span>{moi.Tensp}</span>;
    const dispatch = useDispatch();
    const handleAddStore = (obj) => {
        localStorage.setItem("SANPHAM", JSON.stringify(obj));
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <Link
            to="/product-details"
            style={{ textDecoration: "none", color: "#050E29" }}
            onClick={() => handleAddStore(moi)}
        >
            <div style={{ width: "12rem" }} className="m-3 bordercard">
                <div style={{ width: "100%", height: "200px" }}>
                    <img
                        variant="top"
                        className="w-100"
                        style={{ height: "inherit" }}
                        src={moi?.hinhAnhs[0]?.Url}
                        alt={moi?.hinhAnhs[0]?.Url}
                    />
                </div>
                <div>
                    <Tooltip placement="top" title={text}>
                        <div className="title">{moi.Tensp}</div>
                    </Tooltip>
                </div>
                <div className="price">
                    Giá:
                    <br />
                    <span>
                        {moi.Dongia.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </span>
                </div>
                <div className="quycach">{moi.Quycach}</div>
            </div>
        </Link>
    );
}

export default CardProduct;
