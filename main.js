// responsive nav menu
$(document).ready(function() {
  $(".toggle").click(function() {
    $("ul").toggleClass("active");
  });
});

// smooth scrolling
$(".nav a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
