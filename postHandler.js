const title = document.getElementById("title");
const postBody = document.getElementById("body");
const btn = document.getElementById("savePosts");
const postDisplay = document.getElementById("readPosts");

const cachedPosts = JSON.parse(localStorage.getItem("posts"));

const posts = [...cachedPosts.posts];
let newPost = {};

title.addEventListener("keypress", (e) => {
  const value = e.target.value;

  newPost["postTitle"] = value;
});

postBody.addEventListener("keypress", (e) => {
  const value = e.target.value;

  newPost["postBody"] = value;
});

btn.addEventListener("click", (e) => {
  posts.push(newPost);
  newPost["dateId"] = Math.floor(Date.now() / 1000);
  localStorage.setItem(
    "posts",
    JSON.stringify({
      posts,
    })
  );

  newPost = {};
});
for (let i = 0; i < posts.length; i++) {
  postDisplay.innerHTML = `
    <div>
      <h3>${posts[i].postTitle}</h3>
      <p>${posts[i].postBody}</p>
    </div>
  `;
}

btn.removeEventListener("click");
postBody.removeEventListener("keypress");
