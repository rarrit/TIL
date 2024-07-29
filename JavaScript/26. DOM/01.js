/*
  [ DOM ]
  정말 많이 쓰는데 어려운 부분임.
  - DOM은 HTMl문서를 구조화 해놓은 객체임
    - html에 접근한다는 것은 dom을 접근한다라고 이해해도됌
        - 이런걸 프로그래밍 인터페이스 라고도 함
  - 브라우저에 기본적으로 내장되어 있는 API중 하나이다.

  [ API ? ]
  API는 무언가를 주문할 때 **메뉴판과 같은 것**이라고 생각해볼 수 있습니다. 예를 들어, 카페에서 커피를 주문할 때,
  메뉴판을 통해 주문하게 됩니다. 메뉴판은 **고객과 카페 사이의 인터페이스** 역할을 하며, 고객은 메뉴판에서 주문할 음료나 음식을 선택하고,
  카페는 해당 요청을 처리하여 음료나 음식을 제공합니다.

  API도 비슷한 개념입니다. 다른 시스템에서 데이터나 서비스를 요청할 때,
  API는 해당 시스템과 사용자 간의 **인터페이스 역할**을 합니다. 예를 들어, 날씨 앱에서 사용자가 현재 위치의 날씨를 확인하려면,
  앱은 해당 기능을 제공하는 날씨 서비스의 API를 호출하여 날씨 정보를 받아오게 됩니다.

  따라서, **API는 다른 시스템에서 제공하는 기능을 사용할 수 있도록 도와주는 중간자 역할**을 합니다.
  브라우저의 경우 역시, 기본적으로 DOM과 관련된 API를 제공함으로써 브라우저의 **DOM 객체에 접근할 수 있도록 도와**준답니다.
  아래에서 여러가지 DOM 관련 API를 다뤄볼 예정이에요!


  모든 DOM의 node들은 ‘속성’과 ‘메서드'를 갖고있어요.

  [ DOM의 node? ]
  DOM에서 Node란 **웹 페이지를 구성하는 모든 HTML 태그와 텍스트,
  그리고 속성 등을 하나의 블록으로 취급하는 것**이라고 생각할 수 있습니다.

  이러한 블록들은 서로 계층 구조로 연결되어 있으며, 각 블록은 자식 노드, 부모 노드, 형제 노드와 관계를 가지고 있습니다.
  이러한 관계를 이용하여 DOM 트리를 탐색하고 조작할 수 있습니다.

  아래 DOM 요소 하나 하나를(네모, 동그라미) 노드라고 할 수 있어요
*/

// - DOM API
//    - getElementByID, getElementsByClassName, querySelector …
//    - 리엑트에서는 UI 라이브러리가 있어서 리엑트 자체에서 처리함

// 문서를 트리구조로 나타내고, 노드 라는 단위로 document의 일부를 나타냄

document.addEventListener("DOMContentLoaded", function () {

  // 해당 id명을 가진 요소 하나를 반환
  const wrap = document.getElementById("wrap");
  console.log("wrap =>", wrap);

  // 해당 선택자를 만족하는 요소 하나를 반환
  const container = document.querySelector(".container");
  console.log("container =>", container);

  // 해당 class명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환
  const contents = document.getElementsByClassName(".contents");
  console.log("contents =>", contents);

  // 해당 태그명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환
  const spanTag1 = document.getElementsByTagName('span')[0];
  console.log("spanTag1 =>", spanTag1);

  // 해당 태그명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환
  const spanTag2 = document.getElementsByTagName('span')[1];
  console.log("spanTag2 =>", spanTag2);

  // 해당 선택자를 만족하는 모든 요소들을 배열에 인덱스에 맞는 요소를 반환
  const listItems = document.querySelectorAll('.listItem');
  console.log("listItems =>", listItems);

  // 노드 생성
  const div = document.createElement('div');
  console.log("div =>", div);
});
