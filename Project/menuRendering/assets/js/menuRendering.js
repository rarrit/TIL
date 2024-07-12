document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById('menuList'); // 메뉴 리스트
  const btnAll = document.getElementById('btnAll'); // 전체 버튼
  const btnMeatOn = document.getElementById('btnMeatOn'); // 고기좋아 버튼
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
    categories: {
      // 카테고리 추가시 아래에 추가
      meat: menuItem.description.includes("고기"),
      soup: menuItem.description.includes("찌개"),
      rice: menuItem.description.includes("밥"),
      noodle: menuItem.description.includes("면")
    }
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

  // 카테고리 필터링
  const menuCategoryFilter = category => {
    category === 'all'
      // 카테고리가 전체면 전체 데이터 노출
      ? renderMenus(menuItemsData)
      // 전체가 아니라면 전체 데이터 categories의 카테고리명에 따라 노출
      : renderMenus(menuItemsData.filter(items => items.categories[category]));
  }

  // 전체보기 버튼 클릭
  btnAll.addEventListener('click', () => menuCategoryFilter('all'));
  // 고기좋아 버튼 클릭
  btnMeatOn.addEventListener('click', () => menuCategoryFilter('meat'));
  // 밥좋아 버튼 클릭
  btnRice.addEventListener('click', () => menuCategoryFilter('rice'));
  // 면좋아 버튼 클릭
  btnNoodle.addEventListener('click', () => menuCategoryFilter('noodle'));

});



