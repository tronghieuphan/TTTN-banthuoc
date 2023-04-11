import { Routes, Route } from "react-router-dom";
import PageWeb from "./routes";
import HomePageLayout from "./layouts/HomePageLayout/index";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout/index";

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
           
        </>
    );
}

export default App;
