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
