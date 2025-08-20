import { IconComponent } from './IconComponent';
import './index.css';

export const Card = ({ iconName, title, description, className }) => {
  return (
    <article className="font-['Gilroy'] h-card-height max-w-card-max-width z-[var(--z-content)] transform-3d hover:animate-fly-card">
      <div className="p-padding-card rounded-card flex flex-col gap-gap bg-medium-grey w-full h-full hover:animate-twist-card hover:shadow-card-hover">
        <div className="self-end">
          <IconComponent iconName={iconName} className="w-1/3" />
        </div>
        <div className="font-bold leading-7">
          <h3 className="text-white text-2xl mb-3">{title}</h3>
          <p className="text-light-grey text-lg">{description}</p>
        </div>
      </div>
    </article>
  );
};
