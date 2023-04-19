import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import sanPhamAPI from "../../services/sanPhamAPI";
import "./Search.scss";
import { setDataSP } from "../../slices/sanphamSlice";
import { json, Link, useNavigate } from "react-router-dom";
import { message } from "antd";

function SearchInput({ placeholder, data, props }) {
  const [filteredData, setFilteredData] = useState([]);
  const HandleChangeFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.Tensp.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const navigate = useNavigate();

  // const changeSanPham = (e) => {
  //   setTenSP(e.target.value);
  // }
  const [keysearch, setValueSearch] = useState("");
  const [tensanpham, setTenSP] = useState([]);

  const getAllSp = async () => {
    try {
      const response = await sanPhamAPI.getAll();
      setTenSP(response.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const getByName = async () => {
    // const data = await sanPhamAPI.getByName(keysearch);
    // setTenSP(data.data);
    localStorage.setItem("KEYSEARCH", JSON.stringify(keysearch));
    navigate("/list-search");
  };

  const getIDSanPham = (a) => {
    localStorage.setItem("IDSANPHAM", JSON.stringify(a));
  }

  useEffect(() => {
    getAllSp();
  }, []);

  console.log(keysearch);

  const handleChange = (e) => {
    setValueSearch(e.target.value);
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.Tensp.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // lưu keysearch vào localstorage
  // const arraytensanpham = [];
  // tensanpham.map((value) =>
  //   arraytensanpham.push({ key: value.id, label: value.Tensp })
  // );
  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  //   localStorage.setItem("SANPHAM", JSON.stringify(key));
  //   console.log(key);
  //   navigate("/product-details");
  // };

  // const getSanPham = async () => {
  //   const data = await sanPhamAPI.getByName();
  //   setTenSP(data.data);
  // };

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
        <form action="" method="">
          <div className="input-group">
            <input
              type="text"
              name="keyword"
              className="form-control"
              id="search-box"
              value={keysearch}
              placeholder={placeholder}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <span className="input-group-text bg-primary">
                <button
                  className="btn p-0 border-0 text-white"
                  onClick={getByName}
                >
                  TÌM
                </button>
              </span>
            </div>
          </div>
        </form>
        {/* {filteredData.length != 0 && (
          // <Link to="/product-details">
          <div className="dataResult">
            {filteredData.slice(0, 30).map((value, key) => {
              return (
                <Link className="dataItem" onClick={() => getIDSanPham(value.id)} to="/product-details">
                  <p>{value.Tensp} </p>
                </Link>
              );
            })}
          </div>
          //</Link>
        )} */}
      </div>
    </div>
  );
}

export default SearchInput;
