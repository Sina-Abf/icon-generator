import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputsType } from "./form";
import { NumericInput } from "./inputs";

const CountForm = ({
  register,
  errors,
}: {
  register: UseFormRegister<InputsType>;
  errors: FieldErrors<InputsType>;
}) => {
  return (
    <div>
      <NumericInput
        register={register}
        label="4. تعداد آیکون رو وارد کن"
        name="count"
        placeholder="مثلا 2"
        type="number"
        errors={errors}
      />
    </div>
  );
};
export default CountForm;
