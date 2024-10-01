import { useState } from "react";
const headers= [
  "Company",
  "Services",
  "FinTech Solutions",
  "Products",
  "Portfolio",
  "Contact Us"
]
export function Header() {
  const [active, setActive]= useState("")
  const clickHandler= (event: any) =>{
    setActive(event);
  }
  return (
    <div className="flex justify-around h-20 items-center bg-gray-100">
      <h1 className="text-2xl text-[gray] font-semibold">LOGO</h1>
      <div className="flex gap-7 text-[gray] font-normal mr-80">
        {headers.map((link) =>(
          <a key={link} onClick={() => clickHandler(link)} className={`cursor-pointer ${active=== link ? "border-b-2 border-green-500" : ""}`}>{link}</a>
        ))}
      </div>
    </div>
  )
}
export default Header