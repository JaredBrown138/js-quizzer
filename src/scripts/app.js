$(function(){
    function AppViewModel(){
        var self = this;
        self.JSQ = ""
        self.testObject = "";
        self.questionCount = ""

        self.completedQuizObject = self.testObject; //Overidden in self.completeQuiz()
        
        self.activeComponent = ko.observable("homecomponent")
        self.navBar = ko.observable("navbarcomponent");

        self.initialized = ko.observable(false); //Keeps track of whether the user has started a quiz yet
        
        self.currentQuestionNumber = "";
        
        self.progressTracker = "";
        
        self.currentQuestionObject = "";

        self.start = function(){
            self.activeComponent("quizcomponent");
            if(!self.initialized()){
                self.initialized(true);
                self.JSQ = new JsQuizzer();
                console.log(self.JSQ.testObject);
                self.testObject = ko.mapping.fromJS(self.JSQ.testObject);
                self.questionCount = self.testObject["questionCount"];
                self.currentQuestionNumber = ko.observable(1).extend({notify: 'always'});
                self.progressTracker = ko.computed(function(){
                    return ("QUESTION " + self.currentQuestionNumber() + " OF " + self.questionCount());
                }, self).extend({notify: 'always'});
                self.currentQuestionObject = ko.computed(function(){
                    return self.testObject["q" + self.currentQuestionNumber()];
                }).extend({notify: 'always'});
            }

        }
        self.quit = function(){
            self.testObject = ko.mapping.fromJS(self.JSQ.testObject);
            self.currentQuestionNumber(1);
            self.initialized(false);
            self.activeComponent("homecomponent")
        }

        self.progress = function(){
            var current = self.currentQuestionNumber();
            var next = current + 1;
            if(next > self.questionCount()){
                self.completeQuiz();

            }else{
                self.currentQuestionNumber(next);
            }
            
            
        }
        self.regress = function(){
            var current = self.currentQuestionNumber();
            var last = current - 1;
            if( last <= 0){
                //If on first question, go to homepage on regress
                self.activeComponent("homecomponent");
            }else{
                
                self.currentQuestionNumber(last);
            }        
        }

        self.getAnsweredCount = function(){
            var JsTestObject = ko.mapping.toJS(self.testObject);
            
            var count = 0;
            $.each(JsTestObject, function(key, value){
                if( key !== "questionCount" ){
                    if(JsTestObject[key]["selected"]){
                        count += 1;
                    }
                }
            });
            return count;
        }

        self.completeQuiz = function(){
           
            var answerCount = self.getAnsweredCount();
            var unanswered = self.testObject.questionCount() - self.getAnsweredCount()
            var confirmComplete = "Dear User," + "\n\n" +  "You have unfortunately left " + unanswered +
                " question(s) blank. Please go back and answer them." + "\n\n" + "Best Regards," +
                "\n" +  "Management";
            if(answerCount < self.questionCount()){
                alert(confirmComplete);
            }else{
                self.completedQuizObject = self.testObject; 
                self.activeComponent("resultscomponent");
                self.initialized(false);
                self.testObject = ko.mapping.fromJS(self.JSQ.testObject);
                self.currentQuestionNumber(1);
                console.log(self.activeComponent());
            }
        }
        
        
    }
    ViewModel = new AppViewModel();
    ko.applyBindings(ViewModel);
});
