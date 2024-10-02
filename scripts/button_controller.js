//Button to redirect page
export class ButtonController {
    constructor(button, url, box, boxState){
        this.button = button;
        this.url = url;
        this.box = box;
        this.state = boxState; 
    }

    //Redirect to another screen
    getPage(){
        this.button.onclick = () => {
            window.location.assign(this.url);
        }
    }

    //Show hide boxes
    appearBox(){
        let background_filter = document.querySelector(".background1");
        this.button.onclick = () => {
            console.log("aparece");
            if(getComputedStyle(this.box).display != "none") {
                this.box.style.display = "none";
                background_filter.style.display = "none";
            } else{
                this.box.style.display = this.state;
                background_filter.style.display = "block";
            }
        }
    }

}