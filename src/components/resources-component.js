/*
============================================
 Author: Advanced Prototyping
 Date:   May 2018
 Description: The resources-component.js 
    file contains the template for the
    resourcescomponent component
===========================================
*/
ko.components.register("resourcescomponent", {
    template:
    '<img class="home-image" src="media/images/startup.jpg" />\
    <div class="resources-backdrop" >\
        <div class="resources-title">A FEW RESOURCES</div>\
        <div class="resources-item-container">\
            <h1 class="Resources-item-header">Introduction to JS: Youtube Tutorial</h3>\
            <a target="_blank" href="https://www.youtube.com/watch?v=vEROU2XtPR8" class="resources-item-link unselectable">TAKE A LOOK</a>\
        </div>\
        <div class="resources-item-container">\
            <h1 class="Resources-item-header">Articles By Eric Elliot</h3>\
            <a target="_blank" href="https://medium.com/@_ericelliott" class="resources-item-link unselectable">TAKE A LOOK</a>\
        </div>\
        <div class="resources-item-container">\
            <h1 class="Resources-item-header">MDN: JavaScript</h3>\
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="resources-item-link unselectable">TAKE A LOOK</a>\
        </div>\
    </div>\
    '
});