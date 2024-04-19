import styles from "./Card.module.css";
import {Link} from "react-router-dom";
const Card = ({movie}) => {
  return (
    <>
      <div className={styles.card}>
        <img
          src={`https://backend-build-api-11.onrender.com/${movie.image}`}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.cardContent}>
          <Link to={`/movie/${movie._id}`}>
            <p>Watch Trailer</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
