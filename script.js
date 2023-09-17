const icons = document.querySelectorAll(".iconify");
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    alert(
      "Normally this would do something. but I was too lazy to implement the features ¯\\_(ツ)_/¯."
    );
  });
}
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    alert(
      "Normally this would do something. but I was too lazy to implement the features ¯\\_(ツ)_/¯."
    );
  });
}
const sidebar = document.querySelectorAll(".sidebar li");
for (let i = 0; i < sidebar.length; i++) {
  if (sidebar[i].innerHTML == "&nbsp;") continue;
  sidebar[i].addEventListener("click", function () {
    alert(
      "Normally this would do something. but I was too lazy to implement the features ¯\\_(ツ)_/¯."
    );
  });
  sidebar[i].addEventListener("mouseover", function () {
    sidebar[i].style.backgroundColor = "pink";
  });
  sidebar[i].addEventListener("mouseout", function () {
    sidebar[i].style.backgroundColor = "#0891b2";
  });
}
