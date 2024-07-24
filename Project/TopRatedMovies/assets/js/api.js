/*
1. 첫 로딩 시 API KEY,URL 값을 전달받아 리스트를 화면에 출력한다.
2. 검색영역에 값을 입력후 검색한다. ==>> input의 keyup 이벤트, e.keyCode == 13(엔터), button의 click이벤트
  2-1. 검색 할 때 값을 받아야함 ==>> input.value
  2-2. 검색한 값이 json으로 전달받은 데이터가 있는지 없는지 판별해야한다. ==>> [?]그렇다면 그 데이터는 어떻게 받을건가?    
    2-2-1. 있을 경우 해당 데이터를 화면에 출력한다. ==>> handleMovieRender 함수 사용
      2-2-1-1. 만약 데이터 값이 1개면 아래의 리스트는 삭제 후 최상단에만 노출한다. ==>> handleMovieRender 사용 및 DOM 조작
    2-2-2. 없을 경우 "검색결과가 없습니다." 경고창 노출 후 새로고침하여 전체 리스트를 다시 출력한다. ==>> window.reload 및 fetchMovies 실행
*/

// API KEY 값 저장 : 변경되면 않되는 값
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmM4NDQ4MmFjMjNjOTk0Yjg0ZTc0ZTE2NzE3YTAyYSIsIm5iZiI6MTcyMTY5NTk0Ni45NDI2NjQsInN1YiI6IjY2OWVmZDkxMDEzOWZlNjM4ZmJmMjliNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.le2OfU4Q3_drRr_CLeNggdF4WUxZxP3Q6DcPFD57M1g';
// API URL 값 저장 : 변경되면 않되는 값
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {
  fetchMovies();
  handleMovieSearch();
});

/*
** [fetchMovies] 함수 
** 처음 함수로 생성한 이유는 DOM로드되면 실행되게 끔 했는데, 이후 검색기능을 고민하면서 김준현 튜터님께 물어봤다.
** 답변 내용으로는 검색 함수에서도 fetch를 다시 불러 올 수 있지만, 현재 생성된 fetchMovies 함수의 파라미터에
** 값을 추가하여 검색함수가 실행될 때 input의 value값을 전달받아 fetchMovies에서 로직을 구현할 수 있는것!
** 안물어봤으면 또 스파게티를 만들었을 것 같다.
*/
function fetchMovies(searchVal) {
  fetch(API_URL, options)
    .then(response => response.json()) // json 변환 
    .then(response => { // json 데이터 추출
      const movies = response.results; // 데이터를 doc에 할당함

      // 검색 값이 있는지 없는지 판별하여 리스트를 출력함
      if (searchVal === '' || searchVal === null || searchVal === undefined) {
        handleMovieRender(movies); // 첫 로딩 시 전체 데이터 노출
        handleListMouseEvent(); // 무비 리스트 책갈피 효과 이벤트        
      } else {
        // [filter - 실행순서]
        // 1. movie.title.toLowerCase() : 대소문자를 구분하지 않고 검색어를 비교하기위해 타이틀을 소문자로 변경해줌
        // 2. .includes(searchVal.toLowerCase()) : 그리고 소문자로 변경한 값에 검색한 글자가 포함되어 있는지 판별함
        // 3. 즉 소문자로 변경한 검색어가 소문자로 변경한 movie.title에 있는지 확인해서 참이면 배열을 반환해줌
        // includes ==>> 해당 메서드는 문자열이 포함되어 있는지를 확인해줌
        // toLowerCase ==>> 문자열을 소문자로 변환, 반대는 toUpperCase        
        const filterMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchVal.toLowerCase()));
        if (filterMovies.length > 0) { // 검색어가 포함된 movie 데이터가 있는지 확인
          handleMovieRender(filterMovies); // 해당 데이터 값으로 동적으로 화면에 출력
          handleListMouseEvent(); // 무비 리스트 책갈피 효과 이벤트 
          if (filterMovies.length === 1) { // 영화가 한 개일 때
            document.getElementById('movieList').appendChild.remove;
          }
        } else {
          alert('검색한 영화가 없습니다.');
          window.location.reload;
        }
      }
    })
    .catch(err => console.error(err));
}


/*
** [handleMovieSearch] 함수
** 글을 작성 후 엔터 하는 기능과 버튼을 클릭한 기능을 적용
** 여기서 작성된 input의 value값을 handleMovieFindRender함수의 파라미터로 값을 넘겨 준다.
*/
function handleMovieSearch() {
  const searchInput = document.getElementById('searchInp');
  const searchBtn = document.getElementById('searchBtn');

  searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      // 엔터했을 때
      e.preventDefault();
      handleMovieFindRender(searchInput.value);
    }
  })

  searchBtn.addEventListener('click', () => {
    handleMovieFindRender(searchInput.value);
  })
}

/*
** [handleMovieFindRender] 함수
** handleMovieSearch 함수에서 전달받은 input value를 fetchMovies로 전달 함
*/
function handleMovieFindRender(inputVal) {
  fetchMovies(inputVal); // 값 전달
}




/*
** [handleMovieRender] 함수
** 기존 createMovieHtml 로 fetch내에서 바로 동적으로 요소를 생성해서 화면에 노출시켰는데, 검색기능이 생기면서
** 추가된 함수이다. 이유는 첫 랜더 후 검색할 때 마다 동적으로 요소를 화면에 보여줘야하는데, 초기화 기능이 없어서 변경하게되었다.
*/
function handleMovieRender(movies) {
  const movieSlideList = document.getElementById('movieSlideList'); // 영화 슬라이드 리스트 뿌려질 영역   
  const movieList = document.getElementById('movieList'); // 영화 리스트 뿌려질 영역       

  // 리스트 초기화
  movieSlideList.appendChild.remove;
  movieList.appendChild.remove;

  // 리스트 생성
  movieSlideList.innerHTML = movies.map(createMovieSlideHtml).join('');
  movieList.innerHTML = movies.map((movie, index, array) => createMovieHtml(movie, array.length)).join('');
}

/*
** [createMovieSlideHtml] 함수
** handleMovieRender 함수를 생성하며 분리해줬다.
** 처음 한개의 함수내에서 두개의 HTML을 전달하는 것이 복잡해질 것 같아서 이후 슬라이드를 적용할 때, 크게 느껴질 것 같음
*/
function createMovieSlideHtml(movie) {
  return `
    <li class='movieListSlideItem'>
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
        <button type="button" onclick="alert('이 영화의 id 값은 => ${movie.id} 입니다.')">View</button>
      </div>  
      <div class='iBox'>
        <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' />
        <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' />
      </div>                
    </li>
  `
}

/*
** [createMovieHtml] 함수
** handleMovieRender 함수를 생성하며 분리해줬다.
** 처음 한개의 함수내에서 두개의 HTML을 전달하는 것이 복잡해질 것 같아서 이후 슬라이드를 적용할 때, 크게 느껴질 것 같음
*/
function createMovieHtml(movie, totalMovies) {
  // console.log(movie.length); 길이가 안나옴; render 함수에서 기존 원본 배열을 받아서 파라미터로 length 전달해줌
  return `
    <li class='movieListItem' style="width:${100 / totalMovies + '%'}; background:url('https://image.tmdb.org/t/p/w500${movie.poster_path}') no-repeat center center; background-size:cover;">
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
        <button type="button" onclick="alert('이 영화의 id 값은 => ${movie.id} 입니다.')">View</button>
      </div>  
    </li>
  `
}

// [handleListMouseEvent] 함수 : 두 번째 리스트 마우스 오버 이벤트 함수이다.
function handleListMouseEvent() {
  const movieListItem = document.querySelectorAll('.movieListItem');
  movieListItem.forEach(item => {
    item.addEventListener("mouseover", () => {
      movieListItem.forEach(all => all.classList.remove('curr'));
      item.classList.add('curr');
    })
  })
}

// [getStarRating] 함수 : 평점 체크 및 변환 함수
function getStarRating(vote_average) {
  let stars = '';
  // console.log(vote_average);
  if (vote_average <= 2) stars = '★☆☆☆☆';
  else if (vote_average <= 4) stars = '★★☆☆☆';
  else if (vote_average <= 6) stars = '★★★☆☆';
  else if (vote_average <= 9.5) stars = '★★★★☆';
  else stars = '★★★★★';
  return stars;
}

