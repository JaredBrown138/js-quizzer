ko.components.register("quizcomponent", {
    viewModel: function(questionObject) {
      this.vm = ViewModel;
        
      this.progressTracker = ko.computed(function(){
          return this.vm.progressTracker()
      }, this);

      this.currentQuestionObject = ko.computed(function(){
          return this.vm.currentQuestionObject()
      }, this);
      
      
      
      this.question = ko.computed(function(){
          return this.currentQuestionObject().question();
      }, this);

      this.a1 = ko.computed(function(){
          return this.currentQuestionObject().a1();
      }, this);

      this.a2 = ko.computed(function(){
          return this.currentQuestionObject().a2();
      }, this);

      this.a3 = ko.computed(function(){
          return this.currentQuestionObject().a3();
      }, this);

      this.a4 = ko.computed(function(){
          return this.currentQuestionObject().a4();
      }, this);

      this.selected = ko.computed(function(){
          return this.currentQuestionObject().selected();
      }, this);

      this.clicked = function(){
          var value = $('input[name=\'option\']:checked').val();
          this.currentQuestionObject().selected(value);
          return true;
      }
  
    },
    template:
      '<div class="question-main">\
          <div class="question-box">\
              <div class="question-header">\
                  <h2 class="question-header-text">QUESTION:  </h2>\
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
              <div data-bind="text: progressTracker" class="question-counter">QUESTION 1 OF 10</div>\
          </div> </div>'
  });