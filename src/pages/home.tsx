import About from "../components/Home/About";
import CeoMessage from "../components/Home/CeoMessage";
import Hero from "../components/Home/Hero";
import Navbar from "../components/NavBar/navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/hero-image.jpg')] bg-no-repeat min-h-[800px] w-full bg-cover bg-black">
        <Navbar />
        <Hero />
      </div>
      <CeoMessage />
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
