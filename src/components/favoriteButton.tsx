import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {useState} from 'react';

interface Props {
    movieId: string;
}

function FavoriteButton({movieId}: Props) {

    const [isFavorite, SetIsFavorite] = useState(false);

    const handleClick = () => {
        SetIsFavorite(!isFavorite);
    }

    return(
        <button 
        className="bg-transparent border-none p-0 cursor-pointer" 
        onClick={handleClick} > {isFavorite ? <FaHeart className="text-heart" /> : <FaRegHeart />} </button>
    )
}

export default FavoriteButton;