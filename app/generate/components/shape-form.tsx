import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputsType } from "./form";
import { RadioWithImage } from "./inputs";
import circularShape from "@/public/images/shapes/circular-shape.webp";
import squareShape from "@/public/images/shapes/square-shape.webp";

const ShapesForm = ({
  register,
}: {
  register: UseFormRegister<InputsType>;
}) => {
  const SHAPES = [
    {
      value: "circular",
      labelName: "دایره",
      id: 1,
      image: circularShape,
    },
    {
      value: "square",
      labelName: "مربع",
      id: 2,
      image: squareShape,
    },
  ];
  return (
    <div>
      <label className="font-semibold block text-2xl">
        4. شکل آیکون رو انتخاب کن
      </label>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 mt-8">
        {SHAPES.map((shape) => (
          <RadioWithImage
            key={shape.id}
            register={register}
            labelName={shape.labelName}
            value={shape.value}
            name="shape"
            image={shape.image}
          />
        ))}
      </ul>
    </div>
  );
};
export default ShapesForm;
