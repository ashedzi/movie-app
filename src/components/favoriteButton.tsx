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
        <div className='bg-white/10 backdrop-blur-md inline-flex items-center rounded-full p-1'>
            <button 
            className="cursor-pointer" 
            onClick={handleClick} > {isFavorite ? <FaHeart className="text-heart" /> : <FaRegHeart className='text-white'/>} </button>
        </div>
    )
}

export default FavoriteButton;