let num1 = document.querySelectorAll(".bannerd")
console.log(num1)
let num2 = document.querySelectorAll(".shi")
console.log(num2)
let banners = document.querySelector(".banner")
let prev = document.querySelector(".bannerleft")
let next = document.querySelector(".bannerright")

num2.forEach(function (n, m) {
    n.onclick = function () {
        for (let i = 0; i < num2.length; i++) {
            num2[i].classList.remove("sahn");
            num1[i].classList.remove("sahn")
        }
        this.classList.add("sahn");
        num1[m].classList.add("sahn");
        en = m;
    }
});

let en = 0;

function banne(dir = "right") {
    if (dir == "right") {
        en++;
    }
    if (en === num2.length) {
        en = 0;
    }
    if (dir == "left") {
        en--

    }
    if (en == -1) {
        en = num1.length - 1
    }


    for (let i = 0; i < num2.length; i++) {
        num2[i].classList.remove("sahn");
        num1[i].classList.remove("sahn")
    }
    num2[en].classList.add("sahn");
    num1[en].classList.add("sahn");

}

let st = setInterval(banne, 2000)
banners.onmouseover = function () {
    clearInterval(st)
}
banners.onmouseout = function () {
    st = setInterval(banne, 2000)
}


next.onclick = function () {
    banne()
}
prev.onclick = function () {
    banne("left")
}