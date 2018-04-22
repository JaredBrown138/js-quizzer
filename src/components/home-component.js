/*
============================================
 Author: Advanced Prototyping
 Date:   May 2018
 Description: The home-component.js file
    holds the VM and the template for the
    homecomponent component. 
===========================================
*/
ko.components.register("homecomponent", {
    viewModel: function(){
        var self = this;
        self.vm = ViewModel; //Reference the main App VM.
        /** 
         * Determines whether the big button should say
         * resume of start. Bases descision off of the
         * initialized observable from the main app
         * viewModel  
        */
        self.quizMessage = ko.computed(function(){
            if(self.vm.initialized() === false){
                return "START QUIZ";
            }else{
                return "RESUME QUIZ";
            } 
        }, self);
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
