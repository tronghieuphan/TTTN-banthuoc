import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

function CartShopping() {
    const productList = [
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
    ];

    const discountList = [
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
    ];

    return (
        <>
            <div className="container-fluid pt-5">
                <form action="" method="">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead
                                    className="text-white"
                                    style={{ backgroundColor: "#0F62F9" }}
                                >
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Đơn giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {productList.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ textAlign: "left" }}>
                                                    <div className="d-flex">
                                                        <img
                                                            src={product.url}
                                                            alt=""
                                                            style={{
                                                                width: "50px",
                                                                marginRight: "15px",
                                                            }}
                                                        />
                                                        <p>{product.product_name}</p>
                                                    </div>
                                                </td>
                                                <td className="align-middle">123</td>
                                                <td className="align-middle">
                                                    <div
                                                        className="input-group quantity mx-auto"
                                                        style={{ width: "100px" }}
                                                    >
                                                        <div className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-primary btn-minus"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faMinus}
                                                                    className="text-white"
                                                                />
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            className="form-control form-control-sm bg-white border-0 text-center"
                                                            name="txt-quantity"
                                                            value={product.quantity}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-primary btn-plus"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faPlus}
                                                                    className="text-white"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">123</td>
                                                <td className="align-middle">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary btn-delete"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTimes}
                                                            className="text-white"
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5">
                                <div className="card-header text-white border-0" style={{ backgroundColor: "#0F62F9" }}>
                                    <h5 className="font-weight-semi-bold m-0">Mã Khuyến Mãi</h5>
                                </div>
                                <div className="card-body">
                                    {discountList.map((discount, index) => {
                                        return (
                                            <div
                                                className="form-check mb-3"
                                                key={discount.discount_id}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value="111"
                                                    id="123"
                                                    name="rdo-discount"
                                                />
                                                <label className="form-check-label" htmlFor="hhh">
                                                    {discount.title}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="card border-secondary mb-5 mt-5">
                                <div
                                    className="card-header text-white border-0"
                                    style={{ backgroundColor: "#0644b5" }}
                                >
                                    <h5 className="font-weight-semi-bold m-0">
                                        Thông Tin Giỏ Hàng
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3 pt-1">
                                        <h6 className="font-weight-medium">Thành tiền sản phẩm</h6>
                                        <h6 className="font-weight-medium">123123</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Chiết khấu</h6>
                                        <h6 className="font-weight-medium">123123</h6>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5 className="font-weight-bold">TỔNG TIỀN</h5>
                                        <h5 className="font-weight-bold text-danger">1231121</h5>
                                    </div>
                                    <button
                                        type="submit"
                                        name="btn-next-to-checkout"
                                        className="btn btn-block btn-primary my-3 py-3 text-white font-weight-bold"
                                    >
                                        TIẾP TỤC
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
         
        </>
    );
}

export default CartShopping;
