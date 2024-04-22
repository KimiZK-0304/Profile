const d = document;
const fullName = "Nguyễn Huy Hoàng";
const nickName = "(KimiZK)";
const bio = '"Hello World"';
const URL_FB = "https://www.facebook.com/KimiZK.XYZ";
const URL_CHAT = "https://m.me/@KimiZK.XYZ";
const bgCard =
  "https://i.pinimg.com/originals/b8/2f/28/b82f28a7e9c8fcb3868d3d94652c107c.gif";
const avtCard =
  "https://i.pinimg.com/564x/2e/d7/30/2ed730d06ab204ac4442cac832ffa99b.jpg";
const verified = "https://i.ibb.co/ckpym8q/snapedit-1713704525392.png";
const picPost = "https://i0.wp.com/halcyonrealms.com/blogpics/japgifA.gif?resize=500%2C288&ssl=1"
const title = "Chill with me!~"
const des = "Sex"

d.querySelector(".nickName").innerHTML = nickName;
d.querySelector(".name").innerHTML = fullName;
d.querySelector(".bio").innerHTML = bio;

d.querySelector(".avtCard img").src = avtCard;
d.querySelector(".bgCard img").src = bgCard;
d.querySelector(".verified img").src = verified;

d.querySelector(".btn-follow").href = URL_FB;
d.querySelector(".btn-chat").href = URL_CHAT;

d.querySelector(".title").innerHTML = `Tiêu đề: ${title}`;
d.querySelector(".des").innerHTML = `Mô tả: ${des}`;
d.querySelector('.picPost img').src = picPost
