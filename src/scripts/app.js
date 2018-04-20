$(function(){
    function AppViewModel(){
        var self = this;
        self.JSQ = new JsQuizzer();
        self.testObject = ko.mapping.fromJS(self.JSQ.testObject);
        self.questionCount = self.testObject["questionCount"];
        
        self.activeComponent = ko.observable("homecomponent")
        self.navBar = ko.observable("navbarcomponent");

        self.initialized = ko.observable(false); //Keeps track of whether the user has started a quiz yet
        
        self.currentQuestionNumber = ko.observable(1).extend({notify: 'always'});
        
        self.progressTracker = ko.computed(function(){
            return ("QUESTION " + self.currentQuestionNumber() + " OF " + self.questionCount());
        }, self).extend({notify: 'always'});;
        
        self.currentQuestionObject = ko.computed(function(){
            return self.testObject["q" + self.currentQuestionNumber()];
        }).extend({notify: 'always'});
        

        self.start = function(){
            self.activeComponent("quizcomponent");
            if(!self.initialized()){
                self.initialized(true);
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
            
            console.log("User Action: Progression");
        }
        self.regress = function(){
            var current = self.currentQuestionNumber();
            var last = current - 1;
            if( last <= 0){
                //If on first question, go to homepage on regress
                self.activeComponent("homecomponent");
            }else{
                console.log("User Action: Regression");
                self.currentQuestionNumber(last);
            }        
        }

        self.getAnsweredCount = function(){
            var JsTestObject = ko.mapping.toJS(self.testObject);
            console.log(JsTestObject);
            var count = 0;
            $.each(JsTestObject, function(key, value){
                if( key !== "questionCount" ){
                    if(JsTestObject[key]["selected"]){
                        count += 1;
                    }
                }
            });
            console.log(count + " question(s) completed!");
            return count;
        }
        
        self.completeQuiz = function(){
            console.log("User Action: Complete");
            var answerCount = self.getAnsweredCount();
            var confirmComplete = "Are you sure you want to submit your quiz? You only answered " +
            answerCount + " questions out of " + self.questionCount() + " questions!";
            if(answerCount < self.questionCount()){
                if(confirm(confirmComplete)){
                    self.activeComponent("resultscomponent");
                    self.initialized(false);
                    self.testObject = ko.mapping.fromJS(self.JSQ.testObject);
                    self.currentQuestionNumber(1);

                }
            }else{
                self.activeComponent("resultscomponent");
                self.initialized(false);
                self.testObject = ko.mapping.fromJS(self.JSQ.testObject);
                self.currentQuestionNumber(1);
            }
        }
        
        
    }
    ViewModel = new AppViewModel();
    ko.applyBindings(ViewModel);
});
