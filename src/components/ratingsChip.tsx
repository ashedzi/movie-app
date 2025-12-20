import { FaThumbsUp } from "react-icons/fa";
interface Props {
    children: React.ReactNode;
}

function RatingsChip({children}:Props) {
    return (
        <div className="inline-flex items-center text-black bg-white text-xs rounded-full shadow-sm px-3 py-1 border gap-1"> 
            <FaThumbsUp className="text-thumbs-up"/> {children}
        </div>
    )
}

export default RatingsChip;