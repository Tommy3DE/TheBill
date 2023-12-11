import { useParams } from "react-router-dom";
type DateType = {
    date: string;
}
const MthPage = () => {
    const { date } = useParams<DateType>();

    return (
      <div>
        <h1 className="text-3xl">{date}</h1>

      </div>
    );
}

export default MthPage