import {QuizBox} from "../quizbox_handle.js";
import questions from "../../../sources/data/ACDM.js";


export class CloseTest extends QuizBox{
    constructor(timeValue, questionList){
        super(timeValue);
        this.list = this.shuffle(questionList);
        this.count_total = this.list.length;
        this.allOptions = this.optionList.children;
        this.count = 0;
        this.points = 0;
        this.correctAnswer = 0;
        this.icon_correct =
            '<div class="optionList-iconContainer_correct"><i class="fa-solid fa-check"></i></div>';
    }    


    start(){
        super.start();
        this.renderQuestions();
        this.nextButton();
        this.questionCounter();
    }

    update(){
        this.alert.hide();
        super.start();
        this.renderQuestions();
        this.questionCounter();
        this.resolved = false;
    }

    //Next button funtion
    nextButton(){
        this.nextBtn.onclick = () => {
            if(this.count + 1== this.count_total){
                console.log("entra");
                localStorage.setItem("points", this.points);
                localStorage.setItem("correctAnswers", this.correctAnswer);
                window.location.assign("../../screens/result-page.html");
            }else if(this.resolved == true){
                this.count++;
                this.update();
            }else{
                this.alert.slide("Resuelva la pregunta");
                setTimeout(() => {
                    this.alert.hide();
                }, 4000);
            }
        }
    }

    //Shuffle the arrays to get random positions
    shuffle(array) {
        return array.sort(
            () => {
                return Math.random() - 0.5;
            });
    }

    //Render the questions in the box
    renderQuestions(){
        let opt_tag = "";
        //Get a random position of options
        this.shuffle(this.list[this.count].options);
        //Walk through the array and displays them
        this.list[this.count].options.forEach(option => {
            opt_tag += `<li><p>${option}</p></li>`;
        });
        this.optionList.innerHTML = opt_tag; //Display in the view
        this.questionTitle.innerHTML = this.list[this.count].quest;

        //Change size to title question
        if(this.questionTitle.textContent.length > 200){
            this.questionTitle.style.fontSize = "18px";
        }

        //Create a features when click on it
        const options = this.optionList.querySelectorAll("li");

        options.forEach((OptionElement) => {
            //Change the padding depent the phrase long
            if(OptionElement.textContent.length > 65){
                OptionElement.style.padding = "30px 15px";}
            OptionElement.addEventListener('click', () => {
                this.evaluateResponse(OptionElement);
            })
        });


    }
    //Updates and displays the current question number in the container
    questionCounter() {
        let count_print = this.count + 1;
        this.questionCount.innerHTML = `<span>${count_print} de ${this.count_total} Preguntas</span>`;
    }

    evaluateResponse(current){
        let icon_wrong = 
            '<div class="optionList-iconContainer_wrong"><i class="fa-solid fa-xmark"></i></div>';
        let userAnswer = current.textContent;
        let correctAnswer = this.list[this.count].answer;
        //Clear time process when is evaluate the response
        clearInterval(this.counter_interval);
        clearInterval(this.bar_interval);

        if(userAnswer == correctAnswer){
            current.setAttribute("id", "correctAnswer");
            current.insertAdjacentHTML( 'beforeEnd', this.icon_correct);
            this.points += 10;
            this.correctAnswer++;
            console.log(this.correctAnswer);
        }else{
            current.setAttribute("id","wrongAnswer");
            current.insertAdjacentHTML('beforeEnd',icon_wrong);
            //Show the correct answer
            for(let i = 0; i < this.allOptions.length; i++){
                if(this.allOptions[i].textContent === correctAnswer){
                    this.allOptions[i].setAttribute("id","correctAnswer");
                    this.allOptions[i].insertAdjacentHTML( 'beforeEnd', this.icon_correct);   
                }
            }   
        }

        this.resolved = true;
        if(this.resolved == true){
            //Disable another responses 
            for(let i = 0; i < this.allOptions.length; i++){
            this.allOptions[i].classList.add("disabled");    
            }
        }

        return this.resolved;
    }

    //overWrite the QuizBox function
    onTimeOut(){
        for(let i = 0; i < this.allOptions.length; i++){
            this.allOptions[i].classList.add("disabled");  
            if(this.allOptions[i].textContent == questions[this.count].answer){
                this.allOptions[i].setAttribute("id","correctAnswer");
                this.allOptions[i].insertAdjacentHTML( 'beforeEnd', this.icon_correct); 
                this.resolved = true;
            }   
        }
            
    }
}

export default CloseTest;


let test1 = new CloseTest(45,questions)
test1.start();
