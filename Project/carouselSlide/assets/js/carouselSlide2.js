document.addEventListener("DOMContentLoaded", function () {
  // #01. 기존의 로드 될 경우 슬라이드가 실행이 되었는데, 그럴경우 재사용이 불가능하여 함수로 슬라이드 시작 함수를 생성함 
  handleSlideStart();
});

function handleSlideStart() {
  const carouselWrap = document.getElementById("carousel-wrap");
  const carouselSlide = document.getElementById("carousel-slide");
  const carouselSlideItems = document.querySelectorAll(".carousel-slide-item");
  const carouselThumb = document.getElementById("carousel-thumb");
  const carouselThumbItems = document.querySelectorAll(".carousel-thumb-item");
  const carouselBtnPrev = document.getElementById("btn-prev");
  const carouselBtnNext = document.getElementById("btn-next");

  let slideWid; // 슬라이드 넓이 값
  let slideCurrentIdx = 0; // 슬라이드 현재 인덱스 값
  let slideMoveDelay = 3000; // 슬라이드 돌아가는 속도
  let slideMoveTimer; // interval 초기화
  let isDragChk = false; // [drag] 초기화
  let downClientX; // [drag] 마우스 클릭했을 때 포인터 위치
  let upClientX; // [drag] 마우스 땟을 때 포인터 위치    

  // 슬라이드 리스트 초기 넓이 세팅
  slideWid = carouselSlide.offsetWidth;
  carouselSlideItems.forEach(item => item.style.width = `${slideWid}px`);

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
      carouselThumbItems.forEach((thumb, idx) => thumb.classList.toggle("curr", idx === slideCurrentIdx));
  }

  // #05. 슬라이드의 롤링되는 기능을 멈추는것 또한 자주 사용되어 함수로 생성함
  function stopSlideMove() {
      clearInterval(slideMoveTimer);
  }

  function carouselPrevMove() {
      stopSlideMove(); // 자동 슬라이드 종료
      slideCurrentIdx = (slideCurrentIdx === 0) ? carouselSlideItems.length - 1 : slideCurrentIdx - 1;
      updateSlideTransform(); // 슬라이드 인덱스에 맞춰 이동
      updateThumbActive(); // 슬라이드 인덱스에 맞춰 썸네일 엑티브
      startSlideMove(); // 자동 슬라이드 시작
  }

  function carouselNextMove() {
      stopSlideMove();
      slideCurrentIdx = (slideCurrentIdx === carouselSlideItems.length - 1) ? 0 : slideCurrentIdx + 1;
      updateSlideTransform();
      updateThumbActive();
      startSlideMove();
  }

  function handleThumbnailClick(idx) {
      return function () {
          stopSlideMove();
          slideCurrentIdx = idx;
          updateSlideTransform();
          updateThumbActive();
          startSlideMove();
      };
  }

  function handleMouseEvents() {
      carouselSlide.addEventListener("mousedown", (e) => {
          isDragChk = true;
          downClientX = e.clientX;
      });

      carouselSlide.addEventListener("mouseup", (e) => {
          isDragChk = false;
          upClientX = e.clientX;
          downClientX > upClientX ? carouselNextMove() : carouselPrevMove();
          updateThumbActive();
      });

      carouselSlide.addEventListener("mousemove", (e) => {
          if (isDragChk) {
              // Dragging logic can be added here
          }
      });

      carouselSlide.addEventListener("mouseover", stopSlideMove);

      carouselSlide.addEventListener("mouseleave", startSlideMove);
  }

  // Attach event listeners
  carouselThumbItems.forEach((item, idx) => {
      item.addEventListener("click", handleThumbnailClick(idx));
  });

  carouselBtnPrev.addEventListener("click", carouselPrevMove);
  carouselBtnNext.addEventListener("click", carouselNextMove);

  // Start the automatic slide movement
  startSlideMove();

  // Initialize mouse event handlers
  handleMouseEvents();
}