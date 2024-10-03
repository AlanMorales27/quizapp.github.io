import { ButtonController } from "../button_controller.js";
class Results{
    constructor(){
        
    }
    //look the porcentage represented to total question response
    findPorcentage(bar){
        let count_total = 10
        let correctAnswer = localStorage.getItem("correctAnswers");
        //600 is equal to 100% 1165 is equal 0%. Then (600-1165)/(100-0). That is a slope equation
        let m = (600-1165)/(count_total);
        //The equation of the line, help us to find the value of correct answers in the circle bar   
        let value = m*correctAnswer + 1165;
        bar.animate(
            [
                {strokeDashoffset: 1165},
                {strokeDashoffset: value}
            ],
            {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
            }
        );
    }
    //Show points to save in cache
    showCount(container, type){        
        container.textContent = localStorage.getItem(type);
    }

    functionalButton(){
        new ButtonController(
            document.getElementById("backButton")
        ).getPage('../../index.html')
    }
}


let results = new Results();
results.showCount(
    document.querySelector(".resultsBox-points h4"),
    "points"
);
results.showCount(
    document.querySelector(".inner p"),
    "correctAnswers",
)
results.findPorcentage(
    document.getElementById("charge"),
);

results.functionalButton();