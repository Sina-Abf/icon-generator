"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import DescriptionForm from "./description-form";
import ColorsForm from "./colors-form";
import StylesForm from "./style-form";
import ShapesForm from "./shape-form";
import CountForm from "./count-form";
import Button from "@/app/components/ui/button";

export type InputsType = {
  description: string;
  color: string;
  shape: string;
  style: string;
  count: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-12" onSubmit={handleSubmit(onSubmit)}>
      <DescriptionForm register={register} errors={errors} />
      <ColorsForm register={register} errors={errors} />
      <StylesForm register={register} />
      <ShapesForm register={register} />
      <CountForm register={register} errors={errors} />
      <Button
        disabled={!!Object.keys(errors).length}
        className="bg-primary max-w-[10rem] mb-14 disabled:bg-hover"
      >
        ایجاد کن!
      </Button>
    </form>
  );
};
export default Form;
