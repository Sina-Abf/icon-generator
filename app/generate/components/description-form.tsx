import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputsType } from "./form";
import { Input } from "./inputs";

const DescriptionForm = ({
  register,
  errors,
}: {
  register: UseFormRegister<InputsType>;
  errors: FieldErrors<InputsType>;
}) => {
  return (
    <div>
      <Input
        register={register}
        label="1. آیکونی که میخوای رو توصیف کن"
        name="description"
        placeholder="انگلیسی وارد کن (فارسی دقیق در نمیاد)"
        type="text"
        errors={errors}
      />
    </div>
  );
};
export default DescriptionForm;
