
import InfoUser from "./InfoUser";

function DetailUser() {
    return (
        <>
            <div className="container-fluid w-100">
                <div className="row mx-5">
                    <div className="col-md-4 ml-5">
                        <div className=" mt-5 ">
                            {/* <SliderDetail /> */}
                            <div className="row w-100">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 ml-5">
                        <div className=" mt-5 ">
                            <InfoUser />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailUser;
