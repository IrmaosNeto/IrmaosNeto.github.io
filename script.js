window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 768 || document.documentElement.scrollTop > 768) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-69px";
  }
}