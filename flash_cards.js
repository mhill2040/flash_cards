// $(document).ready(function(){
//   $("p").hide();
//   $("#btn").click(function(){
//     $("p").toggle();
//   })
// })

$(document).ready(function(){
  $("p").hide();
  $(".btn").click(function(){
    $(this).closest(".card").find(".card-text").toggle();
  })
})
