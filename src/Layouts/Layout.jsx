import Footer from "../components/Footer";
import Header from "../components/Header";


export default function LayoutWrapper({children}){

    return <>
    <Header/>
    {children}
    <Footer/>
    </>
}