  var link = document.querySelector(".write-us");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var username = popup.querySelector("[name=username]");
  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=email]");
  var storageusername = localStorage.getItem("username");
  var storageemail = localStorage.getItem("email");
  var comment = popup.querySelector("[name=comment]");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage1 && storage2) {
      username.value = storageusername;
      email.value = storageemail;
      comment.focus();
    } else  {
       username.focus();
    }
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!username.value || !email.value || !comment.value) {
     event.preventDefault();
     popup.classList.remove("modal-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("modal-error");
   } else {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
    }
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
  });
