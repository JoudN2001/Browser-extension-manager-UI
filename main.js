const filterBtn = document.querySelectorAll(".filterBtn");
const onOff = document.querySelectorAll(".switch");
const cards = document.querySelectorAll(".card");
const themBtn = document.getElementById("colorSchema");
const themLogo = document.getElementById("mainLogo");
let isLightMode = false;

// active checker class
function updateClassCard(checked) {
  let cardSelected = checked.closest(".card");
  cardSelected.classList.toggle("active");
}

onOff.forEach((toggle) => {
  if (toggle.checked) {
    updateClassCard(toggle);
  }
  toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      updateClassCard(toggle);
    } else {
      updateClassCard(toggle);
    }
  });
});

// filter Extentios
selectedFilter = "all";
filterBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    selectedFilter = e.target.value;
    console.log(selectedFilter);
  });
});

filterBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (selectedFilter) {
      case "all":
        filterBtn[0].classList.add("selected");
        filterBtn[1].classList.remove("selected");
        filterBtn[2].classList.remove("selected");
        cards.forEach((card) => {
          card.style.display = "block";
        });
        break;
      case "active":
        filterBtn[0].classList.remove("selected");
        filterBtn[1].classList.add("selected");
        filterBtn[2].classList.remove("selected");
        cards.forEach((card) => {
          if (card.classList.contains("active")) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
        break;
      case "inactive":
        filterBtn[0].classList.remove("selected");
        filterBtn[1].classList.remove("selected");
        filterBtn[2].classList.add("selected");
        cards.forEach((card) => {
          if (!card.classList.contains("active")) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
        break;
      default:
        alert("No filter dedected");
    }
  });
});

// color schema light/dark mode
let mySheet;
window.addEventListener("load", () => {
  const sheets = Array.from(document.styleSheets);
  mySheet = sheets.find(
    (sheet) => sheet.href && sheet.href.includes("styles.css")
  );
});
themBtn.addEventListener("click", (e) => {
  if (!isLightMode) {
    themLogo.src = "assets/images/logo.svg";
    themBtn.src = "assets/images/icon-moon.svg";
    isLightMode = true;
    mySheet.rules[3].style.background = "var(--Light-Gradient)";
    mySheet.rules[4].style.backgroundColor = "var(--Neutral)";
    mySheet.rules[6].style.backgroundColor = "var(--N100)";
    mySheet.rules[7].style.color = "var(--N900)";
    mySheet.rules[10].style.border = "var(--N200)";
    mySheet.rules[10].style.backgroundColor = "var(--Neutral)";
    mySheet.rules[10].style.color = "var(--N900)";
    mySheet.rules[11].style.backgroundColor = "var(--R700)";
    mySheet.rules[11].style.color = "var(--Neutral)";
    mySheet.rules[13].style.backgroundColor = "var(--Neutral)";
    mySheet.rules[13].style.border = "1px solid var(--N100)";
    mySheet.rules[13].style.borderShadow = "0px 0px 1px var(--N300)";
    mySheet.rules[15].style.color = "var(--N900)";
    mySheet.rules[16].style.color = "var(--N600)";
    mySheet.rules[18].style.backgroundColor = "var(--Neutral)";
    mySheet.rules[21].style.backgroundColor = "var(--N300)";
    mySheet.rules[22].style.backgroundColor = "var(--Neutral)";
    mySheet.rules[23].style.backgroundColor = "var(--R700)";
  } else {
    themLogo.src = "assets/images/logo-white.svg";
    themBtn.src = "assets/images/icon-sun.svg";
    isLightMode = false;
    mySheet.rules[3].style.background = "var(--Dark-Gradient)";
    mySheet.rules[4].style.backgroundColor = "var(--N800)";
    mySheet.rules[6].style.backgroundColor = "var(--N700)";
    mySheet.rules[7].style.color = "var(--Neutral)";
    mySheet.rules[10].style.border = "var(--N600)";
    mySheet.rules[10].style.backgroundColor = "var(--N700)";
    mySheet.rules[10].style.color = "var(--N100)";
    mySheet.rules[11].style.backgroundColor = "var(--R400)";
    mySheet.rules[11].style.color = "var(--N900)";
    mySheet.rules[13].style.backgroundColor = "var(--N700)";
    mySheet.rules[13].style.border = "1px solid var(--N600)";
    mySheet.rules[13].style.borderShadow = "0px 0px 1px var(--N900)";
    mySheet.rules[15].style.color = "var(--Neutral)";
    mySheet.rules[16].style.color = "var(--N300)";
    mySheet.rules[18].style.backgroundColor = "var(--N800)";
    mySheet.rules[21].style.backgroundColor = "var(--N600)";
    mySheet.rules[22].style.backgroundColor = "var(--Neutral)";
    mySheet.rules[23].style.backgroundColor = "var(--R500)";
  }
});
