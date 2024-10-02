import { Alert } from "../alert_handle.js";

export class QuizBox{
    constructor(timeValue){
        this.points;
        this.time = timeValue;
        this.resolved = false;
        this.noAnswer = false;

        //Quizbox Elements
        this.quizBox = document.getElementById("quizBox");
        this.counter = this.quizBox.querySelector(".quizBox-headerTimer_counter");
        this.bar = this.quizBox.querySelector(".quizBox-headerLineTime");
        this.optionList = this.quizBox.querySelector(".quizBox-body_optionList");
        this.questionTitle = this.quizBox.querySelector(".quizBox-body_question");
        this.nextBtn = this.quizBox.querySelector(".quizBox-footerTotal_button");
        this.questionCount = this.quizBox.querySelector(".quizBox-footerTotal");

        //Intervals
        this.counter_interval;
        this.bar_interval;

        //Alert
        this.alert = new Alert();
    }
    
    start(){
        this.startCounter();
        this.startBar();
    }   

    startCounter(){
        let time = this.time;
        this.counter.textContent = time;
        this.counter_interval = setInterval(() => {
            time--;
            this.counter.textContent = time;
            //When counter finish
            if(time <= 0){
                this.alert.slide("Pregunta no resuelta");
                clearInterval(this.counter_interval);
                this.resolved = true;
                //shot an event when the time is 0
                if(this.onTimeOut) this.onTimeOut();    
            }
        },1000);
    };

    startBar(){
        let  size = 0;
        //Define how time the bar progration to grow up
        let interations = 100/((this.time*1000)/29);
        this.bar_interval = setInterval(() => {
            size += interations;
            this.bar.style.width = size + "%";
            //if the counter arrive 100%
            if(Math.round(size) >= 100){
                clearInterval(this.bar_interval);
            }
        },29)
    };
}




