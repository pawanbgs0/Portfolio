// Resume opening

const resumeButton = document.getElementById("resume");
resumeButton.addEventListener("click", function() {
  window.open("https://docs.google.com/document/d/12OkK7g3LCMix86P_Wqu6obPPHdfN0WkNt8WzpHQpcEU/", "_blank");
});

const resumeButton2 = document.getElementById("resume2");
resumeButton2.addEventListener("click", function() {
  window.open("https://docs.google.com/document/d/12OkK7g3LCMix86P_Wqu6obPPHdfN0WkNt8WzpHQpcEU/", "_blank");
});

const helloButton = document.getElementById("hello");
helloButton.addEventListener('click', function(){
  window.open("mailto:pawanandaman@gmail.com");
})

// table list begin 
function companyList(evt, company) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(company).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// table list end



