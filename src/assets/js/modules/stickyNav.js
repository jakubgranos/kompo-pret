
const nav = document.getElementById('page-header');

function stickyNav(){
  if(window.pageYOffset >= 100) {
    nav.className = 'stickyNav header';
  }else if(window.pageYOffset == 0){
    nav.className = 'header';
  }
}
window.onscroll = function() {
  stickyNav();
};