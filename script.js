import { mouvies } from "./module/db.js";
console.log(mouvies);
let btn = document.querySelectorAll('.btn')
let btnID1 = document.getElementById('1')
let btnID2 = document.getElementById('2')
let coiunter = document.querySelector('.counter')
let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let block3 = document.querySelector('.block3')
let info = document.querySelectorAll('.info')
let text = document.querySelector('.text')
let TitelText = document.querySelector('.TitleText  ')


console.log(btn);
// console.log(coiunter);



coiunter.innerHTML = block1.length
function reload(arr) {
    block1.innerHTML = ''
    for (let item of arr) {
        

        let maseng = document.createElement('div')
        let content = document.createElement('div')
        let label = document.createElement('label')
        let inp = document.createElement('input')
        let fake = document.createElement('span')
        let textCheck = document.createElement('span')
        let p = document.createElement('p')
        let timer = document.createElement('span')
        let month = document.createElement('div')        
        let date = document.createElement('div')





        maseng.classList.add('maseng')
        content.classList.add('content')
        label.classList.add('label')
        inp.type = 'checkbox'
        inp.classList.add('checkbox')
        fake.classList.add('fake')
        textCheck.classList.add('textCheck')
        timer.classList.add('timer')
        month.classList.add('month')        
        date.classList.add('date')
        textCheck.innerHTML = 'Buy S Plaid!'
        p.innerHTML = item.title


        maseng.append(content)
        content.append(label, p, timer)
        timer.append(month , date)
        label.append(inp, fake, textCheck)



    var today = new Date();
    
    today.setDate( today.getDate() + item.left )
    var options = { month: 'long', day: 'numeric' };
    options.timeZoneName = 'short';
    var now = today.toLocaleString('en', options) ;
        

if (item.left <= 1) {
    block1.append(maseng)

    timer.innerHTML = 'Today' + item.left
    console.log(block1);
        } else if (item.left > 1 && item.left <= 2) {
            block2.append(maseng)
            date.innerHTML =  now
        } else if (item.left >= 3) {
            block3.append(maseng)
            timer.innerHTML = now
        }
    }
}
reload(mouvies)

// btn.forEach(l => {
//     l.onclick = () => {
//         btn.forEach(b => b.classList.remove('active'))
//         l.classList.add('active')
//         block2.style.display = 'none'
//         block3.style.display = 'none'
//     }

btnID1.onclick = () => {
    btnID2.classList.remove('active')
    btnID1.classList.add('active')


    info.forEach(e => {
        e.style.display = 'block'
      })
    
      block2.style.display = 'block'
      block3.style.display = 'block'
    
      text.style.display = 'block'
      TitelText.innerHTML = 'All todos'
}

btnID2.onclick = () => {
    btnID1.classList.remove('active')
    btnID2.classList.add('active')
    
  info.forEach(e => {
    e.style.display = 'none'
  })

  block2.style.display = 'none'
  block3.style.display = 'none'

  text.style.display = 'none'
  TitelText.innerHTML = 'ONLY TODAY TODOS'

}
