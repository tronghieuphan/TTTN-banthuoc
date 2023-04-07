import CardProduce from "../../components/Card/CardProduct/CartProduct";
import InfoProduct from "./InfoProduct";
import SliderDetail from "./SliderDetail";
import { FcFlashOn } from "react-icons/fc";

function DetailProduct() {
    const produce = [
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            title: "Mỹ phẩm ",
        },
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            title: "Thiết bị ",
        },
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            title: "Phụ nữ ",
        },
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            title: "Trẻ em  ",
        },
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            title: "Sắc tố  ",
        },
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            title: "Da",
        }
    ];
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
                            <InfoProduct />
                        </div>
                    </div>
                </div>

                <p className="text-left m-3 fw-bold fs-3">
                    <FcFlashOn /> SẢN PHẨM LIÊN QUAN <FcFlashOn />
                </p>
                <div className="d-flex flex-wrap justify-content-center">
                    {produce.map((produce) => (
                        <CardProduce produce={produce} />
                    ))}
                </div>
            </div>
         
        </>
    );
}

export default DetailProduct;
