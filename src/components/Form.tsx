import React, { useState } from "react";
import { Input } from "./input";
interface FormData {
  comoanyName: string
  businessNature: string
  address: string
  postcode: Number | string
  contactName: string
  contactPhone: Number | string
  email: `${string}@${string}.com` | string
  linkedin: string
  idea: string
}

const initialFormData: FormData = {
  comoanyName: "",
  businessNature: "",
  address: "",
  postcode: "",
  contactName: "",
  contactPhone: "",
  email: "",
  linkedin: "",
  idea: ""
}
export const Form: React.FC = () => {
  const [fileName, setFileName]= useState<string>("Upload Additional file");
  const [formData, setFormData]= useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const fileHandler= (event: any) =>{
    const file= event.target.files;
    setFileName(file.length> 0 ? file[0].name : "Upload Additional file");
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }= e.target as HTMLInputElement;
    setFormData((prev) => ({...prev, [name]: value}));
    validateField(name as keyof FormData, value);
  }
  const validateField = (name: keyof FormData, value: string) => {
    let error= "";
    switch (name){
      case "comoanyName":
        if (!value) error= "Comoany name is required.";
        break;
      case "businessNature":
        if (!value) error= "Nature of business is required.";
        break;
      case "address":
        if (!value) error= "Address is required.";
        break;
      case "postcode":
        if (!value) error= "Postcode is required.";
        break;
      case "contactName":
        if (!value) error= "Contact name is required.";
        break;
      case "contactPhone":
        if (!value) error= "Contact phone is required.";
        break;
      case "email":
        if (!value) error= "Email address is required.";
        else if (!/\S+@\S+\.\S+/.test(value)) error= "Email address is invalid.";
        break;
      case "linkedin":
        if (!value) error= "LinkedIn URL is required.";
        break;
      case "idea":
        if (!value) error= "Description of your idea is required.";
        break;
      default:
        break;
    }
    setErrors((prev) => ({...prev, [name]: error}));
  }
  const handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(formData);
  }
  const isFormValid = Object.values(errors).every((error) => !error) && Object.values(formData).every((value) => value);
  return (
    <form className="w-[500px] flex flex-col space-y-8" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Your Comoany Name" name="comoanyName" onChange={handleChange} error={errors.comoanyName}/>
      <Input type="text" placeholder="Nature of Bussiness" name="businessNature" onChange={handleChange} error={errors.businessNature}/>
      <div className="flex w-full space-x-4">
        <Input type="text" placeholder="Adress" className="px-3 py-2 border-b border-gray-300 focus:border-b-black focus:outline-none w-[350px]" name="address" onChange={handleChange} error={errors.address}/>
        <Input type="number" placeholder="Postcode" name="postcode" onChange={handleChange} error={errors.postcode}/>
      </div>
      <Input type="text" placeholder="Contact name" name="contactName" onChange={handleChange} error={errors.contactName}/>
      <Input type="number" placeholder="Contact Phone" name="contactPhone" onChange={handleChange} error={errors.contactPhone}/>
      <Input type="email" placeholder="Email Address" name="email" onChange={handleChange} error={errors.email}/>
      <Input type="text" placeholder="Linkedin" name="linkedin" onChange={handleChange} error={errors.linkedin}/>
      <Input type="text" placeholder="Let's talk about your idea" name="idea" onChange={handleChange} error={errors.idea}/>
      <Input type="file" id="file" className="hidden" onChange={fileHandler}/>
      <div className="flex flex-col space-y-2">
        <label htmlFor="file" className="py-10 text-gray-400 cursor-pointer border-2 border-dashed border-gray-300 flex justify-center">{fileName}</label>
        <h6 className="text-gray-400 text-xs">Attach file. File size of your documents should not exceed 10MB</h6>
      </div>
      <button type="submit" disabled={!isFormValid} className="bg-green-700 hover:!bg-green-900 text-white font-semibold px-2 py-1 w-full">SUBMIT</button>
      <span className="flex space-x-2">
        <input type="checkbox"/>
        <h4 className="text-gray-600 text-sm">I want to protect my data by signing an NDA</h4>
      </span>
    </form>
  )
}
export default Form