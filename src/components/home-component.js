ko.components.register("homecomponent", {
    viewModel: function(){
        this.vm = ViewModel;
        this.quizMessage = ko.computed(function(){
            if(this.vm.initialized() === false){
                return "START QUIZ";
            }else{
                return "RESUME QUIZ";
            } 
        }, this);
    },
    template:
    '\
        <div class="home-main">\
            <img class="home-image" src="media/images/startup.jpg" />\
            <div class="home-text-box">\
                <div class="home-title">REVIEW-JS</div>\
                <div class="home-tagline">TEST YOUR JS KNOWLEDGE</div>\
                <div data-bind="text: quizMessage" role="button" class="home-start-button unselectable">START QUIZ</div>\
            </div>\
        </div>'
});
