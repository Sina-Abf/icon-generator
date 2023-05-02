import { DATA } from "@/public/data";
import { FastIcon, SettingsIcon, UserIcon } from "../utils/icons";
import CtaCard from "./cta-card";

export interface Card {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Cta = () => {
  return (
    <section>
      <div className="md:text-center mb-12">
        <strong className="text-4xl">چرا آیکی دانلود؟</strong>
        <p className="mt-4">
          شما به کمک آیکی دانلود میتوانید در زمان خیلی کم متن خود را وارد و طرح
          و شکل مورد نظر را انتخاب کنید و به همین راحتی آیکون خود را تحویل
          بگیرید
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-10">
        {DATA.map((card) => {
          return (
            <CtaCard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Cta;
