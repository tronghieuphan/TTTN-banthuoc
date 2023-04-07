import { Input } from "antd";

function Search() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <form action="" method="get" >
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
                className="fs-4"
            />
        </form>
    );
}

export default Search;
