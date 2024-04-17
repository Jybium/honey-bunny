"use client";

import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";


import { GrView } from "react-icons/gr";
import { GrHide } from "react-icons/gr";


import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const Password = ({
  title,
  placeholder,
  register,
  error,
  required,
  name,
  classname,
} : inputFieldDataType) => {
  const For = title.toLowerCase().split("").join("");

  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow((prev) => !show);
  };
  return (
    <div className="w-full">
      <Label
        htmlFor={For}
        className="text-[#535353] font-[500] text-[12px] mb-[8px] "
      >
        {name}
      </Label>

      <div className="relative w-full">
        <Input
          id={For}
          placeholder={placeholder}
          {...register(name, {
            required: true,
            validate: {
              checkLength: (value: any) => value.length >= 8,
              matchPattern: (value: any) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(value),
            },
          })}
          name={name}
          type={show ? "text" : "password"}
          className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[12px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px] relative"
        />

        <span onClick={showPassword} className="absolute right-2 bottom-3">
          {show ? <GrHide size="20" /> : <GrView size="20" />}
        </span>
      </div>
      <p className="text-gray-400 font-bold text-sm mt-1 text-right">
        Minimum of 8 characters.
      </p>
      {(error[name] as { type: string }) && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is required
        </p>
      )}
      {(error[name] as { type: string }) &&
        error[name].type === "checkLength" && (
          <p className="text-sm text-red-600 font-bold text-left">
            Password is must be up to eight characters
          </p>
        )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be contain at least a number, symbol, uppercase
          letter and lowercase letter
        </p>
      )}
    </div>
  );
};

export const PasswordLogin = ({
  title,
  placeholder,
  error,
  register,
  name,
  classname,
} : inputFieldDataType) => {
  const For = title.toLowerCase().split("").join("");

  const [show, setShow] = useState(false);

  const showPassword = () => {
    setShow((prev) => !show);
  };
  return (
    <div className="w-full grid relative">
      <label htmlFor={For} className="grid text-sm font-bold w-full relative">
        {title}
      </label>
      <div className="relative w-full">
        <input
          type={show ? "text" : "password"}
          name={For}
          {...register(name, {
            required: true,
            validate: {
              checkLength: (value) => value.length >= 8,
              matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/.test(value),
            },
          })}
          id={For}
          className="mt-1 rounded bg-[#E6EEE6] placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full relative"
          placeholder={placeholder}
        />
        <span onClick={showPassword} className="absolute right-2 bottom-3">
          {show ? <GrHide size="20" /> : <GrView size="20" />}
        </span>
      </div>
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is required
        </p>
      )}
      {error[name] && error[name].type === "checkLength" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be up to eight characters
        </p>
      )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-sm text-red-600 font-bold text-left">
          Password is must be contain at least a number, symbol, uppercase
          letter and lowercase letter
        </p>
      )}
      <Link href="/forgot-password">
        <p className="text-[#005400] font-bold text-sm text-right">
          Forgot Password?
        </p>
      </Link>
    </div>
  );
};

export const Text = ({
  title,
  type,
  placeholder,
  register,
  error,
  name,
  required,
  classname,
}: inputFieldDataType) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor={name}
        className="text-[#535353] font-[500] text-[12px] mb-[8px] "
      >
        {name}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name, { required: true })}
        name={name}
        type={type || "text"}
        className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[12px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px]"
      />
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">{`${title} is required.`}</p>
      )}
    </div>
  );
};

export const Select = ({ title, register, error, children, name, onclick } : inputFieldDataType) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="grid text-left text-sm font-bold w-full">
        {title}
        <select
          name={name}
          id={name}
          {...register(name, { required: true })}
          className="mt-1 rounded bg-[#E6EEE6] placeholder:text-sm placeholder:font-regular font-regular text-slate-600 w-full "
        >
          
            <option value=""></option>
        
        </select>
      </label>
      <p
        className="font-black text-blue-500 text-sm cursor-pointer mt-1"
        onClick={() => onclick()}
      >
        {children}
      </p>
      {(error[name] as { type: string }) && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold">{`${title} is required.`}</p>
      )}
    </div>
  );
};

export const Checkbox = ({
  title,
  register,
  error,
  name,
}: inputFieldDataType) => {
  return (
    <div className="w-full">
     
        <input
          type="checkbox"
          {...register(name, { required: true })}
          name={name}
          id={name}
          className="before:content[''] peer relative h-[16px] w-[16px] cursor-pointer appearance-none rounded-[3px] border-[1px] border-[#BFBEB9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary2 checked:bg-primary2 checked:before:bg-primary2 hover:before:opacity-10"
        />
      {error[name] && error[name].type === "required" && (
        <p className="text-sm text-red-600 font-bold text-left">{`${title} is required.`}</p>
      )}
    </div>
  );
};
