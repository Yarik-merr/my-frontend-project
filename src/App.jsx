import './App.css';
import data from './assets/data/card.json';
import { Card } from './Card';
import './index.css';
import { Circle } from './Circle';

function App() {
  return (
    <main className="container-2xl mx-auto">
      <section className="z-[var(--z-base)] py-[80px] px-[30px] bg-dark-grey w-screen h-fit grid grid-cols-[repeat(auto-fit,minmax(300px,var(--spacing-card-max-width)))] justify-center items-center gap-mini-gap rounded-section lg:self-center relative overflow-hidden">
        <Circle
          className={
            "z-[var(--z-circle-1)] left-5 -top-28  md:top-14 md:right-24 xl:bottom-[234px] xl:left-[632px]"
          }
        />
        <Circle
          className={
            "z-[var(--z-circle-3)] top-2 left-20md:bottom-5 md:right-3.5 xl:bottom-[181px] xl:right-[404px]"
          }
        />
        <Circle
          className={
            "z-[var(--z-circle-2)]  -top-24 left-24  md:bottom-20 md:right-50 xl:top-[217px] xl:left-[746px]"
          }
        />
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
