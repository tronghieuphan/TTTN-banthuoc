import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import sanPhamAPI from "../../services/sanPhamAPI";
import "./Search.css";
import { Link } from "react-router-dom";
import { setDataSP } from "../../slices/sanphamSlice";

function SearchInput({ placeholder, data, props }) {
  const [filteredData, setFilteredData] = useState([]);
  const HandleChangeFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.Tensp.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord == "") {
        setFilteredData([])
    } else {
        setFilteredData(newFilter);
    }

    
  };

    //test thử kiểu này ko đc
    // let moi = props.moi;
    // const dispatch = useDispatch();

    // const HandleAddStore = (obj) => {
    //     dispatch(setDataSP(obj));
    //     localStorage.setItem("SANPHAM", JSON.stringify(obj));
    // };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-9 text-left ">
        <div className="input-group">
          <input
            type="text"
            name="keyword"
            className="form-control"
            id="search-box"
            placeholder={placeholder}
            onChange={HandleChangeFilter}
          />
          <div className="input-group-append">
            <span className="input-group-text bg-primary">
              <button type="submit" className="btn p-0 border-0 text-white">
                TÌM
              </button>
            </span>
          </div>
        </div>
        {filteredData.length != 0 && (
          <Link to="/product-details">
          <div className="dataResult">
            {filteredData.slice(0, 30).map((value, key) => {
              return (
                //bỏ vào tag <a>? onClick={() => HandleAddStore(moi)}
                <a className="dataItem" href="#" target="#" >
                  <p>{value.Tensp} </p>
                </a>
              );
            })}
          </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
