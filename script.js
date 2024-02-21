let c1=[-1,-3];
let j=2;
let time=[];
let curr=[];
time[0]=parseInt(0,10)
newcall=(ids)=>{ 

  location.reload();
}
uncall=(p,ids,s1)=>{
  console.log("uncalling")
  p.setAttribute("id",ids);
  let ind=p.getAttribute("value");//uncalled tra
  s1.currentTime=0;
  s1.pause();
  s1.currentTime=0;
  curr.pop();
  index--;
  untranscall(ind);
 // console.log(index);
 console.log("uncalled");
}
index=0
call=(id)=>{       //uncalling
  let p=document.getElementById(id);
  let s=p.getAttribute("value");
  p.setAttribute("id","clicked");
  n=parseInt(s,10)
  s1=sounds[n]
  let ids=id;
  s1.play();
  curr.push("1");
  index++;
  transcall(n);
  if(index>1){
           uncall(x1,x2,x3);
            x1=p;
            x2=ids;
            x3=s1;
          }
  else{
   x1=p;
   x2=ids;
   x3=s1;
   }
};
let audio=document.getElementsByClassName("audi");
sounds=[];
for(let j=0;j<audio.length;j++){ 
    sounds.push(audio[j]);
}
let array=document.getElementsByClassName("ayas");
let ayahsarray=[];
for(let i=0;i<array.length;i++){ 
    ayahsarray.push(array[i]);
};
ayahsarray.forEach(element => {
   element.addEventListener("click",()=>{
     let id=element.getAttribute("id"); 
     c1.push(parseInt(element.getAttribute("value"),10))
     i=j-1;
     console.log(c1)
     if(c1[j]!=c1[i])
     {call(id);}
    else
    {newcall(id);}
    j=j+1;
   }
   )
});
let bi=document.getElementById("bi");
  bi.innerText="Bismillahi Rahmani Raheem";
////loop setting
loopval=0;
let loop=document.getElementById("loopbox");
loop.onclick=()=>{
    if(loopval%2==0){
    sounds.forEach(every=> {
    every.loop=true;
    })
    if(loopval%2==0&&time.length>1)
     {
      alert("Cannot use loop and autoplay at once")
    }
    }else{
    sounds.forEach(every=> {
    every.loop=false;
    });
    };
    loopval++;
};
let work=document.getElementById("workspace");
settingval=0
let setting=document.getElementById("settingsicon");
setting.onclick=()=>{
    if(settingval%2==0){
      work.setAttribute("style","display:block");
      autoclose();
      console.log("call");
    }
    else{
      work.setAttribute("style","display:none");
    };
    settingval++;
  }
autoclose=()=>{
  setTimeout(()=>{
    work.setAttribute("style","display:none")},1000000)
};
Transval=0;
let nedar=[];
let Tr=document.getElementsByClassName("E-ayas");
let tb=document.getElementById("Translationbox");
tb.onclick=()=>{
    if(Transval%2==0){
       nedar.push(1);
    }  
    else{
      nedar.pop(1);
    };
    Transval++;
}; 
transcall=(ind)=>{
  if(nedar.length==1)
  {
  Tr[ind].setAttribute("style","display:block");
  }
};
untranscall=(ind)=>{
  Tr[ind].setAttribute("style","display:none");
};
//Autoplay
aplay=0;
let ap=document.getElementById("Autoplaybox");
ap.onclick=()=>{
  if(aplay%2==0&&curr.length==0){
    sounds.forEach(tt =>
    time.push(tt.duration));
    autoplay();
    }
  else{
    location.reload();
      }
  console.log(time);
  aplay++;
};
//autoplay
let sa=0;
ij=parseInt(1,10)
autoplay=()=>{
  setTimeout(()=>
  {
    if(sa<array.length+1)
    {
     if(sa<array.length)
        call(`${array[sa].getAttribute("id")}`);
        sa++;
    autoplay();}
    else{
      sa=0;
      autoplay();
    }
},ij+time[sa]*1000);
console.log(time[sa])
};
//API code


