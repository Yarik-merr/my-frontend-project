import "./App.css";
import data from "./assets/data/card.json";
import { Card } from "./Card";
import "./index.css";
import { Circle } from "./Circle";

function App() {
  return (
    <main className="container-2xl mx-auto">
      <section className="z-[var(--z-base)] py-[80px] px-[30px] bg-dark-grey w-screen h-fit grid grid-cols-[repeat(auto-fit,minmax(300px,var(--spacing-card-max-width)))] justify-center items-center gap-mini-gap rounded-section lg:self-center">
        <Circle className={"top-[-5%] left-[40%] z-[var(--z-circle-1)]"} />
        <Circle className={"top-px-0 left-[45%] z-[var(--z-circle-2)]"} />
        <Circle className={"bottom-[-5%] left-[43%] z-[var(--z-circle-3)]"} />
        {data.map((item, index) => (
          <Card
            key={index}
            iconName={item.iconName}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
