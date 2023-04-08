import "./styles/style.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import PageWeb from "./routes/index";
import LayoutPageLogin from "./layouts/LayoutPageLogin";
import LayoutPageMain from "./layouts/LayoutPageMain";
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    {PageWeb.map((route, index) => {
                        const Page = route.page;
                        let Layout = LayoutPageLogin;
                        if (route.isMainLayout) {
                            Layout = LayoutPageMain;
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
            </AnimatePresence>
            <ToastContainer
                position="top-right"
                autoClose={5000}
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
