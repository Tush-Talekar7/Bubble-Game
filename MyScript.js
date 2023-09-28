var sc=0;
var k=0;

function startGame()
{
    document.querySelector('.btn').style.display="none";
    document.querySelector('#pbtm').style.display="flex";
    makeBubble();
    Timer();
    makeHit();
}
function makeBubble()
{
    let cnt="";

    for(let i=1; i<=192; i++)
    {
        var h=Math.floor(Math.random()*10);
        cnt+=`<div id="bubble">${h}</div>`
    }

    document.querySelector('#pbtm').innerHTML=cnt;
}

function makeHit()
{
    k=Math.floor(Math.random()*10);
    document.querySelector('.hitNo').textContent=k;

}

function incScore()
{
    
     sc+=10;

    document.querySelector('.score').textContent=sc;

}

document.querySelector('#pbtm').addEventListener("click",
function(details){
    let p=Number(details.target.textContent);
    if(p === k)
    {
        incScore();
        makeBubble();
        makeHit();
    }
    
});

function Timer()
{
    let t=60;
    var j=setInterval(function(){
        if(t>0)
        {
          t--;
          var k=document.querySelector('.timeInt').textContent=t;
        }
        else
        {
            clearInterval(t);
           
            document.querySelector('#pbtm').style.flexDirection="column";
            document.querySelector('#pbtm').innerHTML=`<h1>Game Over</h1> <br> <h2> Your Score is ${sc}`;
            document.querySelector('.score').textContent=0;
            document.querySelector('.hitNo').textContent=0;
        }

    },1000);
}




