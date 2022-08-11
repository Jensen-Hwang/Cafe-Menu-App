// step1 요구사항 구현을 위한 전략
// - [x] 에스프레소 메뉴에 엔터키 입력으로 추가한다.
// - [x] 에스프레소 메뉴에 새로운 메뉴를 확인 버튼으로 추가한다.
// -  추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.




// - [x] 메뉴의 수정 버튼을 눌러 메뉴 이름 수정할 수 있다.
// - [x] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.


// - [x] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다
// - [x] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.

const $ = (selector) => document.querySelector(selector)

function App() {
    const updateMenuCount = () => {
        const menuCount = $('#espresso-menu-list').querySelectorAll('li').length
        $('.menu-count').innerText = `총 ${menuCount}개`
    }

    const addMenuName = () => {
        if ($("#espresso-menu-name").value === '') {
            alert('공백은 입력할 수 없습니다.')
            return;
        }
        const menuItemTemplate = (espressoMenuName) => {
            return `<li class="menu-list-item d-flex items-center py-2">
                <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
                <button
                  type="button"
                  class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                >
                  수정
                </button>
                <button
                  type="button"
                  class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                >
                  삭제
                </button>
              </li>`
        }
        const menuName = menuItemTemplate($("#espresso-menu-name").value);
        const menu = $("#espresso-menu-list")
        menu.insertAdjacentHTML('beforeend', menuName)
        updateMenuCount();
        $("#espresso-menu-name").value = '';
    }

    const updateMenuName = (evt) => {
        let menuName = evt.target.previousElementSibling
        const updatedMenuName = prompt('메뉴명을 수정하세요', menuName.innerText)
        menuName.innerText = updatedMenuName;
    }

    const deleteMenuName = function (evt) {
        if (confirm('정말 삭제하시겠습니까?')) {
            evt.target.parentElement.remove()
            $('.menu-count').innerText = `총 ${this.querySelectorAll('li').length}개`
        }
    }

    $('#espresso-menu-list').addEventListener('click', function (evt) {
        if (evt.target.classList.contains('menu-edit-button')) updateMenuName(evt)
        if (evt.target.classList.contains('menu-remove-button')) deleteMenuName.call(this, evt);
    })

    $("#espresso-menu-form").addEventListener('submit', (evt) => {
        evt.preventDefault();
    })

    $('#espresso-menu-submit-button').addEventListener('click', addMenuName);


    $('#espresso-menu-name').addEventListener('keypress', (evt) => {
        if (evt.key !== 'Enter') return;
        addMenuName();
    })
}

App();





// - [ ] 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다
// - [ ] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.