import EducationNew from "@/components/Education-new";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import MainTheme from "@/components/MainTheme";
import NavBar from "@/components/NavBar";

function Home() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <MainTheme></MainTheme>
      <Expertise></Expertise>
      <EducationNew></EducationNew>
      <Footer></Footer>
    </div>
  );
}

export default Home;
