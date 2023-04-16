import "./CardCate.scss";
import { Link } from "react-router-dom";
function CardCate(props) {
  
    const mang = props.cartcategory;
    return (
        <div style={{ textDecoration: "none", color: "black" }} onClick={()=>console.log(mang.id)}>
            <div style={{ width: "14rem" }} className="m-3 bordercate">
                <img variant="top" className="m-3" width={40} height={40} src={mang.Hinhanh} />
                <div style={{paddingBottom:"10px"}}>
                    <div className="text-center">{mang.Tenloai}</div>
                    <div className="text-center" style={{ color: "#67768D", fontSize:"13px" }}>
                        {mang.sanPhams.length} sản phẩm
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCate;
