var os = require('os');

function setTime() {
    var uptime = os.uptime();
    var hour = (uptime / 3600).toFixed(0);
    var min;
    var time;

    if (hour) {
        time = hour + 'h ';
        uptime %= 3600;
    }

    min = (uptime / 3600).toFixed(0);

    if (min) {
        time += min + 'min ';
        uptime %= 60;
    }

    time += uptime.toFixed(0) + 'sec\n';

    return time;
};

exports.print = setTime();
