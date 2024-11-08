import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null; //early return
    return (<div className="w-40 pr-4">
        <img src={IMG_CDN_URL+posterPath} alt="Movie Card"/>
    </div>)
}

export default MovieCard;