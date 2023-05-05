import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputsType } from "./form";
import { RadioWithImage } from "./inputs";
import clayBird from "@/public/images/shapes/clay-bird-icon.webp";
import pixelatedBird from "@/public/images/shapes/pixelated-bird-icon.webp";
import gradientBird from "@/public/images/shapes/gradient-bird.webp";
import handdrawnBird from "@/public/images/shapes/handdrawn-bird.webp";
import illustratedBird from "@/public/images/shapes/illustrated-bird.webp";
import metallicBird from "@/public/images/shapes/metallic-bird.webp";
import flatBird from "@/public/images/shapes/flat-bird.webp";
import maximalisticBird from "@/public/images/shapes/maximalistic-bird.webp";
import neonBird from "@/public/images/shapes/neon-bird.webp";
import polygonBird from "@/public/images/shapes/polygon-bird.webp";

const StylesForm = ({
  register,
}: {
  register: UseFormRegister<InputsType>;
}) => {
  const STYLES = [
    {
      value: "pixelated",
      labelName: "پیکسلی",
      id: 1,
      image: pixelatedBird,
    },
    {
      value: "clay",
      labelName: "خاکی",
      id: 2,
      image: clayBird,
    },
    {
      value: "gradient",
      labelName: "گرادینت",
      id: 3,
      image: gradientBird,
    },
    {
      value: "illustratored",
      labelName: "مصور",
      id: 4,
      image: illustratedBird,
    },
    {
      value: "handdrawn",
      labelName: "نقاشی",
      id: 5,
      image: handdrawnBird,
    },
    {
      value: "metallic",
      labelName: "متالیک",
      id: 6,
      image: metallicBird,
    },
    {
      value: "flat",
      labelName: "صاف",
      id: 7,
      image: flatBird,
    },
    {
      value: "maximallistic",
      labelName: "شلوغ",
      id: 8,
      image: maximalisticBird,
    },
    {
      value: "neon",
      labelName: "نئون",
      id: 9,
      image: neonBird,
    },
    {
      value: "polygon",
      labelName: "هندسی",
      id: 10,
      image: polygonBird,
    },
  ];

  return (
    <div>
      <label className="font-semibold block text-2xl">
        3. استایل آیکون رو انتخاب کن
      </label>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 mt-8">
        {STYLES.map((style) => (
          <RadioWithImage
            key={style.id}
            register={register}
            labelName={style.labelName}
            value={style.value}
            name="style"
            image={style.image}
          />
        ))}
      </ul>
    </div>
  );
};
export default StylesForm;
