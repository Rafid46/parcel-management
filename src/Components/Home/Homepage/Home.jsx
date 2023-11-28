import Banner from "./Banner";
import Feature from "./Feature";
import NumberCard from "./NumberCard";

const Home = () => {
  return (
    <div>
      <div className="mt-44">
        <Banner></Banner>
      </div>
      <div className="mt-40 mb-60">
        <Feature></Feature>
      </div>
      <section className="max-w-screen-xl mx-auto">
        <NumberCard></NumberCard>
      </section>
    </div>
  );
};

export default Home;
