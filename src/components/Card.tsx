import type React from "react"

type Props = {
    width? : string
    title : string
    children : React.ReactNode
}

const Card = ({ width = 'w-3/12', children, title } : Props) => {

  return (
    <div className={`card ${width} py-5 px-3 rounded-md shadow-md border-[1px] border-neutral-400`}>
        <div className="card-header text-3xl text-center font-medium text-gray-800 py-3">
            <h1>{ title }</h1>
        </div>
        { children }
    </div>
  )
}

export default Card