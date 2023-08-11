activeSection = "home";
isTransitioning = true;

setTimeout(function() {
  document.getElementById('home-section').classList.add('trn-modal-y');
}, 125);

setTimeout(function() {
  isTransitioning = false;
}, 600);

const myDropdown = document.getElementById("tuitionType");
const myInput = document.getElementById("cname");

myDropdown.addEventListener("change", function() {
  console.log(myDropdown.value)
  if (myDropdown.value === "individual") {
    myInput.disabled = true;
    myInput.setAttribute("placeholder", "");
    myInput.value = "";
  } else {
    myInput.disabled = false;
    myInput.setAttribute("placeholder", "Your Company Name");
  }
});

function changeTo(clicked) {
  if (clicked === activeSection) return;
  if (isTransitioning) return;

  if (clicked === "home") {
    document.body.style.backgroundImage = 'url("./assets/book-6957870_960_720-dim2.jpg")';
  } else {
    document.body.style.backgroundImage = 'url("./assets/glasses-pixabay-free-640-dim2.jpg")';
  }

  let active = document.getElementById(`${activeSection}-section`);
  let target = document.getElementById(`${clicked}-section`);

  const transitionDuration = toMS(getComputedStyle(target).transitionDuration);

  isTransitioning = true;
  
  // Un-show actve content sections
  active.classList.remove('trn-modal-y');
  setTimeout(() => {
    active.classList.add('no-show');
    target.classList.remove('no-show');

    // This has to be wrapped in its own timer for some reason or it does not trigger
    setTimeout(() => {
      target.classList.add('trn-modal-y');
    }, 15);

    setTimeout(() => {
      isTransitioning = false;
    }, 400)

    activeSection = clicked;
  }, transitionDuration);
}

function toMS(s) {
  return parseFloat(s) * (/\ds$/.test(s) ? 1000 : 1);
}