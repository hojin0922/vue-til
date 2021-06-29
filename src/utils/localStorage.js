function saveLocalStorage(name, value) {
  localStorage.setItem(name, value); // 로컬스토리지 저장
}
function getLocalStorage(name) {
  localStorage.getItem(name); // 로컬스토리지 값 가져오기
}

function deleteLocalStorage(name) {
  localStorage.removeItem(name);
}

export { saveLocalStorage, getLocalStorage, deleteLocalStorage };
