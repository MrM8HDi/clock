class ClockManager {
    hours;
    minutes;
    seconds;
    dateNode;
    timeNode;
    ampmNode;
    timezoneNode;
    currentDate;
    constructor() {
        this.hours = document.querySelector('.hours');
        this.minutes = document.querySelector('.minutes');
        this.seconds = document.querySelector('.seconds');
        this.dateNode = document.querySelector(".clock-text.clock-date");
        this.weekNodes = document.querySelectorAll(".weekdays .weekday");
        this.timeNode = document.querySelector(".clock-text.clock-hour");
        this.ampmNode = document.querySelector(".clock-hour-text .ampm");
        this.timezoneNode = document.querySelector(".clock-texts .timezone");
        this.currentDate = new Date();
    }

    clock = () => {
        this.currentDate = new Date();
        let h = (this.currentDate.getHours() % 12) + this.currentDate.getMinutes() / 59; // 22 % 12 = 10pm
        let m = this.currentDate.getMinutes(); // 0 - 59
        let s = this.currentDate.getSeconds(); // 0 - 59

        h *= 30; // 12 * 30 = 360deg
        m *= 6;
        s *= 6; // 60 * 6 = 360deg

        this.rotation(this.hours, h);
        this.rotation(this.minutes, m);
        this.rotation(this.seconds, s);

        this.updateTexts();

        // call every second
        setTimeout(this.clock, 1000);
    }

    rotation(target, val) {
        target.style.transform = `rotate(${val}deg)`;
    }

    updateTexts() {
        this.updateDate();
        this.updateWeek();
        this.updateHour();
        this.updateTimezone();
    }

    updateDate() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[this.currentDate.getMonth()];
        const monthDay = this.currentDate.getDate();
        const year = this.currentDate.getFullYear();
        const dateStr = `${monthDay} ${monthName}, ${year}`;

        this.dateNode.innerHTML = dateStr;
    }

    updateWeek() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = days[this.currentDate.getDay()];

        this.weekNodes.forEach(weekNode => {
            if(weekNode.classList.contains(dayName.toLowerCase())) {
                weekNode.classList.add("active");
            }
        })
    }

    updateHour() {
        let hour = this.currentDate.getHours().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        const minute = this.currentDate.getMinutes().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        const second = this.currentDate.getSeconds().toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour > 12 ? hour - 12 : hour;

        const timeStr = `${hour}:${minute}:${second}`;

        this.timeNode.innerHTML = timeStr;
        this.ampmNode.innerHTML = ampm;
    }

    updateTimezone() {
        const str = this.currentDate.toString().split(" ").splice(5, 4).join(" ").replace("(", "").replace(")", "");
        this.timezoneNode.innerHTML = str;
    }
}

let clockManager = new ClockManager();
clockManager.clock();