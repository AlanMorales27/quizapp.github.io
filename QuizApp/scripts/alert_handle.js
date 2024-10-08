export class Alert{
    constructor(){
        this.alertContainer = document.querySelector(".quizBox-alert");
    }
    //Slide alert in the container
    slide(message)
    {
        let text = this.alertContainer.querySelector("p");
        text.textContent = message;
        this.alertContainer.classList.add('active-alert');
    }

    //Hide showed alert
    hide(){
        this.alertContainer.classList.remove("active-alert");
    }
}

