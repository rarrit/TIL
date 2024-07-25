let slideWid = 100; // 슬라이드 넓이 값
let slideCurrentIdx = 0; // 슬라이드 현재 인덱스 값
let slideMoveDelay = 3000; // 슬라이드 돌아가는 속도
let slideMoveTimer; // interval 초기화
let isDragChk = false; // [drag] 초기화
let downClientX; // [drag] 마우스 클릭했을 때 포인터 위치
let upClientX; // [drag] 마우스 땟을 때 포인터 위치      
let isSlide;

// 초기화에서 사용할 수 있게 함수도 초기화해준다.
let carouselPrevMove;
let carouselNextMove;
let carouselMouseDown;
let carouselMouseUp;


function handleSlideStart(movies) {

  if (!movies || movies.length < 2) {
    console.log("응 2개 미만")
  } else {
    console.log("응 3개 이상")
  }

  const carouselSlide = document.getElementById("movieSlideList");
  const carouselSlideItems = document.querySelectorAll("#movieSlideList > li");
  const carouselBullet = document.getElementById("movieBullet");
  const carouselBulletItems = document.querySelectorAll("#movieBullet > span");
  const carouselBtnPrev = document.getElementById("btnPrev");
  const carouselBtnNext = document.getElementById("btnNext");

  // 슬라이드 리스트 초기 넓이 세팅
  slideWid = carouselSlide.offsetWidth;
  carouselSlideItems.forEach(item => item.style.width = `${slideWid}px`);

  // 슬라이드 생성
  function createSlides(movies) {
    let bullets = movies.map((item, index) => `
      <span class='bulletItem ${index === 0 ? "curr" : ""}'></span>
    `).join('');

    carouselBullet.innerHTML = bullets;
  };

  // #02. 슬라이드가 시작되는 함수, 가독성이 좋게 함수명 변경함
  function startSlideMove() {
    slideMoveTimer = setInterval(() => {
      slideCurrentIdx = (slideCurrentIdx + 1) % carouselSlideItems.length;
      updateSlideTransform();
      updateThumbActive();
    }, slideMoveDelay);
  }

  // #03. 슬라이드 인덱스에 따라 슬라이드의 위치가 이동되어야 하기 때문에 함수로 생성함
  function updateSlideTransform() {
    carouselSlide.style.transform = `translate3d(-${slideCurrentIdx * slideWid}px, 0px, 0px)`;
  }

  // #04. 슬라이드 썸네일 엑티브 또한 슬라이드의 인덱스에 맞춰 엑티브가 되어야하기 때문에 함수로 생성함
  function updateThumbActive() {
    document.querySelectorAll("#movieBullet > span").forEach((thumb, idx) => thumb.classList.toggle("curr", idx === slideCurrentIdx));
  }

  // #05. 슬라이드의 롤링되는 기능을 멈추는것 또한 자주 사용되어 함수로 생성함
  function stopSlideMove() {
    clearInterval(slideMoveTimer);
  }

  // #06. 슬라이드 왼쪽으로 이동 함수
  carouselPrevMove = function () {
    stopSlideMove(); // 자동 슬라이드 종료
    slideCurrentIdx = (slideCurrentIdx === 0) ? carouselSlideItems.length - 1 : slideCurrentIdx - 1;
    updateSlideTransform(); // 슬라이드 인덱스에 맞춰 이동
    updateThumbActive(); // 슬라이드 인덱스에 맞춰 썸네일 엑티브
    startSlideMove(); // 자동 슬라이드 시작
  }

  // #06. 슬라이드 오른쪽으로 이동 함수
  carouselNextMove = function () {
    stopSlideMove();
    slideCurrentIdx = (slideCurrentIdx === carouselSlideItems.length - 1) ? 0 : slideCurrentIdx + 1;
    updateSlideTransform();
    updateThumbActive();
    startSlideMove();
  }

  // #07. 슬라이드 마우스 클릭했을 때 함수
  carouselMouseDown = function (e) {
    isDragChk = true;
    downClientX = e.clientX;
  }

  // #08. 슬라이드 마우스 클릭하고 놓았을 때 함수
  carouselMouseUp = function (e) {
    isDragChk = false;
    upClientX = e.clientX;
    downClientX > upClientX ? carouselNextMove() : carouselPrevMove();
    updateThumbActive();
  }

  // #07. 슬라이드 썸네일 클릭 함수
  function handleThumbnailClick(idx) {
    return function () {
      stopSlideMove();
      slideCurrentIdx = idx;
      updateSlideTransform();
      updateThumbActive();
      startSlideMove();
    };
  }

  carouselBulletItems.forEach((item, idx) => {
    item.addEventListener("click", handleThumbnailClick(idx));
  });

  createSlides(movies);
  startSlideMove();


  carouselBtnPrev.addEventListener("click", carouselPrevMove);
  carouselBtnNext.addEventListener("click", carouselNextMove);
  carouselSlide.addEventListener("mousedown", carouselMouseDown);
  carouselSlide.addEventListener("mouseup", carouselMouseUp);


}



// 슬라이드 초기화
function slideReset() {
  console.log('초기화');

  isSlide = false;
  slideCurrentIdx = 0;
  clearInterval(slideMoveTimer);

  const carouselSlide = document.getElementById("movieSlideList");
  const carouselBtnPrev = document.getElementById("btnPrev");
  const carouselBtnNext = document.getElementById("btnNext");

  document.getElementById("movieBullet").innerHTML = '';
  carouselSlide.style.transform = `translate3d(0px, 0px, 0px)`;

  if (carouselBtnPrev) carouselBtnPrev.removeEventListener("click", carouselPrevMove);
  if (carouselBtnNext) carouselBtnNext.removeEventListener("click", carouselNextMove);
  if (carouselSlide) {
    carouselSlide.removeEventListener("mousedown", carouselMouseDown);
    carouselSlide.removeEventListener("mouseup", carouselMouseUp);
  }
}