const $body = document.querySelector("body");
const $modal = document.querySelector("#modal");

const $addFriendButton = document.querySelector(".button-add_friend");


function modalAccept() {
    $body.classList.remove("modal-open");
    $modal.className = "";
    $modal.innerHTML = "";
}
function modalDecline() {
    $body.classList.remove("modal-open");
    $modal.className = "";
    $modal.innerHTML = "";
}


function addFriendButton_clickEvent() {
    $body.classList.add("modal-open");
    $modal.classList.add("send_friend_request_by_id");
    $modal.innerHTML = `
<p class="modal-header">ID로 친구 추가</p>
<div class="modal-body"></div>
<ul class="modal-footer"></ul>`;
    _addFriendButton_clickEvent_1();
}
function _addFriendButton_clickEvent_1() {
    const $modalBody = document.querySelector("#modal > .modal-body");
    const $modalFooter = document.querySelector("#modal > .modal-footer");
    $modalBody.innerHTML = `
<div class="input-user_id">
    <input type="text" placeholder="사용자 ID를 입력하세요" style="width: 100%;">
</div>`;
    $modalFooter.innerHTML = `
<li><button onclick="_addFriendButton_clickEvent_2()">사용자 검색</button></li>
<li><button onclick="modalDecline()">취소</button></li>`;
}
function _addFriendButton_clickEvent_2() {
    const $modalBody = document.querySelector("#modal > .modal-body");
    const $modalFooter = document.querySelector("#modal > .modal-footer");
    $modalBody.innerHTML = `
<div class="user-item">
    <div class="image">
        <span class="material-icons">account_circle</span>
    </div>
    <p class="name">박재현</p>
    <!--<button class="button-request_friend">친구 요청</button>-->
</div>`;
    $modalFooter.innerHTML = `
<li><button onclick="modalAccept()">친구 요청</button></li>
<li><button onclick="_addFriendButton_clickEvent_1()">뒤로 가기</button></li>`;
}

$addFriendButton.addEventListener("click", addFriendButton_clickEvent);