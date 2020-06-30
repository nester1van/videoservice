document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
  const tabContent = document.getElementsByClassName("tab-content");
  const tabLink = document.getElementsByClassName("tab-toggle__link");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" tab-toggle__link_active", "");
    tabLink[i].style.color = "#333333";
    tabLink[i].style.borderBottom = "none";
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab-toggle__link_active";
  evt.currentTarget.style.color = "#E5261E";
  evt.currentTarget.style.borderBottom = "2px solid #E5261E"
};