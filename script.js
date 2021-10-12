// Create comment list
let comment1 = {
    author: "-Fake Study",
    comment: "'The most educational games you'll ever play. Ever.'",
}
let comment2 = {
    author: "-Real Person",
    comment: "'My favorite place where I come to learn to play to learn!'",
}
let comment3 = {
    author: "-Celine Dion",
    comment: "'A life-changing experience!'",
}
let comments = [comment1, comment2, comment3]
let i = 0
function init() {
    setInterval(commentChange, 10000)
}
function commentChange() {
    let commentObject = comments[i]
    let comElement = document.getElementById("commentDiv1")
    let autElement = document.getElementById("authorDiv1")
    comElement.innerHTML = commentObject.comment
    autElement.innerHTML = commentObject.author
    i++
    console.log("placeholder")
    if (i === 3) {
        i = 0
    }
}
window.addEventListener("load", init)
