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
            "q1":{
                "question": "This is a question",
                "category": "Category",
                "a1": "Answer 1.",
                "a2": "Answer 2.",
                "a3": "Answer 3.",
                "a4": "Answer 4.",
                "selected": ""
            },
            "q2":{
                "question": "This is the second question",
                "category": "Category",
                "a1": "This is a answer",
                "a2": "This is a answer",
                "a3": "This is a correct answer",
                "a4": "This is a answer",
                "selected": ""
            }
        }
    };
});
