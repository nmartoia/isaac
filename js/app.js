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
let countb=document.querySelector('#bombe')
countc.textContent=coeur
countb.textContent=bombes
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
        if(axeY1<block.length-1&&block[axeY1+1].children[axeX1].firstChild==null&&block[axeY1+1].children[axeX1].classList.contains('vide')&&perdu==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }    
    }
    else if(e.code=='ArrowUp'){
        if(axeY1>0&&block[axeY1-1].children[axeX1].firstChild==null&&block[axeY1-1].children[axeX1].classList.contains('vide')&&perdu==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeY1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }   
    else if(e.code=='ArrowLeft'){
        if(axeX1>0&&block[axeY1].children[axeX1-1].firstChild==null&&block[axeY1].children[axeX1-1].classList.contains('vide')&&perdu==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1--
            block[axeY1].children[axeX1].appendChild(perso2)
        }
    }
    else if(e.code=='ArrowRight'){
        if(axeX1<block[axeY1].children.length-1&&block[axeY1].children[axeX1+1].firstChild==null&&block[axeY1].children[axeX1+1].classList.contains('vide')&&perdu==false){
            block[axeY1].children[axeX1].removeChild(block[axeY1].children[axeX1].firstChild)
            axeX1++
            block[axeY1].children[axeX1].appendChild(perso2)
        }
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
        span.textContent=coeur
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