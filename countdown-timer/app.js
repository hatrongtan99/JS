const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const giveAway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');
// deedline time
const deedlineYear = new Date().getFullYear();
const deedlineMonth = new Date().getMonth();
const deedlineDate = new Date().getDate();

const deedlineTime = new Date(deedlineYear, 
    deedlineMonth, deedlineDate + 10, 8, 30);

const dDay = deedlineTime.getDay();
const dDate = deedlineTime.getDate();
const dMonth = deedlineTime.getMonth();
const dYear = deedlineTime.getFullYear()
const dHour = deedlineTime.getHours();
const dMinutes = deedlineTime.getMinutes();
    
giveAway.innerHTML = `Give away Ends On ${dayInWeek[dDay]}, ${dDate} ${month[dMonth]} ${dYear}, ${dHour}:${dMinutes} am`
    


function getRemainingTime() {
    // current time
const currentTime = new Date().getTime();
const t = deedlineTime.getTime() - currentTime
const days = Math.floor((t / 1000) / ( 60 * 60 * 24 ));
const hours = Math.floor((t / 1000) / (60 * 60 ) % 24 );
const minutes = Math.floor((t / 1000) / 60 % 60 );
const seconds = Math.floor((t / 1000) % 60 );

const values = [days, hours, minutes, seconds];
items.forEach(function(item, index) {
    if (values[index] < 10) {
    item.innerHTML = `0${values[index]}`;
    } else { 
        item.innerHTML = values[index];
    }
    if (t < 0 ) {
        delete setInterval;
    }
})
}; 

getRemainingTime()
setInterval(getRemainingTime, 1000);