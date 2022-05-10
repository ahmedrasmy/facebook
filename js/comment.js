let inputComment = document.querySelectorAll(
  ".show-posts .post .create-comment .commentInput"
);
let userImg = document.querySelectorAll(
  ".show-posts .post .create-comment img"
);
let subBtn = document.querySelectorAll(
  ".show-posts .post .create-comment .add"
);

let comments = document.querySelectorAll(".show-posts .post .comments");
let localStorageArr = JSON.parse(
  localStorage.getItem("commentsStorage") || "[]"
);
if (localStorageArr) {
  for (let i = 0; i < localStorageArr.length; i++) {
    for (let j = 0; j < comments.length; j++) {
      if (localStorageArr[i].postNum == j) {
        let mycomment = document.createElement("div");
        mycomment.className = "comment";
        let myimg = document.createElement("img");
        myimg.src = localStorageArr[i].img;
        mycomment.appendChild(myimg);
        let commentBody = document.createElement("div");
        commentBody.className = "comment-body";
        let personName = document.createElement("p");
        personName.className = "name";
        personName.textContent = "Ahmed Rasmy";
        commentBody.appendChild(personName);
        let commentText = document.createElement("p");
        commentText.textContent = localStorageArr[i].text;
        commentBody.appendChild(commentText);
        let btnDel = document.createElement("button");
        btnDel.classList.add("btnDel");
        btnDel.setAttribute("onclick", "deleteComment(this)");
        btnDel.id = localStorageArr[i].delID;
        btnDel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        commentBody.appendChild(btnDel);
        mycomment.appendChild(commentBody);
        mycomment.id = localStorageArr[i].delID + "id";
        comments[j].appendChild(mycomment);
      }
    }
  }
}

for (let i = 0; i < subBtn.length; i++) {
  subBtn[i].addEventListener("click", function () {
    if (inputComment[i].value === "") {
      return false;
    } else {
      let mycomment = document.createElement("div");
      mycomment.className = "comment";
      let myimg = document.createElement("img");
      myimg.src = userImg[i].src;
      mycomment.appendChild(myimg);
      let commentBody = document.createElement("div");
      commentBody.className = "comment-body";
      let personName = document.createElement("p");
      personName.className = "name";
      personName.textContent = "Ahmed Rasmy";
      commentBody.appendChild(personName);
      let commentText = document.createElement("p");
      commentText.textContent = inputComment[i].value;
      commentBody.appendChild(commentText);
      let btnDel = document.createElement("button");
      btnDel.classList.add("btnDel");
      btnDel.setAttribute("onclick", "deleteComment(this)");
      btnDel.id = Date.now();
      btnDel.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      commentBody.appendChild(btnDel);
      mycomment.appendChild(commentBody);
      mycomment.id = btnDel.id + "id";
      comments[i].appendChild(mycomment);
      let commentsStorage = {
        postNum: i,
        delID: btnDel.id,
        img: userImg[i].src,
        text: inputComment[i].value,
      };
      let commentsArr = JSON.parse(
        localStorage.getItem("commentsStorage") || "[]"
      );
      commentsArr.push(commentsStorage);
      window.localStorage.setItem(
        "commentsStorage",
        JSON.stringify(commentsArr)
      );
      inputComment[i].value = "";
      location.reload();
    }
  });
}

function deleteComment(e) {
  let divComment = document.getElementById(e.id + "id");
  for (let i = 0; i < localStorageArr.length; i++) {
    if (localStorageArr[i].delID == e.id) {
      localStorageArr.splice(i, 1);
      window.localStorage.setItem(
        "commentsStorage",
        JSON.stringify(localStorageArr)
      );
    }
  }
  divComment.remove();
}

function focusCommentInput() {
  let iconsComment = document.querySelectorAll(
    ".show-posts .post .like-comment-share .icon-comment"
  );
  let commentInputs = document.querySelectorAll(
    ".show-posts .post .create-comment .commentInput"
  );
  for (let i = 0; i < iconsComment.length; i++) {
    iconsComment[i].addEventListener("click", function () {
      commentInputs[i].focus();
    });
  }
}
focusCommentInput();
