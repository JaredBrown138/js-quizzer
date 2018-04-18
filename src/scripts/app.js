$(function(){
    function AppViewModel(){
        var self = this;
        self.JSQ = new JsQuizzer();
        self.testObject = ko.mapping.fromJS(self.JSQ.testObject);

        self.activeComponent = ko.observable("homecomponent")
         //The main test object
        self.initialized = false; //Keeps track of state

        self.currentQuestionNumber = ko.observable(1);
        self.currentQuestionObject = ko.computed(function(){
            return self.testObject["q" + self.currentQuestionNumber()];
        });
        

        self.start = function(){
            self.activeComponent("quizcomponent");
            if(!self.initialized){
                console.log(self.currentQuestionObject());
            }

        }

        self.progress = function(){
            console.log(self.currentQuestionObject().selected())
            var current = self.currentQuestionNumber();
            var next = current + 1;
            console.log(self.currentQuestionObject());
            self.currentQuestionNumber(next);
            console.log(self.currentQuestionObject());
        }
    }
    ViewModel = new AppViewModel();
    ko.applyBindings(ViewModel);
});
