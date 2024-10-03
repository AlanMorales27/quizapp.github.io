//Button to redirect page
export class ButtonController {
    constructor(button){
        this.button = button;
    }

    //Redirect to another screen
    getPage(url){
        this.button.onclick = () => {
            window.location.assign(url);
        }
    }

    //Show hide boxes
    appearBox(box, state){
        let background_filter = document.querySelector(".background1");
        this.button.onclick = () => {
            console.log("aparece");
            if(getComputedStyle(box).display != "none") {
                box.style.display = "none";
                background_filter.style.display = "none";
            } else{
                box.style.display = state;
                background_filter.style.display = "block";
            }
        }
    }

}