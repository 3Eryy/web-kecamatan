import type React from "react"

type Props = {
    variant? : "primary" | "danger" | "success" | "warning"
    children : React.ReactNode
    type? : "button" | "submit" | "reset"
}

const Button = ({children, variant = "primary", type = "button"} : Props) => {

    const style = variant == "primary" ? "bg-blue-500 " : variant == "danger" ? 'bg-red-500 ' : variant == "success" ? "bg-green-500 " : "bg-yellow-500 "
    
  return (
        <button type={type} className={`${style} text-white rounded py-2 w-full mt-10 `}>{children}</button>
  )
}

export default Button