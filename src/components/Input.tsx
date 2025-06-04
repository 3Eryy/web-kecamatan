import type React from "react"

type Props = {
  type?: string
  id: string
  value?: string
  children: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type = "text", id, value, onChange, children }: Props) => {
  return (
    <>
        <label htmlFor={id} className="block text-sm font-medium text-gray-600 mb-1 ms-2">
            {children}
        </label>
        <input
        type={type}
        id={id}
        name={id}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition duration-200"
        placeholder={`Masukkan ${children}`}
        value={value}
        onChange={onChange}
        />
    </>
  )
}

export default Input
