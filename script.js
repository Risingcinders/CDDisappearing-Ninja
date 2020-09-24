$(document).ready(function () {
    function createpic() {
        rand = Math.ceil(Math.random() * 8);
        $("#main").append(
            "<img src='images/" + rand + ".jpeg' alt='a dog pic'></img>"
        );
    }

    for (i = 0; i < 8; i++) {
        createpic();
    }

    $("#main").on("click", "img", function () {
        $(this).remove();
        createpic();
    });
});
