import { ReactSVG } from "react-svg";

export const IconComponent = ({
  iconName,
  size,
  className,
  onClick,
  // todo Проверить, точно ли нужен пропс. или можно смотреть просто передан ли className.
}) => {
  return (
    <div onClick={onClick}>
      <ReactSVG
        className={className}
        src={`public/icons/${iconName}.svg`}
        style={{
          width: size,
          height: size,
        }}
        stroke="currentColor"
        fill="currentColor"
      />
    </div>
  );
};
