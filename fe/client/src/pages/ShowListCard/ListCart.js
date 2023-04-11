import CardProduce from "../../components/Card/CardProduct/CartProduct";


function ListCard() {
    const produce = [
        {
            img: "https://i.imgur.com/6WXGjlq.png",
            name: "Mỹ phẩm ",
        },
    ];
    return (
        <>
           
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

        </>
    );
}

export default ListCard;
