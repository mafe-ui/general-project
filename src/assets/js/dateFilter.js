export default {
    /**
     * 获取今天日期
     * @param { String } type 返回类型 例如：yyyy-mm-dd hh:mm:ss
     * @returns 日期
     */
    getToday(type) {
        let now = new Date();
        return this.timeFormat(now, type)
    },

    /**
     * 获取某个日期的前几天/后几天的日期
     * @param { String } date 日期
     * @param { number } num  数字，表示几天（分正负数）
     * @param { String } type 返回类型 例如：yyyy-mm-dd hh:mm:ss
     * @returns 日期
     */
    getIntervalDay(date, num, type) {　　
        let dt = new Date(date);　　
        let targetday_milliseconds = dt.getTime() + 1000 * 60 * 60 * 24 * num;　　
        dt.setTime(targetday_milliseconds);　
        return this.timeFormat(dt, type);　
    },
    /**
     * 获取date的n个月前/后的今天的日期
     * @param {String} date    日期
     * @param {number} n       多少个月
     * @param {String} type
     * @returns 日期
     */
    getPreMonth(date, num, type) {
        let dt = new Date(date);
        let year = dt.getFullYear(); //年
        let month = dt.getMonth() + 1; //月
        let day = dt.getDate(); //日

        let days = new Date(year, month, 0);
        days = days.getDate(); //获取当前日期中月的天数
        let year2 = year;
        let month2 = parseInt(month) + num;
        if (month2 <= 0) {
            year2 = parseInt(year2) - 1;
            month2 = 12 + month2;
        } else if (month2 > 12) {
            year2 = parseInt(year2) + 1;
            month2 = month2 % 12;
        }
        let day2 = day;
        let days2 = new Date(year2, month2, 0);
        days2 = days2.getDate();
        if (day2 > days2) {
            day2 = days2;
        }

        let t2 = year2 + '-' + month2 + '-' + day2;
        return this.timeFormat(t2, type);　
    },
    /**
     * 获取某天的那周第一天
     * @param {String} date
     * @param {String} type
     * @returns 日期
     */
    getFirstDayOfWeek(date, type) {
        let dt = new Date(date);
        let weekday = dt.getDay() || 7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
        dt.setDate(date.getDate() - weekday + 1); //往前算（weekday-1）天，年份、月份会自动变化
        return this.timeFormat(dt, type);
    },
    /**
     * 获取本月第一天
     * @param {*} type
     * @returns 日期
     */
    getFirstDayOfMonth(type) {
        let date = new Date();
        date.setDate(1); //本月第一天
        return this.timeFormat(date, type);
    },
    //格式化日期
    timeFormat(dt, type) { //type:yyyy/mm/dd hh:mm:ss   yyyy-mm-dd 
        let date = new Date(dt);
        let year = date.getFullYear(); //年
        let month = date.getMonth() + 1; //月
        let day = date.getDate(); //日
        String(month).length < 2 ? (month = "0" + month) : month;
        String(day).length < 2 ? (day = "0" + day) : day;

        let hour = date.getHours(); //获取系统时间
        let minute = date.getMinutes(); //分
        let second = date.getSeconds(); //秒
        String(hour).length < 2 ? (hour = "0" + hour) : hour;
        String(minute).length < 2 ? (minute = "0" + minute) : minute;
        String(second).length < 2 ? (second = "0" + second) : second;

        if (type) {
            type = type.toString();
            type = type.replace(/yyyy/, year);
            type = type.replace(/mm/, month);
            type = type.replace(/dd/, day);
            type = type.replace(/hh/, hour);
            type = type.replace(/mm/, minute);
            type = type.replace(/ss/, second);
            return type

        } else {
            return year + "-" + month + "-" + day;

        }

    }
}