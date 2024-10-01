import {classNames} from "../utils/classNames";
interface IInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>{
  error?: string;
}
export const Input: React.FC<IInputProps>= ({
  error,
  className,
  ...inputProps
}) =>{
  return(
    <div className="w-full space-y-1">
      <input
        className= {classNames(className || "px-3 py-2 border-b focus:border-b-black focus:outline-none border-gray-300 w-full")}
        {...inputProps}
      />
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  )
}