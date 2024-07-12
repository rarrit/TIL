
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("btnStart"); // 실행 버튼
  const answerBtn = document.getElementById("btnAnswer"); // 제출 버튼
  const inputArea = document.getElementById("inputArea"); // 인풋 영역
  const rememberNumBox = document.getElementById("rememberNumBox"); // 랜덤 숫자 할당할 영역
  const rememberNumVal = document.getElementById("numberVal"); // 랜덤 숫자 노출할 영역
  const msgBox = document.getElementById("msgBox"); // 메시지 박스 영역
  const countNum = document.getElementById("countNum"); // 카운트 영역

  let rememberNumber = 0; // 기억할 숫자 초기값
  let delayCount = 5; // 카운트 다운 초 
  let intervalTimer; // setInterval 초기화

  /******************************************************************************
   * 숫자 기억 게임 시작 
   * ****************************************************************************
  **/
  const handleGameStart = () => {
    // 다시하기를 클릭 시 초기화해준다.
    handleResetGame();

    // 1000 ~ 9999의 랜덤으로 소숫점 제거하여 변수 randomNumber에 담아줌
    const randomNumber = Math.trunc(Math.random() * (9999 - 1000 + 1) + 1000);

    startBtn.innerText = "다시하기"; // 시작하기 -> 다시하기 텍스트 변경
    rememberNumBox.style.display = "block"; // 기억할 숫자 박스 영역 노출

    rememberNumber = randomNumber; // 기억해야할 숫자에 랜덤으로 선언한 값 할당
    rememberNumVal.innerText = randomNumber; // 노출해야할 텍스트에 랜덤으로 선언한 값 할당

    // 카운트 다운 
    handleSetTimer();
  }

  /******************************************************************************
   * 카운트 다운, 시간 설정
   * ****************************************************************************
  **/
  const handleSetTimer = () => {
    intervalTimer = setInterval(() => {
      // console.log(count); 카운트 확인

      // 카운트 1씩 감소
      delayCount--;

      if (delayCount === 0) {
        // 0초가 되면 기억박스 제거, 함수 종료
        rememberNumBox.style.display = "none";
        inputArea.disabled = false;
        clearInterval(intervalTimer);
      } else {
        // 0초가 아닐 경우 카운트 적용
        countNum.innerText = delayCount;
      }
    }, 1000)
  }

  /******************************************************************************
   * 제출하기 버튼 
   * ****************************************************************************
  **/
  const handleAnswer = () => {
    // 기억할 숫자가 0(시작버튼 클릭 안했을 시에)이면 실행되지 않게 함
    if (rememberNumber === 0) {
      alert("시작버튼을 눌러주세요!");
      return false;
    }

    let answerNumber = inputArea.value; // 인풋의 값을 받아옴
    answerNumber = Math.floor(answerNumber); // 인풋의 문자열 값을 숫자로 변환

    // 정답일 때 노출할 텍스트
    let trueText = `
      <p class="textGreen">한번에 맞췄다니 대단한걸요!</p>
    `;
    // 오답일 때 노출할 텍스트
    let falseText = `
      <p class="textRed">아쉽네요!</p>
      <span>정답은 <em id="msgNum">${rememberNumber}</em>입니다!</span>
    `;

    // console.log(rememberNumber, answerNumber); 확인

    // 메시지 박스 노출
    msgBox.style.display = "block";

    if (rememberNumber === answerNumber) {
      // 정답
      msgBox.innerHTML = trueText;
    } else {
      // 오답
      msgBox.innerHTML = falseText;
    }

    inputArea.disabled = true; // 인풋 비활성화
  }

  /******************************************************************************
   * 초기화 작업
   * ****************************************************************************
  **/
  const handleResetGame = () => {
    inputArea.disabled = true; // 인풋 비활성화
    inputArea.value = ''; // 작성 초기화
    msgBox.style.display = "none"; // 메시지 박스 제거
    rememberNumBox.style.display = "none"; // 기억 박스 제거    
    delayCount = 5; // 카운트 초기화
    countNum.innerText = delayCount; // 카운트 초기화
    if (intervalTimer) clearInterval(intervalTimer); // 실행 중인 타이머가 있으면 중지
  }


  // 시작 버튼 클릭시 handleGameStart 실행
  startBtn.addEventListener("click", handleGameStart);
  answerBtn.addEventListener("click", handleAnswer);
});



