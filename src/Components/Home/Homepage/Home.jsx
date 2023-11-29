import Banner from "./Banner";
import DeliveryManSection from "./DeliveryManSection";
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
      <section className="max-w-screen-2xl mx-auto">
        <NumberCard></NumberCard>
      </section>
      <section className="max-w-screen-2xl mx-auto mt-10 mb-10">
        <DeliveryManSection></DeliveryManSection>
      </section>
    </div>
  );
};

export default Home;
