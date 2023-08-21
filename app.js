var rat1 = document.getElementById("rat1")
var rat1 = document.getElementById("rat2")
var rat1 = document.getElementById("rat3")
var rat1 = document.getElementById("rat4")
var rat1 = document.getElementById("rat5")
var rat1 = document.getElementById("rat6")
var score = document.getElementById('score')
var ad = document.getElementById("t")
var a = document.getElementById("tom")
var count =0;
setInterval(function(){
    a.play()
    var random = (Math.floor(Math.random()*6)+1)
    var rat = "rat"+random
    var ra = eval(rat)
    ra.classList.add("animate")
    setTimeout(function(){
        ra.classList.remove("animate")
    },1000)
    ra.onclick = function(){
        count++
        score.innerText = count
        ad.play()

    }
},1000)