<template>
   <div class="remainingTimeContainer">
    <span id="remainingTime">24:00:00</span>
   </div>
</template>

<script>

export default {
mounted(){
var twentyFourHours = 24 * 60 * 60;
var display = document.getElementById('remainingTime');


function Timer(duration, display) 
{
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt((timer /3600)%24, 10)
        minutes = parseInt((timer / 60)%60, 10)
        seconds = parseInt(timer % 60, 10);

				hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#remainingTime').innerHTML = hours +":"+minutes + ":" + seconds

				--timer;
    }, 1000);
}

Timer(twentyFourHours, display);



}
}
</script>

<style scoped>
.remainingTimeContainer{
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
}
#remainingTime{
    border: 1px solid #25d366;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    
}
</style>