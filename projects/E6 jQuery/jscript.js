
for (let step = 0; step < 88; step++) {
    let circle = '<div class="circle" style="width:100px; height:100px;border: 2px solid black;border-radius: 50%;">'
    $("body").append(circle)
}

$(".circle").each(function () {
    $(this).on("click", function () {
        $(this).css("background-color", "red");

    })
})
