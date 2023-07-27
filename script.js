var likeBtns = document.getElementsByClassName("fa-thumbs-up");
for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function (e) {
    e.target.classList.toggle("liked");
  });
}
