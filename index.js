// Resume opening

const resumeButton = document.getElementById("resume");
resumeButton.addEventListener("click", function() {
  window.open("https://drive.google.com/file/d/1UMPTXzUdwxxTj0KoNWefXUHfJHnAIJGu/view?usp=share_link", "_blank");
});

const resumeButton2 = document.getElementById("resume2");
resumeButton2.addEventListener("click", function() {
  window.open("https://drive.google.com/file/d/1UMPTXzUdwxxTj0KoNWefXUHfJHnAIJGu/view?usp=share_link", "_blank");
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



const element = document.querySelector('.section-1');
const animation = element.animate(
  [
    { opacity: 0, bottom: '-50px' },
    { opacity: 1, bottom: 0 }
  ],
  {
    duration: 1000,
    easing: 'ease-out',
    fill: 'forwards'
  }
);