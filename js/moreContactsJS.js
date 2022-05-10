//JSON.parse()      JSON.stringify()
var xhr = new XMLHttpRequest();

xhr.open("GET", "../json/JSONdata.json");

xhr.send();

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var result = JSON.parse(xhr.response);

    for (var i = 0; i < result[0].length; i++) {
      //////////// More /////
      var more = document.querySelector(".more");
      var link = document.createElement("a");
      link.href = "#";
      var spanMoreHover = document.createElement("span");
      spanMoreHover.classList.add("more-hover", "image");
      var img = document.createElement("img");
      img.src = result[0][i].src;
      spanMoreHover.appendChild(img);
      var spanName = document.createElement("span");
      spanName.innerText = result[0][i].name;
      spanMoreHover.appendChild(spanName);
      link.appendChild(spanMoreHover);
      more.appendChild(link);
    }
    for (var i = 0; i < result[1].length; i++) {
      //////////// Contacts /////
      var contacts = document.querySelector(".contacts");
      var linkcontacts = document.createElement("a");
      linkcontacts.href = "#";
      var spanMoreHovercontacts = document.createElement("span");
      spanMoreHovercontacts.classList.add("more-hover", "image");
      var imgcontacts = document.createElement("img");
      imgcontacts.src = result[1][i].srcCon;
      spanMoreHovercontacts.appendChild(imgcontacts);
      var spanNamecontacts = document.createElement("span");
      spanNamecontacts.innerText = result[1][i].nameCon;
      spanMoreHovercontacts.appendChild(spanNamecontacts);
      linkcontacts.appendChild(spanMoreHovercontacts);
      contacts.appendChild(linkcontacts);
    }
  }
});
