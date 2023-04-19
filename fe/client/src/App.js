import { Routes, Route } from "react-router-dom";
import PageWeb from "./routes";
import HomePageLayout from "./layouts/HomePageLayout/index";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <>
            <Routes>
                {PageWeb.map((route, index) => {
                    const Page = route.page;
                    let Layout = LoginRegisterLayout;
                    if (route.isHomePageLayout) {
                        Layout = HomePageLayout;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </>
    );
}

export default App;
