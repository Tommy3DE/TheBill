import { Link } from "react-router-dom"

interface ReturnBtnProps {
    route: string;
  }
  
  const ReturnBtn = ({ route }: ReturnBtnProps) => {
    return (
    <Link to={route} className=" font-playFair text-3xl font-black text-center items-center text-white bg-gray-400 px-10 py-4 rounded-2xl hover:bg-gray-500">
        <button className="uppercase tracking-wider text-center">
            Wstecz
        </button>
    </Link>
  )
}

export default ReturnBtn