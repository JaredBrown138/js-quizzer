/** ============================================================
 *  File: button-bindings.js
 *  Date: 4/16/2018
 *  Authors: Advanced Prototyping
 *  
 *  Desctiption: The button-bindings file is responsible
 *  for assigning click events to buttons using jQuery's
 *  .on() method. Then the respective code is ran after each
 *  press. 
 * 
 * ===========================================================*/

 $(document).ready(function() {
   
    /**
     ---------- Settings Modal Bindings ----------
    */
   $(document.body).on("click", "#settingsTrigger", function() {
     settingsModal.initialize(settings);
   });
   $(document.body).on("click", ".settings-close", function() {
     settingsModal.destroy();
   });
   $(document.body).on("click", ".settings-save", function() {
     saveSettings(settings, $("#settings-form"));
   });

   /** 
    ---------- NAVBAR Bindings ----------
   */
  $(document.body).on("click", ".navbar-home", function() {
    navigate("Home");
  });
  $(document.body).on("click", ".actionButton", function() {
    navigate("actionButton");
  });
   
   
   /** 
     ---------- Home Component Bindings ----------
    */
   $(document.body).on("click", ".home-start-button", function() {
     ViewModel.start();
   });

   /** 
     ---------- Quiz Component Bindings ----------
    */
   $(document.body).on("click", ".question-next-button", function() {
    console.log('clicked');
    ViewModel.progress();
  });

  $(document.body).on("click", ".question-back-button", function() {
    console.log('clicked');
    ViewModel.regress();
  });



 });