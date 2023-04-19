import { useState } from "react";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

function SearchInput() {
    const navigate = useNavigate();
    const changeSanPham = (e) => {
        setTenSP(e.target.value);
    };
    const [tensanpham, setTenSP] = useState("");
    const getByName = async () => {
        localStorage.setItem("KEYSEARCH", JSON.stringify(tensanpham));
        navigate("/list-search");
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="col-9 text-left ">
                    <div className="input-group">
                        <input
                            type="text"
                            name="keyword"
                            className="form-control"
                            id="search-box"
                            value={tensanpham}
                            placeholder="Tìm kiếm sản phẩm..."
                            onChange={changeSanPham}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text bg-primary">
                                <button
                                    className="btn p-0 border-0 text-white"
                                    onClick={() => getByName()}
                                >
                                    TÌM
                                </button>
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default SearchInput;
