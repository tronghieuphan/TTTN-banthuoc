import { Routes, Route } from "react-router-dom";
import PageWeb from "./routes";
import HomePageLayout from "./layouts/HomePageLayout/index";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout/index";
import DetailUser from "./pages/Profile/DetailUser";
function App() {
    return (
        <>
            {/* <DetailUser /> */}
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
            {/* <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/shopping" element={<CartShopping />}/>
                <Route path="/detail" element={<DetailProduct />}/>
            </Routes> */}
            {/* <LoginPage />
            <RegisterPage />
            <DetailProduct />
            <DetailUser />
            <ListCard />
            <CartShopping /> */}
        </>
    );
}

export default App;
