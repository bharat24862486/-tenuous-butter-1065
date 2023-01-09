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

// let checkbox = document.querySelectorAll("input[name=checkbox]");

// checkbox.addEventListener('change', ()=>{
//     console.log(checkbox)
// })

let container = document.getElementById('CONTAINER1')
let container2 = document.getElementById('CONTAINER2')
let perform = document.getElementById('cont2')
let ct1 = 0

let array = [
    {name: "Customer satisfaction survey", id:'customer', class:'c101' },
    {name: "Customer service", id:'customer', class:'c102'},
    {name:'Web site feedback survey template' , id:'customer', class:'c103'},
    {name:'Net promoter score (NPS)' ,id:'Education', class:'c104'},
    {name: "University student satisfaction", id:'Education', class:'c105' },
    {name: "Education demographics", id:'Education', class:'c106'},
    {name:'Course evaluation survey template' , id:'Emplyee', class:'c107'},
    {name:'Learning support' ,id:'Emplyee', class:'c108'},
    {name:'Employee engagement' ,id:'Emplyee', class:'c109'},

    {name: "Management performance", id:'Events', class:'c1010' },
    {name: "Team performance", id:'Events', class:'c1011'},
    {name:'360-degree employee evaluation ' , id:'Events', class:'c1012'},
    {name:'Event planning' ,id:'Healthcare', class:'c1013'},
    {name: "Appointment template", id:'Healthcare', class:'c1014' },
    {name: "professional event feedback", id:'Healthcare', class:'c1015'},
    {name:'RSVP and contact information' , id:'Healthcare', class:'c1016'},

]

container.addEventListener('change', ()=>{
    ct1++
    if(ct1%2 != 0){
        // console.log(container.firstElementChild.firstElementChild)
        
        let arr1 = array.filter((ele)=>{
            if(ele.id == 'customer'){
                return true
            }
        })
        call(arr1)
    } else{
        call(array)
    }
    
    
})

let ct2 = 0

container2.addEventListener('change', ()=>{
    ct2++
    if(ct2%2 != 0){
        // console.log(container.firstElementChild.firstElementChild)
        
        let arr1 = array.filter((ele)=>{
            if(ele.id == 'Education'){
                return true
            }
        })
        call(arr1)
    } else{
        call(array)
    }
    
    
})


function call(arr){
    perform.innerHTML = ''
    arr.forEach((e,i)=>{
        let divs = document.createElement('div')
        let ps = document.createElement('p')

        ps.innerText = e.name

        divs.setAttribute('class',`${e.class}`)

        divs.appendChild(ps)
        perform.append(divs)
    })
}





