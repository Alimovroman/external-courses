let select = document.getElementsByClassName("menuContainer");
select[0].innerHTML = `<ul class="menu">
<li class="menuList">My account</li>
<li class="menuList">My task</li>
<li class="menuList">Setting</li>
<li class="menuList">Log out</li>
</ul>`;
select[0].hidden = true;
function openList() {
  select[0].hidden = !select[0].hidden;
  document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(-90deg)" ;
  if(select[0].hidden === true ) {
    document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(90deg)";
  }
};
document.querySelector(`.arrow`).addEventListener(`click`, openList);
document.querySelector(`.menu`).addEventListener(`click`, openList);

let backlogContainer = document.getElementsByClassName(`backlogContainer`);
let backlogTask = document.createElement(`ul`);
backlogContainer[0].append(backlogTask);

let readyContainer = document.getElementsByClassName(`readyContainer`);
let readyTask = document.createElement(`ul`);
readyContainer[0].append(readyTask);

let progressContainer = document.getElementsByClassName(`progressContainer`);
let progressTask = document.createElement(`ul`);
progressContainer[0].append(progressTask);

let finishedContainer = document.getElementsByClassName(`finishedContainer`);
let finishedTask = document.createElement(`ul`);
finishedContainer[0].append(finishedTask);

let backlog = document.getElementsByClassName('backlogButton');
backlog[0].addEventListener(`click`, addTask);
let ready = document.getElementsByClassName(`readyButton`);
let progress = document.getElementsByClassName(`progressButton`);
let finished = document.getElementsByClassName(`finishedButton`);

function checkButton() {
  if (progressTask.childNodes.length === 0) {
    finished[0].disabled = true;
    } else { finished[0].disabled = false;
  };
  if (readyTask.childNodes.length === 0) {
    progress[0].disabled = true;
    } else { progress[0].disabled = false;
  } 
  if (backlogTask.childNodes.length === 0) {
    ready[0].disabled = true;
    } else {
    ready[0].disabled = false;
  }  
};
checkButton();
function addTask() {
  let namelist = prompt(`введите название задачи`,``);
  if (namelist === null) return;
  if (namelist !== ``) {
    let backlogList = document.createElement(`li`);
    backlogList.className = (`listTask`);
    backlogList.innerHTML = `${namelist}`;
    backlogTask.append(backlogList);
    localStorage.setItem(`task`,backlogTask);
    checkButton();
  } return
};

ready[0].onclick = function() {
  backlogTask.addEventListener(`click`, moveInReady);
};
function moveInReady(event) {
  let target = event.target;
    let readyList = document.createElement(`li`);
    readyList.className = (`listTask`)
    readyList.innerHTML = `${target.textContent}`;
    readyTask.append(readyList);
    localStorage.setItem(`task2`,readyList);
    target.remove();
    checkButton();
    backlogTask.removeEventListener(`click`, moveInReady);
};

progress[0].onclick = function() {
  readyTask.addEventListener(`click`,moveInProgress);
};
function moveInProgress(event) {
  let targetReady = event.target;
  let progressList = document.createElement(`li`);
  progressList.className = (`listTask`);
  progressList.innerHTML = `${targetReady.textContent}`;
  progressTask.append(progressList);
  localStorage.setItem(`task3`,progressList);
  targetReady.remove();
  checkButton();
  readyTask.removeEventListener(`click`,moveInProgress);
};

finished[0].onclick = function() {
  progressTask.addEventListener(`click`, moveInFinished);
};
function moveInFinished(event) {
  let targetFinished = event.target;
  let finishedList = document.createElement(`li`);
  finishedList.className = (`listTask`);
  finishedList.innerHTML = (`${targetFinished.textContent}`);
  finishedTask.append(finishedList);
  localStorage.setItem(`task4`,finishedList);
  targetFinished.remove();
  checkButton();
  progressTask.removeEventListener(`click`, moveInFinished);
};