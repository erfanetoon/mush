import React, { useEffect, useState } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Movie from "../movie/Movie";
import Header from "../movie/header/Header";
import Pagination from "../common/pagination/Pagination";
import ListGroup from "../common/listgroup/ListGroup";

const Movies = () => {
  // const [movies, setMovies] = useState(getMovies());
  const [movies, setMovies] = useState([]);
  
  const movieOnPage = 3;
  const [currentPage, setcurrentPage] = useState(1);

  const [genres, setGenres] = useState([]);
  const [selectedGenra, setselectedGenra] = useState([]);

// pagin
  const indexOfLastTodo = currentPage * movieOnPage;
  const indexOfFirstTodo = indexOfLastTodo - movieOnPage;
  const currentMovies = movies.slice(indexOfFirstTodo, indexOfLastTodo);

  // filter
  const deleteHandler = (item) => {
    const deletMovie = movies.filter((movie) => movie._id !== item._id);
    setMovies(deletMovie);
  };

// like
  const likeHandler = (item) => {
    // console.log(item)
    const updatedLiked = [...movies];
    const selectedLiked = updatedLiked.find((movie) => movie._id === item._id);
    selectedLiked.liked = !selectedLiked.liked;
    setMovies(updatedLiked);
  };

  // pagin
  const changeHandler = (page) => {
    setcurrentPage(page);
  };

  // listGropu
  const GenresSelectHandler = (genre) => {
    setselectedGenra(genre);
    setMovies(getMovies().filter(item => item.genre.name === genre.name))
  };

  //  گرفتن کل دیتاهای فیلم و نوع فیلم..
  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

// pagin برای غقب و جلو رفتن
   const handlePrev = ()=>{
     if (currentPage === 1) return 
     setcurrentPage( currentPage -1 )
   }

   const handleNext = () => {
     setcurrentPage(currentPage + 1);
   };


  //  const filtered = selectedGenra
  //    ? movies.filter((m) => m.genre._id === selectedGenra._id)
  //    : movies;

  return (
    <div className="row">
      <div className="showMovies my-3 text-center">
        {movies.length !== 0 ? (
          <h5>
            Showing <span className="text-success">{movies.length}</span> movies
            in the database
          </h5>
        ) : (
          <h5>
            Showing <span className="text-danger">{movies.length}</span> movies
            in the database
          </h5>
        )}
      </div>
      <div className="col-md-3 ListGroup">
        <ListGroup
          genres={genres}
          onGenresSelect={GenresSelectHandler}
          selectedItem={selectedGenra}
        />
      </div>
      <div className="col-md-9 ">
        <div className="Mtable">
          <table className="table">
            <Header />
            {console.log(currentMovies)}
            {console.log(selectedGenra)}
            {currentMovies.map((movie) => {
              return (
                <Movie
                  key={movie._id}
                  movie={movie}
                  onDelete={() => deleteHandler(movie)}
                  onLiked={() => likeHandler(movie)}
                />
              );
            })}
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center pagin">
        <Pagination
          allItemMovies={movies.length}
          movieOnPage={movieOnPage}
          currentPage={currentPage}
          onPageChange={changeHandler}
          handlePrev={handlePrev}
          handleNext={handleNext}

        />
      </div>
    </div>
  );
};

export default Movies;
















// div.col-2+div.col

//  <div className="col-2"></div>
// <div className="col"></div>

//  <table className="table">
//         <Header/>
//         <tbody>
//           {movies.map((movie) => {
//             return <Movie key={movie._id} movie={movie} onDelete={()=>deleteHandler(movie)} />;
//           })}
//         </tbody>

//   </table>
