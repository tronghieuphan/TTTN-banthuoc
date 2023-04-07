import "./HomePage.scss"
import Animation from "./Animation";
function Content() {
    return (
        <>
             <div className="m-4 ">
                <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                    <p className="fs-3">CHỦ ĐỀ : XÂY DỰNG WEBSITE BÁN DƯỢC PHẨM</p>
                    <p className="fs-4">Môn học: Thực tập tốt nghiệp</p>
                    <p className="fs-4">Giảng viên hướng dẫn: Th.S Trần Thị Như Ý</p>
                    <p className="fs-5">Nhóm 1:</p>
                    <p className="fs-5">Phan Trọng Hiếu - DH51903591</p>
                    <p className="fs-5">Nguyễn Thành Long - DH5190</p>
                    <p className="fs-5">Lưu Đình Vọng - DH5190</p>
                    <p className="fs-5">Lưu Trung Lâm - DH5190</p>
                    <p className="fs-5">Nguyễn Cao Hùng - DH5190</p>
                </div>
                <div class="position-absolute bottom-0 end-0 m-5">
                    <Animation />
                </div>
            </div>
        </>
    );
}

export default Content;
