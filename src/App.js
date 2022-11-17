import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { data } from "./data";
import Card from "./components/Card";

const App = () => {
  const dataItems = data.map(item =>{
    return <Card
    key={item.id}
    item={item}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero/>
      <section className="cards-list">
      {dataItems}
      </section>
    </div>
  );
};

export default App;
