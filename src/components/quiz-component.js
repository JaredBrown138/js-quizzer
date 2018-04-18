ko.components.register("quizcomponent", {
  viewModel: function(questionObject) {
    this.vm = ViewModel;
    this.currentQuestionObject = ko.computed(function(){
        return this.vm.currentQuestionObject;
    }, this);    
    this.question = ko.computed(function(){
        return ViewModel.currentQuestionObject().question();
    }, this);
    this.a1 = ko.computed(function(){
        return ViewModel.currentQuestionObject().a1();
    }, this);
    this.a2 = ko.computed(function(){
        return ViewModel.currentQuestionObject().a2();
    }, this);
    this.a3 = ko.computed(function(){
        return ViewModel.currentQuestionObject().a3();
    }, this);
    this.a4 = ko.computed(function(){
        return ViewModel.currentQuestionObject().a4();
    }, this);
    this.selected = ko.computed(function(){
        return ViewModel.currentQuestionObject().selected();
    }, this);
    this.clicked = function(){
        console.log($('input[name=\'option\']:checked').val());
        return true;
    }

  },
  template:
    '<div class="question-main">\
        <div class="question-box">\
            <div class="question-header">\
                <h2 class="question-header-text">QUESTION - </h2>\
                <p data-bind="text: question" class="question-text">What is a closure used for?</p>\
            </div>\
            <div class="question-set">\
                <div class="question-answer-wrapper">\
                    <input data-bind="checkedValue: a1, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
                    <label data-bind="text: a1" >This is an answer</label>\
                </div>\
                <div class="question-answer-wrapper">\
                    <input data-bind="checkedValue: a2, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
                    <label data-bind="text: a2">This is an answer</label>\
                </div>\
                <div class="question-answer-wrapper">\
                    <input data-bind="checkedValue: a3, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
                    <label data-bind="text: a3">This is an answer</label>\
                </div>\
                <div class="question-answer-wrapper">\
                    <input data-bind="checkedValue: a4, checked: selected, click: clicked" type="radio" class="question-radio-button" name="option">\
                    <label data-bind="text: a4">This is an answer</label>\
                </div>\
            </div>\
            <div class="question-button-set">\
                <div role="button" class="question-back-button unselectable">BACK</div>\
                <div role="button" class="question-next-button unselectable">NEXT QUESTION</div>\
            </div>\
            <div class="question-counter">QUESTION 1 OF 10</div>\
        </div> </div>'
});
