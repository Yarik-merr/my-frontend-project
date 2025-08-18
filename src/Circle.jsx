import "./index.css";
export const Circle = ({ className }) => {
  return (
    <div
      className={`${className} rounded-full w-circle-size h-circle-size bg-[linear-gradient(141.33deg,var(--color-dark-grey)50.14%,var(--color-dark-medium-grey)108.81%)] absolute`}
    ></div>
  );
};
