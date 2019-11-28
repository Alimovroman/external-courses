let select = document.getElementsByClassName("select");
select[0].hidden = true;

function openList() {
  select[0].hidden = !select[0].hidden;
  document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(-90deg)" ;
  if(select[0].hidden === true ) {
    document.getElementsByClassName(`arrow`)[0].style.transform = "rotate(90deg)";
  }
};
document.querySelector(`.arrow`).addEventListener(`click`, openList);