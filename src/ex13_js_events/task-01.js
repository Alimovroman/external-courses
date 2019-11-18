let select = document.getElementsByClassName("select");
select[0].hidden = true;

function openList() {
  select[0].hidden = !select[0].hidden;
  document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(-90deg)" ;
  if(select[0].hidden === true ) {
    document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(90deg)";
  }
};

let backlogContainer = document.getElementsByClassName(`backlogContainer`);
let taskUl = document.createElement(`ul`);
taskUl.className = (`taskUl`);
backlogContainer[0].append(taskUl);

let readyContainer = document.getElementsByClassName(`readyContainer`);
let readyUl = document.createElement(`ul`);
readyUl.className = (`readyUl`);
readyContainer[0].append(readyUl);

let progressContainer = document.getElementsByClassName(`progressContainer`);
let progressUl = document.createElement(`ul`);
progressUl.className = (`progressUl`)
progressContainer[0].append(progressUl);

let finishedContainer = document.getElementsByClassName(`finishedContainer`);
let finishedUl = document.createElement(`ul`);
finishedUl.className = (`finishedUl`);
finishedContainer[0].append(finishedUl);

let backlog = document.getElementsByClassName('backlogButton');
backlog[0].addEventListener(`click`, addBacklog);
let ready = document.getElementsByClassName(`readyButton`);
let progress = document.getElementsByClassName(`progressButton`);
let finished = document.getElementsByClassName(`finishedButton`);

function checkButton() {
  if (progressUl.childNodes.length === 0) {
    finished[0].disabled = true;
    } else { finished[0].disabled = false;
  };
  if (readyUl.childNodes.length === 0) {
    progress[0].disabled = true;
    } else { progress[0].disabled = false;
  } 
  if (taskUl.childNodes.length === 0) {
    ready[0].disabled = true;
    } else {
    ready[0].disabled = false;
  }  
};
checkButton();
function addBacklog() {
  let namelist = prompt(`введите название задачи`,``);
  if (namelist === null) return;
  if (namelist !== ``) {
    let addTask = document.createElement(`li`);
    addTask.className = (`addTask`);
    addTask.innerHTML = `${namelist}`;
    taskUl.append(addTask);
    localStorage.setItem(`task`,addTask);
    checkButton();
  } return
};

ready[0].onclick = function() {
  taskUl.addEventListener(`click`, moveInReady);
};
function moveInReady(event) {
  let target = event.target;
    let readyLi = document.createElement(`li`);
    readyLi.className = (`readyLi`)
    readyLi.innerHTML = `${target.textContent}`;
    readyUl.append(readyLi);
    localStorage.setItem(`task2`,readyLi);
    target.remove();
    checkButton();
    taskUl.removeEventListener(`click`, moveInReady);
};

progress[0].onclick = function() {
  readyUl.addEventListener(`click`,moveInProgress);
};
function moveInProgress(event) {
  let targetReady = event.target;
  let progressLi = document.createElement(`li`);
  progressLi.className = (`progressLi`);
  progressLi.innerHTML = `${targetReady.textContent}`;
  progressUl.append(progressLi);
  localStorage.setItem(`task3`,progressLi);
  targetReady.remove();
  checkButton();
  readyUl.removeEventListener(`click`,moveInProgress);
};

finished[0].onclick = function() {
  progressUl.addEventListener(`click`, moveInFinished);
};
function moveInFinished(event) {
  let targetFinished = event.target;
  let finishedLi = document.createElement(`li`);
  finishedLi.className = (`finishedLi`);
  finishedLi.innerHTML = (`${targetFinished.textContent}`);
  finishedUl.append(finishedLi);
  localStorage.setItem(`task4`,finishedLi);
  targetFinished.remove();
  checkButton();
  progressUl.removeEventListener(`click`, moveInFinished);
};