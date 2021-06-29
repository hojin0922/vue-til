function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  var pattern1 = /[0-9]/;
  var pattern2 = /[a-zA-Z]/;
  var pattern3 = /[~!@#$%<>^&*]/; // 원하는 특수문자 추가 제거
  return (
    pattern1.test(password) &&
    pattern2.test(password) &&
    pattern3.test(password) &&
    password.length > 8 &&
    password.length < 50
  );
}

export { validateEmail, validatePassword };
