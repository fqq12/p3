let place=['电脑','手机','电视','小米手机'];
let index=0;
setInterval(function () {
    index++;
    if(index>2){index=0}
    document.querySelector('.container .top .tp .seacher input').placeholder=place[index]
},2000)
let c=['苹果手机','小米手机','苹果电脑','小米电脑','苹果电视','小米电视']
let dom=document.querySelector('.container .top .tp .seacher input')
dom.oninput=function () {
    document.querySelector('.sou').innerHTML=''
    let v=dom.value
    c.forEach((value, index)=>{
       if(c[index].includes(v)==true){
           document.querySelector('.sou').innerHTML=document.querySelector('.sou').innerHTML+`<p>${c[index]}</p>`
           document.querySelector('.sou').style.display='block'
       }
    })
}
dom.onblur=function () {
    document.querySelector('.sou').style.display='none'
}
let no=1
document.querySelector('#y').onclick=function () {
    document.querySelector(`#d li:nth-of-type(${no}) `).className=''
    if(no>3) no=1
    else
no++;
document.querySelector('.content .center .c').style.background=`url("3.${no}.jpg")`

    document.querySelector(`#d li:nth-of-type(${no}) `).className='act'
}
document.querySelector('#z').onclick=function () {
    document.querySelector(`#d li:nth-of-type(${no}) `).className=''
    if(no<=1) no=4
    else
    no--;
    document.querySelector('.content .center .c').style.background=`url("3.${no}.jpg")`
    document.querySelector(`#d li:nth-of-type(${no}) `).className='act'
}
let time=setInterval(()=>{document.querySelector('#y').click()},2000)
setInterval(()=>{
    let t=document.querySelector('.content .c1 .time span:nth-of-type(3)')
    if(t.innerHTML==0){t.innerHTML=59}
        else
    t.innerHTML=t.innerHTML-1
},1000)
document.querySelector('.content .center .c').onmouseover=function () {
    clearInterval(time)
}
document.querySelector('.content .center .c').onmouseout=function () {
    time=setInterval(()=>{document.querySelector('#y').click()},2000)
}

window.onscroll=function () {
if(document.documentElement.scrollTop>=660)
{document.querySelector('.tou').style.top='0px'
    document.querySelector('#dao').style.position='fixed'
    document.querySelector('#dao').style.top='100px'
}
    else
{document.querySelector('#dao').style.position='absolute'
    document.querySelector('#dao').style.top='670px'
    document.querySelector('.tou').style.top='-50px'}

}
document.querySelector('#dao li:nth-of-type(1)').onclick=function () {
   document.documentElement.scrollTo(0,650);
}
document.querySelector('#dao li:nth-of-type(2)').onclick=function () {
    document.documentElement.scrollTo(0,890);
}
document.querySelector('#dao li:nth-of-type(3)').onclick=function () {
    document.documentElement.scrollTo(0,1454);
}
document.querySelector('#d').onclick=function (e) {
  let a=e.target.getAttribute('d')
    no=a
    document.querySelector(`#d li:nth-of-type(1) `).className=''
    document.querySelector(`#d li:nth-of-type(2) `).className=''
    document.querySelector(`#d li:nth-of-type(3) `).className=''
    document.querySelector(`#d li:nth-of-type(4) `).className=''
    document.querySelector('.content .center .c').style.background=`url("3.${no}.jpg")`
    document.querySelector(`#d li:nth-of-type(${no}) `).className='act'

}