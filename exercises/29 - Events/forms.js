const rzzldzzl = document.querySelector('.rzzldzzl');
// console.log(rzzldzzl);
rzzldzzl.addEventListener('click', function(event) {
  //   console.log(event);
  const shouldChangePage = confirm('YE REALLY WANNA GO? MIGHT BE PIRATES!');
  console.log(shouldChangePage);
  if (!shouldChangePage) {
    event.preventDefault();
    // window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
});

function logEvent(event) {
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
