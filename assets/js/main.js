//
// Place any custom JS here
//

$(document).ready(function () {
  // jQuery methods go here...
  $("#cfEffect").mousemove(function (e) {
    var rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
    var rYP = e.pageY - this.offsetTop - $(this).height() / 2;
    $("#cfEffect").css(
      "text-shadow",
      +rYP / 10 +
        "px " +
        rXP / 80 +
        "px rgba(74,74,74 ,0.6), " +
        rYP / 8 +
        "px " +
        rXP / 60 +
        "px rgba(74,74,74 ,0.8), " +
        rXP / 70 +
        "px " +
        rYP / 12 +
        "px rgba(74,74,74,.1)"
    );
  });

  $.get("https://www.boredapi.com/api/activity", function (data, status) {
    // console.log("Data: " + data.activity + "\nStatus: " + status);
    $(".activity").html(data.activity);
    $(".type").html(data.type);
    $(".participants").html(data.participants);
    $(".price").html(data.price);
    $(".link").html(data.link);
    $(".key").html(data.key);
    $(".accessibility").html(data.accessibility);
  });
});
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
