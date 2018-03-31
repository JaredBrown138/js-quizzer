var JsQuizzer = (function(){
    const SETTINGS_PATH = "./settings.json";
    const QUESTIONS_PATH = "./questions/question-bank.json";
    const CLIENT_SETTINGS_PATH = "./settings/client-settings";
    
    var settings = require(SETTINGS_PATH);
    var questionBank = require(QUESTIONS_PATH);
    
    var questionSet = []; //Holds the set of question objects for the quiz
    
    /**
     * The setup function prepares the quiz by selecting questions
     * using other functions.
     */
    function setup(){
       console.log(questionBankSize(questionBank));
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
        return Object.keys(questionBank).length;
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
        }
    };
});

var instance = new JsQuizzer();
instance.testLog();