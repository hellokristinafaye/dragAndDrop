let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;
        // console.log(selected);

        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function (e) {
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selected);
            selected = null;
        })



    })
}


// Yay all done! this is the link for the tutorial, let's do a README sometime soon! https://www.youtube.com/watch?v=4AHot187Lj0
