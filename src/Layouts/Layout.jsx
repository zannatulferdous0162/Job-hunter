import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import LightDark from "../LightDark/LightDark";


const Layout = () => {
    const hookProps = LightDark();
    return (
        <div data-theme={`${hookProps.templete ? 'dark' : 'light'}`}>
            <NavBar {...hookProps}></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Layout;