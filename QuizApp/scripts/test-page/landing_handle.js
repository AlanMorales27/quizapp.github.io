import { ButtonController } from "../button_controller.js";

class AlertControl {
    constructor(button,box,state){
        this.alertBox = box;
        this.state = state;
        this.button = button;
    }

    alertToggle(){
        let appearBox = new ButtonController(
            this.button
        )
        appearBox.appearBox(this.alertBox, this.state);
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    
    let infoBox = document.querySelector(".infoBox"); 
    //Add function to home button to start the program with the info box
    new AlertControl(
        document.querySelector(".principalInfo-startButton"),
        infoBox,
        "block"
    ).alertToggle();

    //Rules alert buttons functions
    new AlertControl(
        document.querySelector(".infoBox-buttons_back"),
        infoBox,
        "none"
    ).alertToggle();

    new ButtonController(
        document.querySelector(".infoBox-buttons_continue"),
    ).getPage("../screens/test-page.html");

});
