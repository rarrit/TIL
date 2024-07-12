
/* 
 * 01. 첫 로딩 시 모든 데이터 ul > li로 노출
 * 02. 기존 데이터에 category 추가 (고기가 들어감, 고기가 안들어감)
 *     - 고기좋아 meat : true
 *     - 고기싫어 meat : false
 * 03. 각 버튼 클릭시 해당 카테고리에 맞게 데이터 노출
*/

document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById('menuList'); // 메뉴 리스트
  const btnAll = document.getElementById('btnAll'); // 전체 버튼
  const btnMeatOn = document.getElementById('btnMeatOn'); // 고기좋아 버튼
  const btnMeatOff = document.getElementById('btnMeatOff'); // 고기싫어 버튼
  const btnRice = document.getElementById('btnRice'); // 밥좋아 버튼
  const btnNoodle = document.getElementById('btnNoodle'); // 면좋아 버튼
  const menuItems = [
    { name: '비빔밥', description: '밥 위에 나물, 고기, 고추장 등을 얹고 비벼 먹는 한국 요리' },
    { name: '김치찌개', description: '김치와 돼지고기 등을 넣고 끓인 한국의 찌개 요리' },
    { name: '불고기', description: '양념한 고기를 구워서 먹는 한국 요리' },
    { name: '떡볶이', description: '떡과 어묵을 고추장 양념에 볶아 만든 한국의 간식' },
    { name: '잡채', description: '당면과 여러 채소, 고기를 볶아 만든 한국 요리' }
  ];

  // 카테고리를 추가한 배열을 생성함
  const menuItemsData = menuItems.map(menuItem => ({
    ...menuItem, // 이전 객체 복사
    // 고기인지 아닌지 카테고리 추가 이후 카테고리 추가할 경우 아래에 계속 추가
    categoryMeat: menuItem.description.includes("고기") ? true : false,
    categorySoup: menuItem.description.includes("찌개") ? true : false,
    categoryRice: menuItem.description.includes("밥") ? true : false,
    categoryNoodle: menuItem.description.includes("면") ? true : false
  }))
  console.log(menuItemsData);

  // 랜더링 될 메뉴들
  const renderMenus = menuItems => {
    const menuHtml = menuItems.map(menuData => `
      <li>
        <strong class='menuTitle'>${menuData.name}</strong>
        <p class='menuDesc'>${menuData.description}</p>
      </li>
    `).join('');
    menuList.innerHTML = menuHtml;
  };


  // 로딩시 전체 노출
  renderMenus(menuItemsData);

  // 전체보기 버튼 클릭
  btnAll.addEventListener('click', () => { renderMenus(menuItemsData) })
  // 고기좋아 버튼 클릭
  btnMeatOn.addEventListener('click', () => { renderMenus(menuItemsData.filter(menuItem => menuItem.categoryMeat === true)) })
  // 고기싫어 버튼 클릭
  btnMeatOff.addEventListener('click', () => { renderMenus(menuItemsData.filter(menuItem => menuItem.categoryMeat === false)) })
  // 밥좋아 버튼 클릭
  btnRice.addEventListener('click', () => { renderMenus(menuItemsData.filter(menuItem => menuItem.categoryRice === true)) })
  // 면좋아 버튼 클릭
  btnNoodle.addEventListener('click', () => { renderMenus(menuItemsData.filter(menuItem => menuItem.categoryNoodle === true)) })

});



