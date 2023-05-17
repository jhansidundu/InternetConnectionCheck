const wrapperContent = document.querySelector(".wrapper"),
  toast = wrapperContent.querySelector(".toast"),
  content = toast.querySelector(".content"),
  wifiicon = content.querySelector(".icon"),
  details = content.querySelector(".details"),
  spantag = details.querySelector("span"),
  ptag = details.querySelector("p"),
  closeIcon = toast.querySelector(".close-icon");


window.onload = () => {
  function Ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    if (xhr.status() == 200 || xhr.status < 300) {
      toast.remove.classList("offline");
      spantag.innerHTML = "you are in online";
      ptag.innerHTML = "Hurry! you are connected to internet";
      wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
      closeIcon.onclick = () => {
        wrapper.classList.add("hide");
      }
      setTimeout(() => {
        wrapper.classList.add("hide"), 5000
      })

    }

    else {
      offline();
    }

    xhr.onerror = () => {
      offline();
    }

    xhr.send();
  }


  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Internet is disconnected.";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';

  }

  setInterval(() => {
    Ajax()
  }, 100)
}

