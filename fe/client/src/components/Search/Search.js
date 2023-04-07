import { useState } from "react";

function SearchInput() {
    const [value, setValue] = useState("");
    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="col-9 text-left ">
                <div className="input-group">
                    <input type="text" name="keyword" className="form-control" id="search-box" placeholder="Tìm kiếm..." value={value} onChange={handleChangeValue} />
                    <div className="input-group-append">
                        <span className="input-group-text bg-primary">
                            <button type="submit" className="btn p-0 border-0 text-white">
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
