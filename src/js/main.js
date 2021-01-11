//header scroll
var scrollpos = window.scrollY;
var header = document.querySelector(".header");
window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > 45) {
        header.classList.add("header-bg");
    }
    else {
        header.classList.remove("header-bg");
    }
});


// sidebar collaspe

var close = document.querySelectorAll(".ham-toggle");
var body = document.querySelector("body");
close.forEach(sidebar => {
    sidebar.addEventListener('click', () => {
        body.classList.toggle("side_collaspe");
    })
})



// project scroll mouse
// $(function ($) {
//     $.fn.hScroll = function (amount) {
//         amount = amount || 20;
//         $(this).bind("DOMMouseScroll mousewheel", function (event) {
//             var oEvent = event.originalEvent,
//                 direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
//                 position = $(this).scrollLeft();
//             position += direction > 0 ? -amount : amount;
//             $(this).scrollLeft(position);
//             event.preventDefault();
//         })
//     };
// });

// $(document).ready(function () {
//     $('.project-box-row').hScroll(160); // You can pass (optionally) scrolling amount
// });

