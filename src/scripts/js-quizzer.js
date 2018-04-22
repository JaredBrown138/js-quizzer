var JsQuizzer = function() {
  var questionSet = questionBank; //Holds the set of question objects for the quiz
  var questionCount = 4;
  var protoTestObject = {};

  /**
   * The main function which builds the protoTestObject which
   * is then made public through the getProtoTestObject. Used
   * to build the main observable test object in app.js.
   * @param {*} scrambleAnswers
   * @param {*} scrambleQuestions
   */
  function setup(scrambleAnswers, scrambleQuestions) {
    console.log(scrambleAnswers);
    console.log(scrambleQuestions);
    protoTestObject.questionCount = questionCount;
    if (scrambleQuestions == "true") {
        
        questionSet = shuffle(questionSet);
    }
    $.each(questionSet, function(index, value) {
      var key = "q" + (index + 1);
      var protoSubTestObject = {};
      protoSubTestObject.question = questionSet[index].question;
      protoSubTestObject.category = questionSet[index].category;
      protoSubTestObject.answer = questionSet[index].answer;
      if (scrambleAnswers == "true") {
        questionSet[index].answers = shuffle(questionSet[index].answers);
      }
      $.each(questionSet[index].answers, function(indexInner, value) {
        var answerKey = "a" + (indexInner + 1);
        protoSubTestObject[answerKey] = value;
      });
      protoSubTestObject.selected = "";
      protoTestObject[key] = protoSubTestObject;
    });
  }
  /**
   * A Fischer-Yates Shcuffle
   * Based on a SO Answer: https://stackoverflow.com/a/6274398
   * @param {*} array
   */
  function shuffle(array) {
    var count = array.length;
    while (count > 0) {
      var index = Math.floor(Math.random() * count);
      count--;
      var tmp = array[count];
      array[count] = array[index];
      array[index] = tmp;
    }

    return array;
  }
  function determineScrambleAnswers() {
    if (doesCookieExist("scrambleAnswers")) {
      return $.cookie("scrambleAnswers");
    } else {
      return "false";
    }
  }
  function determineScrambleQuestions() {
    if (doesCookieExist("scrambleQuestions")) {
        return $.cookie("scrambleQuestions");
    } else {
      return "false";
    }
  }
  function getProtoTestObject() {
    setup(determineScrambleAnswers(), determineScrambleQuestions());
    return protoTestObject;
  }
  function doesCookieExist(cookieName) {
    if (typeof $.cookie(cookieName) == "undefined") {
      return false;
    } else {
      return true;
    }
  }
  function saveCookies(scrambleAnswers, scrambleQuestions) {
    $.cookie("scrambleAnswers", scrambleAnswers, { expires: 7 });
    $.cookie("scrambleQuestions", scrambleQuestions, { expires: 7 });
    console.log("Cookies Saved!");
  }
  console.log(determineScrambleAnswers());
  console.log(determineScrambleQuestions());
   //The setup function call (builds protoTestObject)

  return {
    testObject: getProtoTestObject(),
    save: function(scrambleAnswers, scrambleQuestions) {
      saveCookies(scrambleAnswers, scrambleQuestions);
    },
    getScrambleAnswers: function() {
      console.log(document.cookie);
      if (doesCookieExist("scrambleAnswers")) {
        return $.cookie("scrambleAnswers");
      } else {
        return "false";
      }
    },
    getScrambleQuestions: function() {
      if (doesCookieExist("scrambleQuestions")) {
        return $.cookie("scrambleQuestions");
      } else {
        return "false";
      }
    }
  };
};
