class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}


async function loadJson(url) { // [1] async 키워드를 입력해서 해당 함수가 비동기적으로 동작한다는 것을 알려줌
  const response = await fetch(url); // [2] async 블록 안에서 await 을 만나면 이 구문이 끝날 때 까지 아래쪽이 실행되지 않음
  if (response.status == 200) { // 성공할 때 200이라 함
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function narutoIsNotOtaku() { // 비동기 로직이 들어간다고 명시함

  let title; // while에 넣으면 계속 선언되어서 while문 바깥에서 선언함
  let res;
  while (true) { // true : 어떤 조건에 충족할 때 까지 실행함
    title = prompt("애니메이션 제목을 입력하세요.", "naruto");
    try {
      // res 에 값이 할당할 때까지 아래 구문은 실행되지 않음
      res = await loadJson(`https://animechan.xyz/api/random/anime?title=${title}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
        return narutoIsNotOtaku();
      } else {
        throw err;
      }
    }
  }
  alert(`${res.character}: ${res.quote}.`);
  return res;
}

narutoIsNotOtaku();