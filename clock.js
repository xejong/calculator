const clock = document.querySelector(".clock");

function getTime() {
    const date = new Date();
    const nowYear = date.getFullYear();
    const nowMon = date.getMonth();
    const nowDay = date.getDay();
    const nowHours = date.getHours();
    const nowMin = date.getMinutes();
    const nowSec = date.getSeconds();

    clock.innerHTML = `${nowYear}년 ${nowMon}월 ${nowDay}일<br>${nowHours<12?`오전 `:`오후 `}${nowHours < 10 ? `0${nowHours}` : nowHours}:${nowMin < 10 ? `0${nowMin}` : nowMin}:${nowSec < 10 ? `0${nowSec}` : nowSec}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();