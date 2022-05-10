function showLike() {
  let likes = document.querySelectorAll(
    ".show-posts .post .like-comment-share .like"
  );
  let emoji = document.querySelectorAll(".emoji");
  let likeEmoji = document.querySelectorAll(".emoji .icon1");
  for (let i = 0; i < likeEmoji.length; i++) {
    likeEmoji[i].addEventListener("click", function () {
      likes[i].innerHTML = ` <i class="fa-solid fa-thumbs-up icon1"></i> Like`;
      likes[i].style.color = "#077ae9";
      likes[i].appendChild(emoji[i]);
    });
  }
}

showLike();

function showLove() {
  let likes = document.querySelectorAll(
    ".show-posts .post .like-comment-share .like"
  );
  let emoji = document.querySelectorAll(".emoji");
  let love = document.querySelectorAll(".emoji .icon2");
  for (let i = 0; i < love.length; i++) {
    love[i].addEventListener("click", function () {
      likes[
        i
      ].innerHTML = ` <img alt="Love"  height="20" src="./imgs/love3.svg" width="20"> love`;
      likes[i].style.color = "red";
      likes[i].appendChild(emoji[i]);
    });
  }
}

showLove();
function showCare() {
  let likes = document.querySelectorAll(
    ".show-posts .post .like-comment-share .like"
  );
  let emoji = document.querySelectorAll(".emoji");
  let care = document.querySelectorAll(".emoji .icon3");
  for (let i = 0; i < care.length; i++) {
    care[i].addEventListener("click", function () {
      likes[
        i
      ].innerHTML = `<img alt="Care" width="20"  height="20" src="./imgs/care.svg" ></img> Care`;
      likes[i].style.color = "#f8a538";
      likes[i].appendChild(emoji[i]);
    });
  }
}

showCare();


function showHaha() {
    let likes = document.querySelectorAll(
      ".show-posts .post .like-comment-share .like"
    );
    let emoji = document.querySelectorAll(".emoji");
    let haha = document.querySelectorAll(".emoji .icon4");
    for (let i = 0; i < haha.length; i++) {
        haha[i].addEventListener("click", function () {
        likes[
          i
        ].innerHTML = `<img alt="haha" width="20"  height="20" src="./imgs/haha.svg" ></img> Haha`;
        likes[i].style.color = "#f8a538";
        likes[i].appendChild(emoji[i]);
      });
    }
  }
  
  showHaha();


  function showWow() {
    let likes = document.querySelectorAll(
      ".show-posts .post .like-comment-share .like"
    );
    let emoji = document.querySelectorAll(".emoji");
    let wow = document.querySelectorAll(".emoji .icon5");
    for (let i = 0; i < wow.length; i++) {
        wow[i].addEventListener("click", function () {
        likes[
          i
        ].innerHTML = `<img alt="Wow" width="20"  height="20" src="./imgs/wow.svg" ></img> Wow`;
        likes[i].style.color = "#f8a538";
        likes[i].appendChild(emoji[i]);
      });
    }
  }
  
  showWow();

  function showSad() {
    let likes = document.querySelectorAll(
      ".show-posts .post .like-comment-share .like"
    );
    let emoji = document.querySelectorAll(".emoji");
    let sad = document.querySelectorAll(".emoji .icon6");
    for (let i = 0; i < sad.length; i++) {
        sad[i].addEventListener("click", function () {
        likes[
          i
        ].innerHTML = `<img alt="sad" width="20"  height="20" src="./imgs/sad.svg" ></img> Sad`;
        likes[i].style.color = "#f8a538";
        likes[i].appendChild(emoji[i]);
      });
    }
  }
  
  showSad();


  function showAngry() {
    let likes = document.querySelectorAll(
      ".show-posts .post .like-comment-share .like"
    );
    let emoji = document.querySelectorAll(".emoji");
    let angry = document.querySelectorAll(".emoji .icon7");
    for (let i = 0; i < angry.length; i++) {
        angry[i].addEventListener("click", function () {
        likes[
          i
        ].innerHTML = `<img alt="angry" width="20"  height="20" src="./imgs/angry.svg" ></img> Angry`;
        likes[i].style.color = "#f8a538";
        likes[i].appendChild(emoji[i]);
      });
    }
  }
  
  showAngry();
