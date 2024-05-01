const d = document;

const info = {
  fullName: "Nguyễn Huy Hoàng",
  nickName: "(KimiZK)",
  bio: '"Hello World"',
  urlFB: "https://www.facebook.com/KimiZK.XYZ",
  urlChat: "https://m.me/@KimiZK.XYZ",
  bgCard:
    "https://i.pinimg.com/originals/b8/2f/28/b82f28a7e9c8fcb3868d3d94652c107c.gif",
  avtCard:
    "https://i.pinimg.com/564x/2e/d7/30/2ed730d06ab204ac4442cac832ffa99b.jpg",
  verified: "https://i.ibb.co/ckpym8q/snapedit-1713704525392.png",
  picPost:
    "https://i0.wp.com/halcyonrealms.com/blogpics/japgifA.gif?resize=500%2C288&ssl=1",
  title: "Chill with me!~",
  des: "...",
};

function setInnerHTML(selector, value) {
  d.querySelector(selector).innerHTML = value;
}

function setImageUrl(selector, url) {
  d.querySelector(selector + " img").src = url;
}

function setHref(selector, url) {
  d.querySelector(selector).href = url;
}

setInnerHTML(".nickName", info.nickName);
setInnerHTML(".name", info.fullName);
setInnerHTML(".bio", info.bio);
setInnerHTML(".title", `Tiêu đề: ${info.title}`);
setInnerHTML(".des", `Mô tả: ${info.des}`);

setImageUrl(".avtCard", info.avtCard);
setImageUrl(".bgCard", info.bgCard);
setImageUrl(".verified", info.verified);
setImageUrl(".picPost", info.picPost);

setHref(".btn-follow", info.urlFB);
setHref(".btn-chat", info.urlChat);

function reloadPage() {
  location.reload();
}

// function changeTab(event) {
//   const clickedElement = event.target;
//   if (clickedElement.classList.contains("fa-house-heart")) {
//     alert("Home");
//     reloadPage();
//   }

//   if (clickedElement.classList.contains("fa-building-columns")) {
//     alert("Banking");
//     reloadPage();
//   }

//   if (clickedElement.classList.contains("fa-ellipsis")) {
//     alert("Others");
//     reloadPage();
//   }
// }

var slt1 = document.getElementById("selector-1");
var slt2 = document.getElementById("selector-2");
var slt3 = document.getElementById("selector-3");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");

function home() {
  slt1.style.zIndex = "0";
  slt2.style.zIndex = "-1";
  slt3.style.zIndex = "-1";
  console.log("home");
}
function banking() {
  slt1.style.zIndex = "-1";
  slt2.style.zIndex = "0";
  slt3.style.zIndex = "-1";
  console.log("banking");
}
function others() {
  slt1.style.zIndex = "-1";
  slt2.style.zIndex = "-1";
  slt3.style.zIndex = "0";
  console.log("others");
}

function test1() {
  var e = ".fa-house-heart";
  const element = document.querySelector(e);
  if (element) {
    console.log("> Ket qua:", element.classList.contains("fa-house-heart"));
  } else {
    console.log(`> Phan tu: ${e} ko duoc tim thay`);
  }
}
test1();
