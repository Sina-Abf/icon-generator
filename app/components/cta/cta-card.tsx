import { Card } from "./cta";

const CtaCard = ({ icon, title, description }: Card) => {
  return (
    <li>
      <div className="flex items-center gap-x-4">
        <div className="bg-secondary rounded-xl p-2 w-fit h-fit">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mr-14 text-sm max-w-sm md:max-w-[15rem]">{description}</p>
    </li>
  );
};
export default CtaCard;
