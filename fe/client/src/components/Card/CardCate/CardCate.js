import "./CardCate.scss";
import { useNavigate } from "react-router-dom";
function CardCate(props) {
    const mang = props.cartcategory;
    const navigate = useNavigate();
    const getKey = (key) => {
        localStorage.setItem("MALOAI", JSON.stringify(key));
        navigate("/list-card")
    }

    return (
        <div style={{ textDecoration: "none", color: "black", cursor:"pointer" }} onClick={() => getKey(mang.id)}>
            <div style={{ width: "14rem" }} className="m-3 bordercate">
                <img variant="top" className="m-3" width={40} height={40} src={mang.Hinhanh} alt="" />
                <div style={{ paddingBottom: "10px" }}>
                    <div className="text-center">{mang.Tenloai}</div>
                    <div className="text-center" style={{ color: "#67768D", fontSize: "13px" }}>
                        {mang.sanPhams.length} sản phẩm
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCate;
