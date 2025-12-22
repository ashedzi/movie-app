import Chip from "./chip";
import FavoriteButton from "./favoriteButton";
import RatingsChip from "./ratingsChip";
import "../types/index";


interface Props {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
    release_date: string;
    ratings: number;
}
function MovieCard({id, title, release_date, genre_ids}: Props) {
    return(
        <div className="w-full bg-card-skeleton rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] p-4">
            <div className="flex items-center justify-between">
                <RatingsChip> </RatingsChip>
                <FavoriteButton movieId={id}/>
            </div>
            <div className="mt-20">
                <Chip>{genre_ids[0]}</Chip>
                <h3 className="font-medium text-white mt-2">{title}</h3>
                <p className="text-xs text-white">{release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;