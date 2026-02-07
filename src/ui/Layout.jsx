import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
    return(
        <> 

            <Header isAuth={true} userAvatar={'https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/product/7367923/68926136/1603125759601-282017912/5efca684a1ae24889b0ced81_1000_png'} nameUser={"Serhii"}/>
                <main>
                    <Outlet />
                </main>
            <Footer/>
        </>
    )
};