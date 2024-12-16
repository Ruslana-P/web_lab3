const alarm = {
  isActive: false,
  alarmTime: null,

  // Включення будильника
  setAlarmTime: function (hours, minutes) {
    const now = new Date();
    now.setHours(hours, minutes, 0, 0);
    this.alarmTime = now;
    this.isActive = true;
    console.log(
      `Будильник встановлено на ${this.alarmTime.toLocaleTimeString()}. Час зараз ${new Date()} `
    );
  },

  // Вимкнення будильника
  turnOffAlarm: function () {
    this.isActive = false;
    console.log(`Будильник вимкнений. Час зараз ${new Date()}`);
  },

  checkAlarm: function () {
    const now = new Date();
    if (this.isActive && now >= this.alarmTime) {
      console.log(`Час для будильника! Підйом!. Час зараз ${new Date()}`);
      this.turnOffAlarm();
    }
  },
};

function startAlarmChecker() {
  setInterval(() => {
    alarm.checkAlarm();
  }, 1000);
}

startAlarmChecker();

alarm.setAlarmTime(14, 56);
