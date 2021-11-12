const commentForm = () => document.getElementById("comment-form")
const commentInput = () => document.getElementById("comment-input")
const likesUl = () => document.querySelector("ul.likes")
const heartLikes = {}

document.addEventListener("DOMContentLoaded", () => {
    startCounter()
    minus.addEventListener("click", minusClick)
    plus.addEventListener("click", plusClick)
    heart.addEventListener("click", heartClick)
    pause.addEventListener("click", pauseClick)
    commentForm().addEventListener("submit", handleSubmit)
})

const isRunning = () => {
    return (pause.innerText === "pause") ? true : false
}

const startCounter = () => {
    setInterval(plusClick,1000)
}
    
const minusClick = () => {
    counter.innerText = parseInt(counter.innerText) - 1
}
const plusClick = () => {
    if (isRunning()) {
    counter.innerText = parseInt(counter.innerText) + 1
    }
}
const heartClick = () => {
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1
    if (document.getElementById(`like-${time}`)) {
        document.getElementById(`like-${time}`).innerText = `${time} was clicked ${heartLikes[time]} times`
    } else {
        const li = document.createElement("li")
        li.id = `like-${time}`
        li.innerText = `${time} was clicked 1 times`
        likesUl().appendChild(li)

    }
}
const pauseClick = () => {
    pause.innerText = (pause.innerText === "pause") ? "resume" : "pause"
    const buttons = [plus, minus, heart]
    buttons.forEach((button) => {
        button.disabled = !button.disabled
    })
}
const handleSubmit = (e) => {
    e.preventDefault()
    const val = commentInput().value
    list.innerHTML += `<li>${val}</li>`
    commentInput().value = ""
}