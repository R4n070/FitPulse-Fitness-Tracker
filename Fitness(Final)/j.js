function Exercise(name, duration) {
  this.name = name;
  this.duration = duration;
}

function addExercise() {
  var exerciseInput = document.getElementById("exercise");
  var durationInput = document.getElementById("duration");

  var exerciseName = exerciseInput.value.trim();
  var exerciseDuration = parseInt(durationInput.value);

  if (!exerciseName || isNaN(exerciseDuration) || exerciseDuration <= 0) {
    alert("Please enter exercise details");
    return;
  }

  var exercise = new Exercise(exerciseName, exerciseDuration);
  displayExercise(exercise);

  setTimeout(function () {
    playAlarm();
  }, exerciseDuration * 60 * 1000);

  exerciseInput.value = "";
  durationInput.value = "";
}

function displayExercise(exercise) {
  var exerciseLog = document.getElementById("exerciseLog");
  var li = document.createElement("li");
  li.innerHTML = `<strong>${exercise.name}:</strong>${exercise.duration} minutes`;
  exerciseLog.appendChild(li);
}
function playAlarm() {
  var audio = new Audio("alarm.mp3");
  audio.play();
}
