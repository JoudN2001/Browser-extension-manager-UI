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
themBtn.addEventListener("click", (e) => {
  if (!isLightMode) {
    themLogo.src = "assets/images/logo.svg";
    themBtn.src = "assets/images/icon-moon.svg";
    isLightMode = true;
  } else {
    themLogo.src = "assets/images/logo-white.svg";
    themBtn.src = "assets/images/icon-sun.svg";
    isLightMode = false;
  }
});

// document.styleSheets[3].rules[3];
// document.styleSheets[3].rules[5];
// document.styleSheets[3].rules[6];
// document.styleSheets[3].rules[9];
// document.styleSheets[3].rules[10];
// document.styleSheets[3].rules[12];
// document.styleSheets[3].rules[14];
// document.styleSheets[3].rules[15];
// document.styleSheets[3].rules[20];
// document.styleSheets[3].rules[21];
// document.styleSheets[3].rules[22];

window.addEventListener("load", () => {
  // 1. Get all sheets
  const sheets = Array.from(document.styleSheets);

  // 2. Find the one specifically named "styles.css"
  const mySheet = sheets.find(
    (sheet) => sheet.href && sheet.href.includes("styles.css")
  );

  if (mySheet) {
    console.log("SUCCESS! Found your file:", mySheet);
    console.log("Total Rules:", mySheet.rules.length); // Should show 25+

    // Now you can safely access your rules
    console.log(mySheet.rules[3]);
  } else {
    console.error(
      "Could not find styles.css. Check if the file name matches exactly."
    );
  }
});
