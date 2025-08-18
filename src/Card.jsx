import { IconComponent } from './IconComponent';
import './index.css';

export const Card = ({ iconName, title, description, className }) => {
  return (
    <article className="font-['Gilroy'] h-card-height max-w-card-max-width bg-medium-grey p-padding-card rounded-card flex flex-col gap-gap z-[var(--z-content)]">
      <div className="self-end">
        <IconComponent iconName={iconName} className="w-1/3" />
      </div>
      <div className="font-bold leading-7">
        <h3 className="text-white text-2xl mb-3">{title}</h3>
        <p className="text-light-grey text-lg">{description}</p>
      </div>
    </article>
  );
};
