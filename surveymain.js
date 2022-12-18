let text1 = document.getElementById('text1')

text1.addEventListener('click',()=>{
    let newUrl = "surveymain2.html"
    document.location.href = newUrl
})

let home = document.getElementById('home')
home.addEventListener('click',()=>{
    let newUrl = "index.html"
    document.location.href = newUrl
})

let singUp = document.getElementById('signup')
singUp.addEventListener('click',()=>{
    let signPage = "sing-up.html"
    document.location.href = signPage
})

let claSign = document.getElementById('SecondSignup')
claSign.addEventListener('click',()=>{
    let signPage = "sing-up.html"
    document.location.href = signPage
})

let login = document.getElementById('login')

login.addEventListener('click', ()=>{
    let url = "log-in.html"
    document.location.href = url
})

let page3 = document.getElementById('text3')

page3.addEventListener('click',()=>{
    let url = "surveymain3.html"
    document.location.href = url
})
