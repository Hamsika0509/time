
setInterval(tim,1000);

function h() {        
       document.getElementById("box2").style.backgroundColor = "lightgreen";
  }
  function a() {        
   
    document.getElementById("box2").style.backgroundColor = "black";
  }
  function ms() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("clock").style.backgroundColor = "#"+randomColor;
  }
  function mm() {
   
    document.getElementById("clock").style.backgroundColor = "violet";
  }
function tim(){
let cD = new Date();
let k=cD.getHours();
if(k<10)
k="0"+k;
let l=cD.getMinutes();
let m=cD.getSeconds();
if(l==0&&m==0){         
              
     ms();
}
else{
mm();
}
if(l<10)
l="0"+l;
if(m==00||m==1)
{h();
    if(m<10)
    m="0"+m;
let tie = k+ ":" + l + ":" + m;
document.getElementById("box2").innerHTML=tie;
}
else
{ a();
if(m<10)
    m="0"+m;
let tie = k+ ":" + l + ":" + m ;
document.getElementById("box2").innerHTML=tie;
}
}




tim();

