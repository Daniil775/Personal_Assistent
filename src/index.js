const greating = document.querySelector(".greeting-msg");
const bot = document.querySelector("#bot")
const sendBtn = document.querySelector("#send-msg")
const testForm = document.querySelector("#test")
const start = document.querySelector("#start")
const sendFormBtn = document.querySelector("#send-form")

//const data = ['Добро', " пожаловать", "!", " Я", " ваш", " ассистент"]
const tme_bot ={
    name:"HamsterBot",
    token:"8046108784:AAE_3-w3leC5OAeG6d8DyEBwsnb3xeWqSaI",
    account:[5758414518]
}

function sendForm(){
    const name = document.querySelector("#user-name").value
    const age = document.querySelector("#age").value
    const grade = document.querySelector("#grade").value
    const info_1 = document.querySelector("#info-1").value
    const info_2 = document.querySelector("#info-2").value

    const msg = name + ' ' + age + ' ' + grade + ' ' + info_1 + ' ' + info_2;

    const url = `https://api.telegram.org/bot${tme_bot.token}/sendMessage?chat_id=${tme_bot.account[0]}&text=${msg}`
    
    fetch(url)
    .then(Response => Response.json())
    .then(data => console.log(data))
    document.querySelector(".support-mode").style.display = "none";
    testForm.style.display = 'none'
}

function sendMessage(){
    const message = document.querySelector("#message").value
    const name = document.querySelector("#name").value
    const result = "Имя: " + name + ", " + "Сообщение: " + message;

    const url = `https://api.telegram.org/bot${tme_bot.token}/sendMessage?chat_id=${tme_bot.account[0]}&text=${result}`
    
    fetch(url)
    .then(Response => Response.json())
    .then(data => console.log(data))
    document.querySelector(".support-mode").style.display = "none";

}

const data = [
    'Д', 'о', 'б', 'р', 'о',
    ' ', 'п', 'о', 'ж', 'а', 'л', 'о', 'в', 'а', 'т', 'ь',
    '!', 
    ' ', 'Я', 
    ' ', 'в', 'а', 'ш', 
    ' ', 'а', 'с', 'с', 'и', 'с', 'т', 'е', 'н', 'т'
  ]
  
for (let i = 0; i < data.length; i++) {
    let timeout = setTimeout(function(){
        greating.textContent += data[i];
    },100 * i)
}

function openForm(){
    document.querySelector(".support-mode").style.display = "flex";

}

bot.addEventListener("click", openForm)
sendBtn.addEventListener("click", sendMessage)
start.onclick = function(){
    testForm.style.display = 'flex';
}
sendFormBtn.addEventListener("click", sendForm)