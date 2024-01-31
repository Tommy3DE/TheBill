import SlimNav from "../../layout/SlimNav"
import HistoryRoutes from "./components/HistoryRoutes"

const History = () => {
  return (
    <div className="h-auto lg:h-screen w-full">
    <SlimNav/>
    <div className="mx-auto max-w-[1980px] ">
    <HistoryRoutes/>
    </div>
    </div>
  )
}

export default History