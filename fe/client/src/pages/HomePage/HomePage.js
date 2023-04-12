import Slider from "../../components/Slider/Slider";
import { Image } from "react-bootstrap";
import "./HomePage.scss";
import Section from "../../components/Section/Section";
import { FcLike, FcFlashOn } from "react-icons/fc";
import Cardcate from "../../components/Card/CardCate/CardCate";
import CardProduce from "../../components/Card/CardProduct/CartProduct";
import { GiMedicines } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import CardProduceDiscount from "../../components/Card/CardProduct/CardProductDiscount";

function HomePage() {
    const info = [
        {
            picture: "https://i.imgur.com/ZMBeY33.png",
            title: "CHỤP TOA THUỐC",
            des: "đơn giản, nhanh chóng",
        },
        {
            picture: "https://i.imgur.com/uGfJwuB.png",
            title: "NHẬP THÔNG TIN LIÊN LẠC",
            des: "để được tư vấn đặt hàng",
        },
        {
            picture: "https://i.imgur.com/jogLdHG.png",
            title: "NHẬN BÁO GIÁ TỪ BÁC SĨ",
            des: "kèm theo tư vấn miễn phí",
        },
    ];

    const cartcategory = [
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
        },
    ];

    const produce = [
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            name: "Mỹ phẩm ",
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
        },
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            name: "Mỹ phẩm ",
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
        },
    ];

    const brand = [
        {
            img: "https://i.imgur.com/JyMRaFj.png",
        },
        {
            img: "https://i.imgur.com/JyMRaFj.png",
        },
        {
            img: "https://i.imgur.com/JyMRaFj.png",
        },
        {
            img: "https://i.imgur.com/JyMRaFj.png",
        },
        {
            img: "https://i.imgur.com/JyMRaFj.png",
        },
    ];

    return (
        <>
            <div className="row w-100 h-50 my-3">
                <div className="col-md-8">
                    <Slider />
                </div>
                
                <div className="col-md-4 mt-4">
                    <Image
                        className="d-block customers-carousel-img w-100 mb-3 height-slide rounded-5"
                        src="https://i.imgur.com/haGvDwU.png"
                        alt=""
                    />
                    <Image
                        className="d-block customers-carousel-img w-100 height-slide rounded-5"
                        src="https://i.imgur.com/925KFMA.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container-fluil">
                <div className="bg">
                    <p className="fw-bold text-center fs-3 p-4">MUA THUỐC TẠI CỬA HÀNG</p>
                    <div className="row justify-content-center w-100 pb-5">
                        {info.map((infor, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="text-center">
                                    <div className="w-25 d-block m-auto">
                                        <img src={infor.picture} alt="" className="w-100" />
                                    </div>
                                    <div>
                                        <h4 className="pt-4">{infor.title}</h4>
                                        <h6 className="text-muted">{infor.des}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center pb-4 fst-italic fs-6">
                        Hoặc mua qua hotline{" "}
                        <span className="fw-bold text-primary text-decoration-underline">
                            09082546333
                        </span>
                    </p>
                </div>
            </div>
            <Section>
                <p>
                    <FcLike /> LOẠI SẢN PHẨM NỔI BẬT <FcLike />
                </p>
                <div className="d-flex flex-wrap justify-content-center">
                    {cartcategory.map((cartcategory) => (
                        <Cardcate cartcategory={cartcategory} />
                    ))}
                </div>
            </Section>
            <div className="section_1">
                <Section>
                    <p className="text-center">
                        <FcFlashOn /> SẢN PHẨM NỔI BẬT <FcFlashOn />
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                        {produce.map((produce) => (
                            <CardProduce produce={produce} />
                        ))}
                    </div>
                </Section>
            </div>
            <div className="section_5">
                <Section>
                    <p>
                        <FcLike />
                        SẢN PHẨM KHUYẾN MÃI <FcLike />
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                    {produce.map((produce) => (
                            <CardProduceDiscount produce={produce} />
                        ))}
                    </div>
                </Section>
            </div>
            <div className="section_2">
                <Section>
                    <p className="text-center">
                        <FcFlashOn /> SẢN PHẨM MỚI <FcFlashOn />
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                        {produce.map((produce) => (
                            <CardProduce produce={produce} />
                        ))}
                    </div>
                </Section>
            </div>
            <div className="section_3">
                <Section>
                    <p>
                        <FcLike />
                        THƯƠNG HIỆU NỔI TIẾNG <FcLike />
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                        {brand.map((brand) => (
                            <Image width={200} src={brand.img} className="m-3" />
                        ))}
                    </div>
                </Section>
            </div>
            <div className="row w-100 justify-content-center section_4">
                <div className="col-3">
                    <div className="d-flex">
                        <div className="col-4">
                            <div className="text-center">
                                <GiMedicines className="w-50 h-50 pt-2" />
                            </div>
                        </div>
                        <div className="col-9 pt-3">
                            <h4>THUỐC CHÍNH HÃNG</h4>
                            <h6>đa dạng và chuyên sâu</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="d-flex">
                        <div className="col-4">
                            <div className="text-center">
                                <MdSecurity className="w-50 h-50 pt-2" />
                            </div>
                        </div>
                        <div className="col-8 pt-3">
                            <h4>CAM KẾT 100%</h4>
                            <h6>chất lượng sản phẩm</h6>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="d-flex">
                        <div className="col-4">
                            <div className="text-center">
                                <FaShippingFast className="w-50 h-50 pt-2" />
                            </div>
                        </div>
                        <div className="col-9 pt-3">
                            <h4>MIỄN PHÍ VẬN CHUYỂN</h4>
                            <h6>theo chính sách giao hàng</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;
