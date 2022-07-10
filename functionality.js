var num= 0
var d, u, collision
var tu= 0
var td= 0
var high_score=[]
function up(){
            var obj=document.getElementById("fish")
            var pos= obj.offsetTop
            if(pos<-50){
                obj.style.top="100vh"
            }
            else{
                obj.style.top=(pos-tu)+"px"
            }
            }
function down(){
            var obj=document.getElementById("fish")
            var pos= obj.offsetTop
            if(pos>window.innerHeight){
                obj.style.top="-50px"
            }
            else{
                obj.style.top=(pos+td)+"px"
            }
            }
let checkVibrate =
window .navigator && window.navigator.vibrate;
function vibrate (x) {
if(checkVibrate)navigator.vibrate(x);
}
//________________//

function openGame(from){
vibrate("50")
    document.querySelectorAll(".score").forEach(self=>{
            self.innerHTML=0
    })
    document.getElementById(from).style.display='none'
    document.getElementById('game').style.display='flex'
    collision= setInterval(checkCollision,10)
    document.onkeydown=function(e){
        switch(e.keyCode){
                case 38:
                    document.getElementById("fish").style.transform="rotateZ(-10deg)"
                    td=0
                    clearInterval(u)
                    clearInterval(d)
                    tu++
                    u= setInterval(up,10)
                    break;
                case 39:
                    document.getElementById("fish").style.transform="rotateZ(0deg)"
                    td=0
                    tu=0
                    clearInterval(u)
                    clearInterval(d)
                    break;
                case 40:
                    document.getElementById("fish").style.transform="rotateZ(10deg)"
                    tu=0
                    td++
                    clearInterval(u)
                    clearInterval(d)
                    d= setInterval(down, 10)
            }
    }
}
function open_close(y,x){
if(y=="over"){
vibrate("200")
}
else{
vibrate("50")
}
    document.getElementById(y).style.display='flex'
    document.getElementById(x).style.display="none"
    document.onkeydown=function(){}
}
function checkCollision(){
    var pipe=document.getElementById("pipe").offsetLeft
    //console.log(pipe)
    var fish= document.getElementById("fish").offsetTop 
    //console.log(fish)
    var hole=document.getElementById("hole").offsetTop
    //console.log(hole)
    if(pipe<=60){
    if(fish>hole && fish+50<hole+100){
        
    }
    else{
    //alert("going")
    clearInterval(collision)
    high_score.push(parseInt(document.getElementsByClassName("score")[1].innerHTML))
    document.querySelectorAll(".high_score").forEach(self=>{
            self.innerHTML=Math.max(...high_score)
    })
    
    document.getElementById("fish").style.top="50vh"
    document.getElementById("str").click()
    open_close("over","game")
    }
    }
}
window.onload=function(){
document.getElementById("pipe").addEventListener("animationiteration",function(){
                document.getElementById("hole").style.top=Math.random()*80+"vh"
            document.querySelectorAll(".score").forEach(self=>{
            self.innerHTML++
    })
/*    if(document.getElementsByClassName("score")[0].innerHTML>document.getElementsByClassName("high_score")[0].innerHTML){
        document.querySelectorAll(".high_score").forEach(self=>{
            self.innerHTML = document.getElementsByClassName("score")[0].innerHTML
    })
    }*/
            })
            document.getElementById("up").addEventListener("click",function(){
            document.getElementById("fish").style.transform="rotateZ(-10deg)"
            td=0
            clearInterval(u)
            clearInterval(d)
            tu++
            u= setInterval(up,10)
            })
            document.getElementById("down").addEventListener("click",function(){
            document.getElementById("fish").style.transform="rotateZ(10deg)"
            tu=0
            td++
            clearInterval(u)
            clearInterval(d)
            d= setInterval(down, 10)
           // clearInterval(u)
           // var d= setInterval(down,10)
            })
            document.getElementById("str").addEventListener("click",function(){
            document.getElementById("fish").style.transform="rotateZ(0deg)"
            td=0
            tu=0
            clearInterval(u)
            clearInterval(d)
            })
        document.onkeydown=function(){}
}