// Getting a value in local storage
let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");
for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(a) {
  if (a == "light") {
    document.getElementById("theme-style").href = "css/default.css";
  }
  if (a == "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  }
  if (a == "green") {
    document.getElementById("theme-style").href = "css/green.css";
  }
  if (a == "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }

  //    Setting a value in local storage
  localStorage.setItem("theme", a);
}
