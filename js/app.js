const block=document.querySelectorAll('.y')
const block1=document.querySelector('.spawn')
let axeX=3
let axeY=2
const btn=document.querySelector('button')
const spawn1=document.querySelector('#spawn1')
const spawn2=document.querySelector('#spawn2')
const perso=document.createElement('img')
let coeur =3
let countc=document.querySelector('#coeur')
let perdu=false
let bombes=3
let cle=0
let countcle=document.querySelector('#cle')
countcle.textContent=cle
let countb=document.querySelector('#bombe')
countc.textContent=coeur
countb.textContent=bombes
let tear = document.createElement('img')
tear.src='img/tear.png'
perso.src='img/perso1.png'
perso.alt='perso1'
perso.className='perso1'
spawn1.appendChild(perso)
window.addEventListener('keydown',(e)=>{
    if(e.code=='KeyS'){
        if(axeY<block.length-1&&block[axeY+1].children[axeX].firstChild==null&&block[axeY+1].children[axeX].classList.contains('vide')&&perdu==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyW'){
        if(axeY>0&&block[axeY-1].children[axeX].firstChild==null&&block[axeY-1].children[axeX].classList.contains('vide')&&perdu==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeY--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyA'){
        if(axeX>0&&block[axeY].children[axeX-1].firstChild==null&&block[axeY].children[axeX-1].classList.contains('vide')&&perdu==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX--
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='KeyD'){
        if(axeX<block[axeY].children.length-1&&block[axeY].children[axeX+1].firstChild==null&&block[axeY].children[axeX+1].classList.contains('vide')&&perdu==false){
            block[axeY].children[axeX].removeChild(block[axeY].children[axeX].firstChild)
            axeX++
            block[axeY].children[axeX].appendChild(perso)
        }
    }
    else if(e.code=='ArrowDown'){
        Tire('down')
    }
    else if(e.code=='ArrowUp'){
        Tire('up')
    }   
    else if(e.code=='ArrowLeft'){
        Tire('left')
    }
    else if(e.code=='ArrowRight'){
        Tire('rigth')
    }
    else if(e.code=='KeyE'||e.code=='Space'){
        bombe()
    }
})
function bombe(){
    if(bombes>0){
        bombes--
        countb.textContent=bombes
        
        const bombe=document.createElement('img')
        bombe.src='img/bombe.png'
        bombe.className='bombe'
        let axeBX=axeX
        let axeBY=axeY
        block[axeBY].children[axeBX].appendChild(bombe)
        setTimeout(function(){
            if(block[axeBY].children[axeBX].firstChild==perso){
                degat()
            }
            if(axeBY<block.length-1&&block[axeBY+1].children[axeBX].className=='cassable'){
                block[axeBY+1].children[axeBX].className='vide'
            }
            if(axeBY>0&&block[axeBY-1].children[axeBX].className=='cassable'){
                block[axeBY-1].children[axeBX].className='vide'
            }
            if(axeBX>0&&block[axeBY].children[axeBX-1].className=='cassable'){
                block[axeBY].children[axeBX-1].className='vide'
            }
            if(axeBX<block[axeBY].children.length-1&&block[axeBY].children[axeBX+1].className=='cassable'){
                block[axeBY].children[axeBX+1].className='vide'
            }
            if(axeBY<block.length-1&&block[axeBY+1].children[axeBX].firstChild==perso){
                degat()
            }
            if(axeBY>0&&block[axeBY-1].children[axeBX].firstChild==perso){
                degat()
            }
            if(axeBX>0&&block[axeBY].children[axeBX-1].firstChild==perso){
                degat()
            }
            if(axeBX<block[axeBY].children.length-1&&block[axeBY].children[axeBX+1].firstChild==perso){
                degat()
            }
            bombe.remove()
        },1000)
    }
}
function degat(){
        coeur-=0.5
        countc.textContent=coeur
        if(coeur<=0){
            alert('vous avez perdu')
            perso.src='img/death.png'
            btn.style.display='block'
            perdu=true
        }
}
btn.addEventListener('click',()=>{
    location.reload()
})
function Tire(direction) {
    let range=2
    let countt=0
    let axeTX=axeX
    let axeTY=axeY
    if(direction=='down'){
        const interval = setInterval(function (){
            if(countt<range){
                if(axeTY<block.length-1&&block[axeTY+1].children[axeTX].firstChild==null&&block[axeTY+1].children[axeTX].classList.contains('vide')&&perdu==false){
                    if(countt==0){
                        block[axeTY+1].children[axeTX].appendChild(tear)
                        axeTY++
                        countt++
                    }
                    else{
                        block[axeTY].children[axeTX].lastChild.remove()
                        axeTY++
                        block[axeTY].children[axeTX].appendChild(tear)
                        countt++   
                    }
                     
                }
            }
            else{
                block[axeTY].children[axeTX].firstChild.remove()
                clearInterval(interval)
            }
        },1000)
    }
    if(direction=='up'){
        const interval = setInterval(function (){
            if(countt<range){
                if(axeTY>0&&block[axeTY-1].children[axeTX].firstChild==null&&block[axeTY-1].children[axeTX].classList.contains('vide')&&perdu==false){
                    if(countt==0){
                        block[axeTY-1].children[axeTX].appendChild(tear)
                        axeTY--
                        countt++
                    }
                    else{
                        block[axeTY].children[axeTX].lastChild.remove()
                        axeTY--
                        block[axeTY].children[axeTX].appendChild(tear)
                        countt++   
                    }
                }
            }
            else{
                block[axeTY].children[axeTX].firstChild.remove()
                clearInterval(interval)
            }
        },1000)
    }
    if(direction=='left'){
        const interval = setInterval(function (){
            if(countt<range){
                if(axeTX>0&&block[axeTY].children[axeTX-1].firstChild==null&&block[axeTY].children[axeTX-1].classList.contains('vide')&&perdu==false){
                    if(countt==0){
                        block[axeTY].children[axeTX-1].appendChild(tear)
                        axeTX--
                        countt++
                    }
                    else{
                        block[axeTY].children[axeTX].lastChild.remove()
                        axeTX--
                        block[axeTY].children[axeTX].appendChild(tear)
                        countt++   
                    }
                     
                }
            }
            else{
                block[axeTY].children[axeTX].firstChild.remove()
                clearInterval(interval)
            }
        },1000)
    }
    if(direction=='rigth'){
        const interval = setInterval(function (){
            if(countt<range){
                if(axeTX>0&&block[axeTY].children[axeTX+1].firstChild==null&&block[axeTY].children[axeTX+1].classList.contains('vide')&&perdu==false){
                    if(countt==0){
                        block[axeTY].children[axeTX+1].appendChild(tear)
                        axeTX++
                        countt++
                    }
                    else{
                        block[axeTY].children[axeTX].lastChild.remove()
                        axeTX++
                        block[axeTY].children[axeTX].appendChild(tear)
                        countt++   
                    }
                     
                }
            }
            else{
                block[axeTY].children[axeTX].firstChild.remove()
                clearInterval(interval)
            }
        },1000)
    }
}