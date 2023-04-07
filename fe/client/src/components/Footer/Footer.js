import logo from "../../assets/image/logo.png";

function Footer() {
    return (
        <>
            <div style={{ background: "#D4F2FF" }} className="container-fluid text-dark pt-3">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-12 col-md-12 mb-5 pr-3 pr-xl-5 text-center">
                        <img src={logo} alt="" className="rounded mx-auto d-block" style={{ width: "300px", height: "100px" }} />
                        <p>-----</p>
                        <div style={{ fontWeight: "600" }}>
                            <p className="mb-2 font-weight-bold">Giảng viên hướng dẫn</p>
                            <p className="mb-4">ThS. Trần Thị Như Ý</p>
                            <p className="mb-2 font-weight-bold">Nhóm sinh viên thực hiện</p>
                            <p className="mb-2">Phan Trọng Hiếu - DH51903543</p>
                            <p className="mb-2">Nguyễn Thành Long - DH51903591</p>
                            <p className="mb-2">Lưu Đình Vọng - DH51903919</p>
                            <p className="mb-2">Lưu Trung Lâm - DH51903286</p>
                            <p className="mb-2">Nguyễn Cao Hùng - DH51904922</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ background: "#005CB2",fontWeight:"600" }} className=" text-white p-3 text-center ">
                    <div>©2023 Nhóm 1 - Tên sản phẩm : WEBSITE NHÀ THUỐC - Môn học: THỰC TẬP TỐT NGHIỆP <br/>
                    Trường Đại Học Công Nghệ Sài Gòn - Số điện thoại: 0123456789 - Email: hlvlh@gmail.com
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;
