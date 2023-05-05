import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { InputsType } from "./form";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  classname?: string;
  type: string;
  errors: FieldErrors<InputsType>;
};

export function Input<T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  classname,
  type,
  errors,
}: InputProps<T>) {
  return (
    <div>
      <label className="font-semibold mb-4 block text-2xl" htmlFor={name}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={classNames(
          "py-3 px-4 rounded-lg mb-4 bg-background w-full max-w-sm md:max-w-md",
          {// prettier-ignore
          /* @ts-ignore */},
          errors[name] &&
            "border-red-500 placeholder:text-red-500 focus:border-red-500 focus:ring-0",
          classname
        )}
        type={type}
        id={name}
        {...register(name, { required: true })}
        name={name}
      />
      {/* @ts-ignore */}
      {errors[name] && (
        <span className="block text-red-500 font-light text-sm">
          این فیلد رو پر نکردی..
        </span>
      )}
    </div>
  );
}
export function NumericInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  classname,
  errors,
}: InputProps<T>) {
  return (
    <div>
      <label className="font-semibold mb-4 block text-2xl" htmlFor={name}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={classNames(
          "py-3 px-4 rounded-lg mb-4 bg-background w-full max-w-sm md:max-w-md",
          {// prettier-ignore
          /* @ts-ignore */},
          errors[name] &&
            "border-red-500 placeholder:text-red-500 focus:border-red-500 focus:ring-0",
          classname
        )}
        type="number"
        inputMode="numeric"
        min={1}
        max={5}
        id={name}
        {...register(name, { required: true })}
        name={name}
      />
      {/* @ts-ignore */}
      {errors[name] && (
        <span className="block text-red-500 font-light text-sm">
          این فیلد رو پر نکردی..
        </span>
      )}
    </div>
  );
}

type RadioProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  value: string;
  errors: FieldErrors<InputsType>;
};

export function Radio<T extends FieldValues>({
  name,
  register,
  value,
  errors,
}: RadioProps<T>) {
  return (
    <li className="rounded-lg p-4 flex justify-center items-center">
      <input
        className="appearance-none bg-white peer opacity-0 transition-colors duration-300"
        type="radio"
        id={value}
        {...register(name, { required: true })}
        name="color"
        value={value}
      />
      <label
        className="mb-1 p-8 md:p-10 block rounded-lg hover:opacity-75 cursor-pointer peer-checked:scale-125 transition-all duration-300"
        style={{ background: value }}
        htmlFor={value}
      ></label>
    </li>
  );
}

type RadioWithImageProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  value: string;
  image: StaticImageData;
  labelName: string;
};

export function RadioWithImage<T extends FieldValues>({
  name,
  register,
  value,
  image,
  labelName,
}: RadioWithImageProps<T>) {
  return (
    <li className="rounded-lg p-4 flex justify-center items-center">
      <input
        className="appearance-none bg-white peer opacity-0 transition-colors duration-300"
        type="radio"
        id={value}
        {...register(name, { required: true })}
        name={name}
        value={value}
      />
      <label
        className="mb-1 block rounded-lg hover:opacity-75 cursor-pointer peer-checked:scale-125 transition-all duration-300"
        htmlFor={value}
      >
        <Image
          className="rounded-xl"
          src={image}
          alt={name}
          width={170}
          height={170}
        />
        <span className="text-center block mt-2">{labelName}</span>
      </label>
    </li>
  );
}
