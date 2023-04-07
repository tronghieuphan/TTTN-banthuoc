import CardProduce from "../../components/Card/CardProduct/CartProduct";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavbarMenu from "../../components/Navbar/NavbarMenu";

function ListCard() {
    const produce = [
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            name: "Mỹ phẩm ",
        },
    ];
    return (
        <>
            <Header />
            <NavbarMenu />
            <h2 className="m-3">SẢN PHẨM LOẠI</h2>
            <div className="d-flex flex-wrap justify-content-center ">
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
                <CardProduce produce={produce} />
            </div>

            <Footer />
        </>
    );
}

export default ListCard;
