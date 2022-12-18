import About from "../comp-home/about";
import Footer from "../comp-home/footer";
import Hero from "../comp-home/hero";
import HeroClock from "../comp-home/hero-clock";
import VerticalNav from "../components/vertical-nav";

const Home = () => {
    return (
        <div className="bg-[var(--color-bg)]">
            <HeroClock />
            <Hero />
            <About />
            <Footer />
            {/* <VerticalNav /> */}
        </div>
    );
};

export default Home;
