import { Helmet } from "react-helmet-async";
import AllProduct from "../../components/AllProduct/AllProduct";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
            <Banner/>
            <div className="lg:my-20 max-w-7xl mx-auto">
            <AllProduct/>
            </div>
        </div>
    );
};

export default Home;