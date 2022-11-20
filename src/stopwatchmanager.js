class StopWatchManager {
    constructor() {
        this.stopwatchNode = document.querySelector("#stopwatch-page .stopwatch");
        this.stopwatchRadius = 95;
        this.stopwatchHandNode = document.querySelector("#stopwatch-page .stopwatch-hand");
        this.timerNode = document.querySelector("#stopwatch-page .stopwatch-timer");
        this.secondNodes = [];
        this.startDate = undefined;
        this._stopDate = undefined;
        this._timer = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            millis: 0,
            totalMillis: 0,
            formatted: "00:00:00:00",
        };
        this._interval;
        this._initSecondNodes();
        this._initListeners();
    }

    _initSecondNodes() {

        for (let i = 0; i < 120; i++) {
            const node = document.createElement("span");
            node.classList.add("half-sec");
            const posX = Math.cos(3 * (Math.PI/180) * i) * this.stopwatchRadius + this.stopwatchRadius;
            const posY = Math.sin(3 * (Math.PI/180) * i) * this.stopwatchRadius + this.stopwatchRadius;
            const angle = 360 / 120 * i + 90;
            node.style.left = posX + 15 + "px";
            node.style.top = posY + 10 + "px";
            if(i % 5 == 0) {
                node.style.transform = `rotate(${angle}deg) scale(1.5, 1.8)`;
            } else {
                node.style.transform = `rotate(${angle}deg)`;
            }
            this.stopwatchNode.append(node);
            this.secondNodes.push(node);
        }
    }

    _pointHandTo(secondToPoint) {
        const angle = 360 / 60 * secondToPoint;
        this.stopwatchHandNode.style.transform = `rotate(${angle}deg)`;
    }

    _pointHand() {
        const angle = 360 / 60 * this._timer.totalMillis / 1000;
        this.stopwatchHandNode.style.transform = `rotate(${angle}deg)`;
    }

    _runInterval() {
        this._interval = setInterval(() => {
            this._parseTimer();
        }, 10);
        this._runShapeInterval();
        this._runTextInterval();
    }

    _runShapeInterval() {
        this._shapeInterval = setInterval(() => {
            this._pointHand();
        }, 125);
    }

    _runTextInterval() {
        this._textInterval = setInterval(() => {
            this.timerNode.innerHTML = this._timer.formatted;
        }, 10);
    }

    _parseTimer() {
        const totalSeconds = new Date() - this.startDate;
        // console.log(this.startDate);
        // return;
        const dt = new Date(null);
        dt.setTime(totalSeconds);
        const isoString = dt.toISOString().substring(11, 22);
        const infos = isoString.split(":");
        this._timer = {
            hours: infos[0],
            minutes: infos[1],
            seconds: infos[2].split(".")[0],
            millis: infos[2].split(".")[1],
            totalMillis: totalSeconds,
            formatted: isoString,
        }
    }

    _stopInterval() {
        clearInterval(this._interval);
        clearInterval(this._shapeInterval);
        clearInterval(this._textInterval);
    }

    play() {
        console.log(this._stopDate);
        if(this._stopDate !== undefined) {
            const currentTime = new Date();
            const pausedTime = currentTime.getTime() - this._stopDate.getTime();
            this.startDate = new Date(pausedTime + this.startDate.getTime());
            console.log("continue");  
        } else {
            this.startDate = new Date();
        }
        this._runInterval();
        document.querySelector(".stopwatch-controls").dataset.status = "started";
        document.querySelector(".stopwatch-controls").dataset.needReset = true;
    }

    pause() {
        this._stopInterval();
        this._stopDate = new Date();
        document.querySelector(".stopwatch-controls").dataset.status = "paused";
    }

    reset() {
        this.pause();

        this.startDate = undefined;
        this._stopDate = undefined;
        this._timer = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            millis: 0,
            totalMillis: 0,
            formatted: "00:00:00:00",
        };

        document.querySelector(".stopwatch-controls").dataset.needReset = "false";
        this.timerNode.innerHTML = this._timer.formatted;
        this.stopwatchHandNode.classList.add("reset-animation");
        setTimeout(() => {
            this.stopwatchHandNode.classList.remove("reset-animation");
        }, 1000);
        this._pointHandTo(0);
    }

    _initListeners() {
        document.querySelector(".stopwatch-controls .fa-play").addEventListener("click", e => {
            this.play();
        });
        document.querySelector(".stopwatch-controls .fa-pause").addEventListener("click", e => {
            this.pause();
        });
        document.querySelector(".stopwatch-controls .fa-rotate-right").addEventListener("click", e => {
            this.reset();
        });
    }
}

const stopWatchManager = new StopWatchManager();