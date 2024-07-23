const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmM4NDQ4MmFjMjNjOTk0Yjg0ZTc0ZTE2NzE3YTAyYSIsIm5iZiI6MTcyMTY5NTk0Ni45NDI2NjQsInN1YiI6IjY2OWVmZDkxMDEzOWZlNjM4ZmJmMjliNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.le2OfU4Q3_drRr_CLeNggdF4WUxZxP3Q6DcPFD57M1g'
  }
};


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  // json 변환 
  .then(response => response.json())
  // json 데이터 추출
  .then(response => {
    const doc = response; // 데이터를 doc에 할당함
    const movieSlideList = document.getElementById('movieSlideList'); // 영화 슬라이드 리스트 뿌려질 영역   
    const movieList = document.getElementById('movieList'); // 영화 리스트 뿌려질 영역       

    createMovieHtml(doc);
    handleListMouseEvent(doc);
  })
  .catch(err => console.error(err));



function createMovieHtml(doc) {
  let movieData = doc.results; // movieData에 movie 배열 할당  
  console.log(movieData);
  // ul#movieSlideList 에 뿌려줄 li 생성
  let movieSlideItems = movieData.map(movie =>
    `
      <li class='movieListItem'>
        <div class="tBox">
          <em>MINKYU <span>MOVIE CORRECTION</span></em>
          <strong class="tit">${movie.title}</strong>          
          <p class="info">
            <span class="date">${movie.release_date}</span>  
            <span>
              <em class="average">${Math.ceil(movie.vote_average * 10) / 10}</em>
              <em class="star">${getStarRating(movie.vote_average)}</em>
            </span>           
          </p>          
          <p class="desc">${movie.overview}</p>
          <button type="button">View</button>
        </div>  
        <div class='iBox'>
          <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' />
          <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' />
        </div>                
      </li>
    `
  ).join('');

  let movieListItems = movieData.map(movie =>
    `
      <li class='movieListItem' style="width:${100 / movieData.length + '%'}; background:url('https://image.tmdb.org/t/p/w500${movie.poster_path}') no-repeat center center; background-size:cover;">
        <div class="tBox">
          <em>MINKYU <span>MOVIE CORRECTION</span></em>
          <strong class="tit">${movie.title}</strong>          
          <p class="info">
            <span class="date">${movie.release_date}</span>  
            <span>
              <em class="average">${Math.ceil(movie.vote_average * 10) / 10}</em>
              <em class="star">${getStarRating(movie.vote_average)}</em>
            </span>            
          </p>          
          <p class="desc">${movie.overview}</p>
          <button type="button">View</button>
        </div>  
      </li>
    `
  ).join('');


  movieSlideList.innerHTML = movieSlideItems;
  movieList.innerHTML = movieListItems;
}

function handleListMouseEvent(doc) {
  if (!doc) return false;
  const movieListItem = document.querySelectorAll(".movieListItem");
  movieListItem.forEach(item => {
    item.addEventListener("mouseover", () => {
      movieListItem.forEach(all => {
        all.classList.remove('curr');
      })
      item.classList.add('curr');
    })
  })
}

function getStarRating(vote_average) {
  let stars = '';
  console.log(vote_average);
  if (vote_average <= 2) {
    stars = '★☆☆☆☆';
  } else if (vote_average <= 4) {
    stars = '★★☆☆☆';
  } else if (vote_average <= 6) {
    stars = '★★★☆☆';
  } else if (vote_average <= 9.5) {
    stars = '★★★★☆';
  } else {
    stars = '★★★★★';
  }
  return stars;
}

