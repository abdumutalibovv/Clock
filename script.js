setInterval(() => {
    let timeHour = new Date();

    // let hours = data.getHours();
    // let minutes = data.getMinutes();
    // let seconds = data.getSeconds();

    document.querySelector(".hours").textContent = timeHour.getHours();
    document.querySelector(".minutes").textContent = timeHour.getMinutes();
    document.querySelector(".seconds").textContent = timeHour.getSeconds();
    // if (hours > 12) {
    //     hours = hours - 12;
    // } if (hours < 10) {
    //     hours = "0" + hours;
    // } if (minutes < 10) {
    //     minutes = "0" + minutes;
    // } if (seconds < 10) {
    //     seconds = "0" + seconds;
    // }
});