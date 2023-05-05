import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputsType } from "./form";
import { Radio } from "./inputs";

const ColorsForm = ({
  register,
  errors,
}: {
  register: UseFormRegister<InputsType>;
  errors: FieldErrors<InputsType>;
}) => {
  const COLORS = [
    {
      value: "#fff",
      id: 1,
    },
    {
      value: "#f2a",
      id: 2,
    },
    {
      value: "#12ff",
      id: 3,
    },
    {
      value: "#52ff",
      id: 4,
    },
    {
      value: "#62aa",
      id: 5,
    },
    {
      value: "#62aa",
      id: 6,
    },
    {
      value: "#aa2222aa",
      id: 7,
    },
    {
      value: "#a384c3aa",
      id: 8,
    },
    {
      value: "#688cb8aa",
      id: 9,
    },
    {
      value: "#22aa71aa",
      id: 10,
    },
  ];
  return (
    <div>
      <label className="font-semibold block text-2xl">
        2. رنگ آیکون رو انتخاب کن
      </label>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 my-8">
        {COLORS.map((color) => (
          <Radio
            key={color.id}
            register={register}
            value={color.value}
            name="color"
            errors={errors}
          />
        ))}
      </ul>
    </div>
  );
};
export default ColorsForm;
