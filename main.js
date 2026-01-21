
function wakeUp() {
  return "Просыпаюсь";
}

function sleep() {
  return "Сон";
}

const Choice = ["Играю", "Делаю домашку"];


const randomIndex = Math.floor(Math.random() * Choice.length);


const choiceText = Choice[randomIndex];

class DailyRoutine {
  constructor(name) {
    this.name = name;
    this.day = [];
  }

  addTask(time, task) {
    this.day.push(`${time} — ${task}`);
  }

  showDay() {
    console.log(`Распорядок дня: ${this.name}`);
    console.log("------------------");

    this.day.forEach(item => {
      console.log(item);
    });
  }
}


const myRoutine = new DailyRoutine("Мой день");

myRoutine.addTask("10:00", wakeUp());
myRoutine.addTask("10:30", "Встаю с кровати");
myRoutine.addTask("12:20", "Сажусь на автобус и еду в КГУ :(");
myRoutine.addTask("14:10", "Начало пар, учимся");
myRoutine.addTask("20:05", "Последний автобус, едем домой");
myRoutine.addTask("21:05", "Приехали домой");
myRoutine.addTask("21:30", choiceText);
myRoutine.addTask("00:00", sleep());

myRoutine.showDay();

