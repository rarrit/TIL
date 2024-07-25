# :ledger: 스파르타코딩 2주차 개인과제 | 최고 평점 영화 콜렉션

![MINKYU MOVIE COLLECTION 01](https://github.com/user-attachments/assets/10654426-d1ae-464b-b8a6-9f637a539d37)
<br/>
![MINKYU MOVIE COLLECTION 02](https://github.com/user-attachments/assets/c1e22b00-3047-4f74-8991-43a26a7a9c57)

## :fire: 프로젝트 URL
- URL : [MINKYU MOVIE COLLECTION](https://rarrit.github.io/TIL/Project/TopRatedMovies/)

## :one: 과제 개요
1. 순수 바닐라 자바스크립트만으로 영화 리스트 조회 및 검색 UI 구현
2. 학습해온 자바스크립트 문법을 최대한 활용
3. 스타일링 작업하며 css 와 친해지기

## :two: 요구사항
- 완성본 예시: [https://nabacam-movies.vercel.app/](https://nabacam-movies.vercel.app/)

### :pushpin: 2-1) 필수구현사항
1. jQuery 라이브러리 사용없이 **순수 바닐라 자바스크립트** 사용하기
  - JavaScript 문법 종합반에서 학습한 내용과 지난 예제문제를 참조해 보세요
2. TMDB 오픈 API를 이용하여 인기영화 데이터 가져오기
3. 영화정보 카드 리스트 UI 구현
  - TMDB에서 받아온 데이터를 브라우저 화면에 카드 형태의 데이터로 보여줍니다.
  - 카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수로 들어갑니다.
  - 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
4. 영화 검색 UI 구현
  - API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.
  - 입력 후 검색버튼 클릭 시 실행되도록 합니다.
5. 아래 기재된 Javascript 문법 요소를 이용하여 구현
  - 문법 리스트
    - `const`와 `let`만을 이용한 변수 선언 필수
    - 화살표 함수 : 아래 예시 중 1개 이상 사용 
    - 배열 메소드 : 하기 예시 중 2개 이상 사용 (`forEach`, `map`,`filter`, `reduce`, `find` ...)
    - DOM 제어하기 : 아래 api 목록 중 2개 이상 사용하기 (`createElement`, `getElementById`,`preventDefault`, `stopPropagation` ...)

### :pushpin: 2-2) 선택구현사항
1. CSS
  - flex 사용하기
  - grid 사용하기
2. 웹사이트 랜딩 또는 새로고침 후 검색 입력란에 커서 자동 위치시키기
3. 대소문자 관계없이 검색 가능하게 하기
4. 키보드 enter키를 입력해도 검색버튼 클릭한 것과 동일하게 검색 실행시키기
5. 원하는 추가기능 무엇이라도 okay!
  - 여러분의 챌린지는 언제나 환영합니다. 필수 요구사항이 완료되었다면, 자유롭게 추가기능을 넣어주세요.
  - 단, 우선순위는 필수요구사항임을 명심해주세요!


## :three: 목표
1. 필수구현 사항 및 선택구현사항 전체 완료 후 슬라이드 기능 및 동적 이벤트 요소를 추가
2. 동적 슬라이드 UI 구현 
  - fetch로 데이터를 전달받은 후 동적으로 슬라이드 자동 롤링 효과 적용
    - 데이터가 1개일 때 슬라이드 기능 초기화 및 버튼,네비게이션 삭제
  - 이전, 다음 버튼 추가 및 클릭 시 슬라이드 이동
  - 슬라이드 하단에 네비게이션 적용 및 엑티브된 슬라이드에 맞춰 자동 엑티브
  - 슬라이드가 끝에 도달했을 때 loop 되어야 한다.
  - 드래그하여 슬라이드가 이동되어야 한다.
3. 책갈피 기능 UI 구현
  - fetch로 데이터를 전달받은 후 동적으로 슬라이드 아래 섹션에 책갈피 UI 리스트 출력
    - 데이터가 1개일 때 해당 영역 삭제
  - `mouseover` 이벤트와 css로 리스트에 마우스를 올리면 펼쳐지는 효과 적용
4. 검색 기능 UI 구현
  - 상단 검색 시 대,소문자 구분없이 해당 게시물 노출 
  - enter 및 검색 버튼을 클릭해도 실행

## :four: 폴더구조 및 사용언어

### :pushpin: 4-1) 폴더구조
📦TopRatedMovies<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂css<br/>
 ┃ ┃ ┣ 📜common.css<br/>
 ┃ ┃ ┣ 📜layout.css<br/>
 ┃ ┃ ┣ 📜main.css<br/>
 ┃ ┃ ┣ 📜slide.css<br/>
 ┃ ┃ ┗ 📜style.css<br/>
 ┃ ┣ 📂images<br/>
 ┃ ┃ ┗ 📜btn-slide.png<br/>
 ┃ ┣ 📂js<br/>
 ┃ ┃ ┣ 📜api.js<br/>
 ┃ ┃ ┗ 📜slide.js<br/>
 ┃ ┗ 📂scss<br/>
 ┣ 📜README.md<br/>
 ┗ 📜index.html

### :pushpin: 4-2) 사용언어
![js](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

## :five: 소감

### 제작 풀이 과정
- [JavaScript 영화 검색 사이트 제작 및 풀이 과정 1차](https://rarrit.github.io/til/js/movie-correction/)
- [JavaScript 영화 검색 사이트 제작 및 풀이 과정 2차](https://rarrit.github.io/til/js/movie-correction02/)
- [JavaScript 영화 검색 사이트 제작 및 풀이 과정 3차](https://rarrit.github.io/til/js/movie-correction03/)