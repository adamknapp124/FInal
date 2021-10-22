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
    if (i === 3) {
        i = 0
    }
}
window.addEventListener("load", init)

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

function loginHide() {
    var login = document.getElementById("center")
    var register = document.getElementById("center2")
    login.style.display = "none"
    register.style.display = "block"
}

function registerHide() {
    var login = document.getElementById("center")
    var register = document.getElementById("center2")
    register.style.display = "none"
    login.style.display = "block"
}

function validateLogin() {
    if (username.checkValidity() == true && password.checkValidity() == true) {
        window.alert("This form has been submitted")
    }
}

function formSubmission() {
    window.alert("This form has been submitted")
}

function validateRegister() {
    if (
        email.checkValidity() == true &&
        passCreate.value === passCreate2.value &&
        passCreate2.checkValidity() == true
    ) {
        username.value = true
        password.value = true
        window.alert("This form has been submitted")
    } else if (passCreate.value != passCreate2.value) {
        window.alert("Please make sure your passwords are identical")
    } else if (validateEmail() === false) {
        window.alert("Please enter a valid email address")
    }
}

let div1 = {
    divProb: "7 ÷ 1",
    answer: "7",
}
let add1 = {
    addProb: "3 + 4",
    answer: "7",
}
let add2 = {
    addProb: "10 + 6",
    answer: "16",
}
let add3 = {
    addProb: "4 + 6",
    answer: "10",
}
let add4 = {
    addProb: "7 + 5",
    answer: "12",
}
let add5 = {
    addProb: "5 + 4",
    answer: "9",
}
let add6 = {
    addProb: "10 + 6",
    answer: "16",
}
let add7 = {
    addProb: "2 + 2",
    answer: "4",
}
let add8 = {
    addProb: "4 + 4",
    answer: "8",
}
let add9 = {
    addProb: "9 + 10",
    answer: "19",
}
let add10 = {
    addProb: "2 + 3",
    answer: "5",
}
let sub1 = {
    subProb: "7 - 1",
    answer: "6",
}
let sub2 = {
    subProb: "9 - 7",
    answer: "2",
}
let sub3 = {
    subProb: "20 - 10",
    answer: "10",
}
let sub4 = {
    subProb: "12 - 7",
    answer: "5",
}
let sub5 = {
    subProb: "10 - 9",
    answer: "1",
}
let sub6 = {
    subProb: "9 - 4",
    answer: "5",
}
let sub7 = {
    subProb: "7 - 4",
    answer: "3",
}
let sub8 = {
    subProb: "10 - 1",
    answer: "9",
}
let sub9 = {
    subProb: "20 - 15",
    answer: "5",
}
let sub10 = {
    subProb: "16 - 5",
    answer: "11",
}
let div2 = {
    divProb: "6 ÷ 2",
    answer: "3",
}
let div3 = {
    divProb: "10 ÷ 2",
    answer: "5",
}
let div4 = {
    divProb: "8 ÷ 4",
    answer: "2",
}
let div5 = {
    divProb: "10 ÷ 5",
    answer: "2",
}
let div6 = {
    divProb: "6 ÷ 3",
    answer: "2",
}
let div7 = {
    divProb: "20 ÷ 5",
    answer: "4",
}
let div8 = {
    divProb: "10 ÷ 1",
    answer: "10",
}
let div9 = {
    divProb: "16 ÷ 4",
    answer: "4",
}
let div10 = {
    divProb: "21 ÷ 3",
    answer: "7",
}
let mul1 = {
    mulProb: "2 × 1",
    answer: "2",
}
let mul2 = {
    mulProb: "6 × 2",
    answer: "12",
}
let mul3 = {
    mulProb: "5 × 3",
    answer: "15",
}
let mul4 = {
    mulProb: "4 × 4",
    answer: "16",
}
let mul5 = {
    mulProb: "10 × 9",
    answer: "90",
}
let mul6 = {
    mulProb: "6 × 3",
    answer: "18",
}
let mul7 = {
    mulProb: "7 × 5",
    answer: "35",
}
let mul8 = {
    mulProb: "4 × 5",
    answer: "20",
}
let mul9 = {
    mulProb: "5 × 5",
    answer: "25",
}
let mul10 = {
    mulProb: "6 × 6",
    answer: "36",
}

let addQuest = [add1, add2, add3, add4, add5, add6, add7, add8, add9, add10]
let subQuest = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
let divQuest = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10]
let mulQuest = [mul1, mul2, mul3, mul4, mul5, mul6, mul7, mul8, mul9, mul10]

function gameMenuStart() {
    var operator = document.getElementById("chooseOp")
    var startGame = document.getElementById("mathFacts")
    var choice = document.getElementById("operation").value
    operator.style.display = "none"
    startGame.style.display = "block"
    document.getElementById("property").innerHTML = choice
    probGenerator()
    startTimer()
    setClockInterval()
    document.getElementById("answerBox").focus()
}

function showGame() {
    var operator = document.getElementById("chooseOp")
    var startGame = document.getElementById("mathFacts")
    startGame.style.display = "none"
    operator.style.display = "block"
    document.getElementById("score").innerHTML = "Score:"
    myStopFunction()
    resetAnswerBox()
    resetScore()
    resetDropdown()
}

function showScore() {
    var startGame = document.getElementById("mathFacts")
    var showScore = document.getElementById("showScore")
    startGame.style.display = "none"
    showScore.style.display = "block"
}

function newGame() {
    var showScore = document.getElementById("scorePage")
    var operator = document.getElementById("chooseOp")
    showScore.style.display = "none"
    operator.style.display = "block"
    myStopFunction()
    resetScore()
    resetAnswerBox()
    resetDropdown()
    addIncriment = 0
    subIncriment = 0
    divIncriment = 0
    mulIncriment = 0
}

let timeRemaining = 30
let timeLeft = document.getElementById("timeLeft")
var timer

function setClockInterval() {
    timer = setInterval(startTimer, 1000)
}

function startTimer() {
    let timeLeft = document.getElementById("timeLeft")
    if (timeRemaining == 0) {
        viewScore()
        showScore()
    } else {
        timeLeft.innerHTML = "Time remaining: " + timeRemaining
        timeRemaining--
    }
}

function myStopFunction() {
    clearInterval(timer)
    timeRemaining = 30
}

function probGenerator() {
    let addObject = addQuest[addIncriment]
    let subObject = subQuest[addIncriment]
    let divObject = divQuest[addIncriment]
    let mulObject = mulQuest[addIncriment]
    let quest = document.getElementById("question")
    var choice = document.getElementById("operation").value

    if (choice == "Addition") {
        quest.innerHTML = addObject.addProb
    } else if (choice == "Subtraction") {
        quest.innerHTML = subObject.subProb
    } else if (choice == "Division") {
        quest.innerHTML = divObject.divProb
    } else if (choice == "Multiplication") {
        quest.innerHTML = mulObject.mulProb
    }
}

function putNumIn(someNum) {
    let answerBox = document.getElementById("answerBox")
    answerBox.value += someNum
    document.getElementById("answerBox").focus()
}

function resetAnswerBox() {
    document.getElementById("answerBox").value = ""
}

let addIncriment = 0
let subIncriment = 0
let divIncriment = 0
let mulIncriment = 0

function checkAnswer() {
    let quest = document.getElementById("question")
    var answerBox = document.getElementById("answerBox")
    var currentValue = answerBox.value
    var answerBeingChecked = currentValue
    var operator = document.getElementById("operation").value
    // var choice = document.getElementById("operation")

    if (answerBeingChecked == addQuest[addIncriment].answer && operator == "Addition") {
        scoreKeeper()
        addIncriment++
        quest.innerHTML = addQuest[addIncriment].addProb
        resetAnswerBox()
    } else if (answerBeingChecked == subQuest[subIncriment].answer && operator == "Subtraction") {
        scoreKeeper()
        subIncriment++
        quest.innerHTML = subQuest[subIncriment].subProb
        resetAnswerBox()
    } else if (answerBeingChecked == divQuest[divIncriment].answer && operator == "Division") {
        scoreKeeper()
        divIncriment++
        quest.innerHTML = divQuest[divIncriment].divProb
        resetAnswerBox()
    } else if (answerBeingChecked == mulQuest[mulIncriment].answer && operator == "Multiplication") {
        scoreKeeper()
        mulIncriment++
        quest.innerHTML = mulQuest[mulIncriment].mulProb
        resetAnswerBox()
    }
    resetAnswerBox()
    document.getElementById("answerBox").focus()
}

function kbSubmit(key) {
    if (key.keyCode == "13") {
        checkAnswer()
    }
}

window.addEventListener("keydown", kbSubmit, false)

var scoreBase = 0

function scoreKeeper() {
    // var startGame = document.getElementById("mathFacts")
    // var showScore = document.getElementById("showScore")
    // var operator = document.getElementById("chooseOp")
    let score = document.getElementById("score")
    scoreBase++
    score.innerHTML = "Score: " + scoreBase
    if (scoreBase == 10) {
        viewScore()
    }
}

function viewScore() {
    var startGame = document.getElementById("mathFacts")
    // var showScore = document.getElementById("showScore")
    // var operator = document.getElementById("chooseOp")
    let result = document.getElementById("result")
    result.innerHTML = scoreBase
    startGame.style.display = "none"
    scorePage.style.display = "block"
}

function restartGame() {
    var showScore = document.getElementById("showScore")
    var operator = document.getElementById("chooseOp")
    showScore.style.display = "none"
    operator.style.display = "block"
    myStopFunction()
}

function resetScore() {
    document.getElementById("score").innerHTML = "Score:"
    scoreBase = 0
}

function newFunction() {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href)
    }
}
function resetDropdown() {
    var dropDown = document.getElementById("operation")
    dropDown.selectedIndex = 0
}
