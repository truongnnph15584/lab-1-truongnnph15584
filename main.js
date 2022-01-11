const data = [
  {
    img: "https://picsum.photos/300/300",
    title: "Post 1",
    text: "hahahahahahahahahahahahahaha"
  },
  {
    img: "https://picsum.photos/300/300",
    title: "Post 2",
    text: "hehehehehehehehehehehehehehe"
  },
  {
    img: "https://picsum.photos/300/300",
    title: "Post 3",
    text: "hehehehehehehehehehehehehehe"
  }
]

const newfeed = document.getElementsByClassName("newfeed")

const newdata = data.map(function (item) {
  return `   <div class="border p-4 rounded shadow">
        <img src="${item.img}" alt="" />
        <h3><a href="" class="font-bold text-red-500">${item.title}</a></h3>
        <span class="">${item.text}</span>
      </div>`;
}).join("")
for (let i in newfeed) {
  newfeed[i].innerHTML = newdata;
}