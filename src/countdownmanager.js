class CountdownManager {
    constructor() {
        this._dragging = false;
        this.clickPoint;
        this.defaultTranslate = 0;
        this.draggingNode;
        this._numbersHeight = 60;
        this._extraGap = -5;
        this._interval;
        this._initNodes();
        this._initListeners();
    }

    _initNodes() {
        this._mainNumbers = document.querySelectorAll(".cd-main-numbers .number");
        this._cdCols = document.querySelectorAll(".cd-columns .col");
        this._hourTensCol = document.querySelector(".cd-columns .hour .col:nth-child(1)");
        this._hourOnesCol = document.querySelector(".cd-columns .hour .col:nth-child(2)");
        this._minuteTensCol = document.querySelector(".cd-columns .minute .col:nth-child(1)");
        this._minuteOnesCol = document.querySelector(".cd-columns .minute .col:nth-child(2)");
        this._secondTensCol = document.querySelector(".cd-columns .second .col:nth-child(1)");
        this._secondOnesCol = document.querySelector(".cd-columns .second .col:nth-child(2)");
        this.cdControls = document.querySelector(".cd-controls");
    }

    _initListeners() { 
        this._cdCols.forEach(column => {
            column.addEventListener("mousedown", e => {
                if (e.target === column)
                    this._mouseDownHandler(e);
            })
        });

        document.addEventListener("mouseup", e => {
            if (!this._dragging) return;
            this._mouseUpHandler(e);
        })

        document.addEventListener("mousemove", e => {
            this._mouseMoveHandler(e);
        })

        document.querySelector(".cd-controls .cd-start").addEventListener("click", e => {
            this.start();
        });

        document.querySelector(".cd-controls .cd-stop").addEventListener("click", e => {
            this.stop();
        });
    }

    _mouseDownHandler(e) {
        this.clickPoint = {
            x: e.screenX,
            y: e.screenY,
        }
        this._dragging = true;
        this.draggingNode = e.target;

        if (this.draggingNode.style.transform === "") {
            this.defaultTranslate = 0;
        } else {
            this.defaultTranslate = this._convertNumToTranslate(this._getNumberFromColumn(this.draggingNode));
        }
    }

    _mouseMoveHandler(e) {
        // only handle if Dragging is enabled
        if (!this._dragging) return;

        // calculate drag amounts
        const dragAmount = e.screenY - this.clickPoint.y;
        let finalTranslate = this.defaultTranslate + dragAmount;

        // lock at 0
        if (finalTranslate > 0) finalTranslate = 0;

        // lock at maximum number
        const amountOfNumbers = this.draggingNode.children.length - 1;
        const maximumTranslate = -amountOfNumbers * this._numbersHeight - this._extraGap;
        if (finalTranslate < maximumTranslate) finalTranslate = maximumTranslate;

        this.draggingNode.style.transform = `translateY(${finalTranslate}px)`;
        this._updateNumberOnDraggingNode(false);
    }

    _mouseUpHandler(e) {
        // disable dragging
        this._dragging = false;
        // amount of numbers on each column (hour-tens = 3, hour-ones = 10 etc)
        this._updateNumberOnDraggingNode(true);
        this._getCurrentTime();
        if(this._timeData.hour > 23)
            this._goToTimeFast(23, this._timeData.minute, this._timeData.second);
    }

    _updateNumberOnDraggingNode(updateCol = true) {
        const number = this._getNumberFromColumn(this.draggingNode);

        // change transform to closest with transition
        if (updateCol)
            this._translateToNumber(number);

        // change main number
        this._changeNumber(this.draggingNode, number);
    }

    _translateToNumber(number) {
        this._translateColumnToNumber(this.draggingNode, number)
    }

    _translateColumnToNumber(col, number) {
        const translate = this._convertNumToTranslate(number);
        col.style.transition = `0.3s`;
        col.style.transform = `translateY(${translate}px)`;
        setTimeout(() => {
            col.style.transition = `none`;
        }, 350);
    }

    _changeNumber(column, number) {
        const alternateMainNumber = document.querySelector(`.cd-main-numbers .${column.classList[1].replace("col-", "")}`);
        alternateMainNumber.innerHTML = number;
    }

    _getNumberFromTranslateString(string) {
        return string.replace("translateY(", "").replace("px)", "");
    }

    _getClosest(number, array) {
        let closest = array[0];
        let diff = 1000000000000;
        array.forEach(el => {
            if (Math.abs(el - number) < diff) {
                closest = el;
                diff = Math.abs(el - number);
            }
        })
        return closest;
    }

    _convertNumToTranslate(num) {
        return -num * this._numbersHeight + this._extraGap;
    }

    _convertTranslateToNum(translate) {
        return (translate - this._extraGap) / -60;
    }

    _getNumberFromColumn(col) {
        const translate = this._getNumberFromTranslateString(col.style.transform);
        const amountOfNumbers = col.children.length;
        let arrayOfTranslates = [];
        for (let i = 0; i < amountOfNumbers; i++) {
            arrayOfTranslates.push(this._numbersHeight * -i - this._extraGap);
        }

        // get closest translate after mouse up
        const closestTranslate = this._getClosest(translate, arrayOfTranslates);

        return ((closestTranslate + this._extraGap) / -60);
    }

    _getCurrentTime() {
        const hourTen = parseInt(this._mainNumbers[0].innerHTML);
        const hourOne = parseInt(this._mainNumbers[1].innerHTML);
        const minuteTen = parseInt(this._mainNumbers[2].innerHTML);
        const minuteOne = parseInt(this._mainNumbers[3].innerHTML);
        const secondTen = parseInt(this._mainNumbers[4].innerHTML);
        const secondOne = parseInt(this._mainNumbers[5].innerHTML);

        const hour = hourTen * 10 + hourOne;
        const minute = minuteTen * 10 + minuteOne;
        const second = secondTen * 10 + secondOne;

        this._timeData = {
            hourTen, hourOne, hour,
            minuteTen, minuteOne, minute,
            secondTen, secondOne, second,
        }

        return this._timeData;
    }

    _translateToColumnAndChangeNumber(col, number) {
        this._translateColumnToNumber(col, number);
        setTimeout(() => {
            this._changeNumber(col, number);
        }, 100);
    }

    _goToTimeFast(hour, minute, second) {
        const hourTen = Math.floor(hour / 10);
        const hourOne = Math.round((hour / 10 - Math.floor(hour / 10)) * 10);

        const minuteTen = Math.floor(minute / 10);
        const minuteOne = Math.round((minute / 10 - Math.floor(minute / 10)) * 10);

        const secondTen = Math.floor(second / 10);
        const secondOne = Math.round((second / 10 - Math.floor(second / 10)) * 10);
        this._goToTime(hourTen, hourOne, minuteTen, minuteOne, secondTen, secondOne);
    }

    _goToTime(hourTen, hourOne, minuteTen, minuteOne, secondTen, secondOne) {
        this._translateToColumnAndChangeNumber(this._hourTensCol, hourTen);
        this._translateToColumnAndChangeNumber(this._hourOnesCol, hourOne);
        this._translateToColumnAndChangeNumber(this._minuteTensCol, minuteTen);
        this._translateToColumnAndChangeNumber(this._minuteOnesCol, minuteOne);
        this._translateToColumnAndChangeNumber(this._secondTensCol, secondTen);
        this._translateToColumnAndChangeNumber(this._secondOnesCol, secondOne);
    }

    _getTotalSeconds() {
        let hour = this._timeData.hour;
        let minute = this._timeData.minute;
        let second = this._timeData.second;

        return (hour * 60 * 60) + (minute * 60) + (second);
    }

    start() {
        this._getCurrentTime();
        if(this._getTotalSeconds() === 0) return;
        this.cdControls.dataset.status = "started";

        this._interval = setInterval(() => {
            this._getCurrentTime();
            let totalSecond = this._getTotalSeconds();
            if (totalSecond > 0) {
                totalSecond--;
            } else {
                this._cdFinished();
            }

            
            let date = new Date(null);
            date.setSeconds(totalSecond);
            let hhmmssFormat = date.toISOString().substring(11, 19);

            let hour = hhmmssFormat.split(":")[0];
            let minute = hhmmssFormat.split(":")[1];
            let second = hhmmssFormat.split(":")[2];
            const hourTen = Math.floor(hour / 10);
            const hourOne = Math.round((hour / 10 - Math.floor(hour / 10)) * 10);
            const minuteTen = Math.floor(minute / 10);
            const minuteOne = Math.round((minute / 10 - Math.floor(minute / 10)) * 10);
            const secondTen = Math.floor(second / 10);
            const secondOne = Math.round((second / 10 - Math.floor(second / 10)) * 10);

            this._timeData = {
                hourTen, hourOne, hour,
                minuteTen, minuteOne, minute,
                secondTen, secondOne, second,
            }

            this._goToTimeFast(this._timeData.hour, this._timeData.minute, this._timeData.second);

        }, 1000);
    }

    stop() {
        clearInterval(this._interval);
        this.cdControls.dataset.status = "paused";
    }

    _cdFinished() {
        clearInterval(this._interval);
        this.cdControls.dataset.status = "paused";
    }
}

const countdownManager = new CountdownManager();