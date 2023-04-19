import { Button } from "antd";
function ButtonBuy(props) {
    const id=props.sp;
    console.log('id: ', id);

    return (
        <>
            <Button type="primary">Mua hàng</Button>
        </>
    );
}

export default ButtonBuy;
