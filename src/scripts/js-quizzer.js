var JsQuizzer = (function(){
    const SETTINGS_PATH = "./settings.json";
    const QUESTIONS_PATH = "./questions/question-bank.json";
    const CLIENT_SETTINGS_PATH = "./settings/client-settings";
    
    
    var questionSet = []; //Holds the set of question objects for the quiz
    
    /**
     * The setup function prepares the quiz by selecting questions
     * using other functions.
     */
    function setup(){
      
    }
    /** 
     * The buildQuestionSet function builds the question set by selecting 
     * JSON from the question bank and converting it into JS objects.
     * These objects are then stored in the questionSet Array which is
     * returned
    */
    function buildQuestionSet(){

    }
    /**
     * A Helper function that determines the number of questions inside
     * of the question bank.
     */
    function questionBankSize(questionBank){
        
    }
    /**
     * Scrambles the order of the questions for the 
     * question set.
     */
    function questionOrderScrambler( questionSet ){

    }
    /** 
     * Scrambles the order of the answers for all questions
     * in the question set.
    */
    function answerOrderScrambler( questionSet ){

    }
    /**
     * Loads the settings into a object.
     */
    function settingsLoader(){

    }
    
    setup();

    return{
        testLog: function(){
            console.log("Test");
        },
        testObject: {
            "questionCount": 2,
            "q1":{
                "question": "____________ pause running JavaScript code.  One that is most common is _____________.",
                "category": "General",
                "a1": "Breakpoints; Line-of-code",
                "a2": "Suspensions; Line-of-code",
                "a3": "Event Listeners; XHR",
                "a4": "DOM; Conditional line-of-code",
                "selected": ""
            },
            "q2":{
                "question": "What are object literals?",
                "category": "Objects",
                "a1": "Objects that are created as functions and their properties are initialized through parameterized values.",
                "a2": "Simple event-registration methods for each of the commonly used and universally implemented browser events. ",
                "a3": "A comma-separated list of colon-separated name:value pairs, enclosed within curly braces.",
                "a4": "None of the above.",
                "selected": ""
            }
        }
    };
});
