import MainTheme from "@/components/MainTheme";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import NavBar from "@/components/NavBar";
import EducationNew from "@/components/Education-new";

function Home(){
    return (
        <>
            <NavBar></NavBar>
            <MainTheme></MainTheme>
            <Expertise></Expertise>
            <EducationNew></EducationNew>
            <Footer></Footer>
        </>
    )
}

export default Home;
