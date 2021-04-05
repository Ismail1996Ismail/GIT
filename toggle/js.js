let mainPost=document.getElementById("main-post");
let post1=document.getElementById("post-1-tab");
let post2=document.getElementById("post-2-tab");
let post3=document.getElementById("post-3-tab");
let post4=document.getElementById("post-4-tab");
// Получили доступ к элементам по ID
post1.addEventListener("click", switchPost);
post2.addEventListener("click", switchPost);
post3.addEventListener("click", switchPost);
post4.addEventListener("click", switchPost);
// 1
post1.addEventListener("click", mainPostImg);
post2.addEventListener("click", mainPostImg);
post3.addEventListener("click", mainPostImg);
post4.addEventListener("click", mainPostImg);
// 2
function switchPost(){
    post1.classList.remove("active");
    post2.classList.remove("active");
    post3.classList.remove("active");
    post4.classList.remove("active");
    this.classList.add("active");
};
function mainPostImg(){
    let src=this.firstElementChild.firstElementChild.firstElementChild.src;
    mainPost.firstElementChild.style.backgroundImage = `url(${src})`;
    let title=this.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
    mainPost.firstElementChild.firstElementChild.firstElementChild.innerHTML=title;
}


