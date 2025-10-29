// document.querySelector for selecting the body


const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e.target)

        switch (e.target.id) {

            case "grey":
            case "white":
            case "blue":
            case "yellow":
            case "red":
                body.style.backgroundColor = e.target.id;

            default:
                console.log("Not available")
        }
        //    if(e.target.id=="grey"){
        //     body.style.backgroundColor= e.target.id;
        //    }
        //    if(e.target.id=="white"){
        //     body.style.backgroundColor= e.target.id;
        //    }
        //    if(e.target.id=="blue"){
        //     body.style.backgroundColor= e.target.id;
        //    }
        //    if(e.target.id=="yellow"){
        //     body.style.backgroundColor= e.target.id;
        //    }
        //    if(e.target.id == "red"){
        //     body.style.backgroundColor = e.target.id;
        //    }
    })
});



