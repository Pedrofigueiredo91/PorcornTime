import Movie from "./Movie";

function Main(props) {
  return (
    <div className="Main">
      {/* {message} */}

      {props.movies.map((movieObj, i) => {
        return (
          <Movie
            key={i}
            movieDetails={movieObj}
            callbackToDelete={props.callbackToDelete}
          />
        );
      })}
    </div>
  );
}

export default Main;
