const CONFIRM_MESSAGE = "Are you sure you would like to return home? " +
     "Answers will not be saved";

function navigate(target){
    switch( target ){
        case "Home": {
            ViewModel.activeComponent("homecomponent");
            break;
        }
        case "actionButton":{
            actionButton();
            break;
        }
    }
}
function navigateAway(){
    try{
        if( ViewModel.activeComponent() == "quizcomponent"){
            if( confirm(CONFIRM_MESSAGE) == true){
                return true;
            }else{
                console.log("Navigation Canceled");
                return false;
            }
        }
    }catch(err){
        console.log(err);
        console.log("ViewModel likely wasn't instantiated");
        location.reload();
    }
}
function actionButton(){
    if(ViewModel.activeComponent() === "quizcomponent"){
        if(confirm("Are you sure you want to quit?")){
            ViewModel.quit();
        }
        
    }else{
        ViewModel.activeComponent("quizcomponent");
    }
}
//
