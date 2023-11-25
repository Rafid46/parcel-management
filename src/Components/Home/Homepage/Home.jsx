import Banner from "./Banner";
import Feature from "./Feature";

const Home = () => {
  return (
    <div>
      <div className="mt-44">
        <Banner></Banner>
      </div>
      <div className="mt-40 mb-60">
        <Feature></Feature>
      </div>
    </div>
  );
};

export default Home;
