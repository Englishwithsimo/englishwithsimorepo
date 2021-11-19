function resetForm21(form) {
  for (i=0; i<numQues21; i++) {
    form.elements[i].style.backgroundColor = "#ffffff";
    document.getElementById("feedbackArea21").innerHTML="";
  document.getElementById("percentage21").innerHTML="";
    }
}

function getScore21(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i=0; i<numQues21; i++) {
    currElt = form.elements[i];
    currSelection = currElt.selectedIndex;
    if (currElt.options[currSelection].value == answers21[i]) {
      score++;
      currElt.style.backgroundColor = "#00ff99";
    }
    else
    {currElt.style.backgroundColor = "#ff9999";}
  }

  score = Math.round(score/numQues21*100);
   

  document.getElementById("percentage21").innerHTML=score + "%";
  var correctAnswers = "";

  for (i=1; i<=numQues21; i++) {
    correctAnswers += i + ". " + answers21[i-1] + "<br />";  }
var txt = "";
    if (score == 100)
    {
  txt = "Great Job, you got them all correct! Now make sure you can remember the answers.";

    document.getElementById("feedbackArea21").style.color = 'green';
    document.getElementById("percentage21").style.color = 'green';
    document.getElementById("feedbackArea21").innerHTML=txt;
    
  }
  else if (score <100 && score >=50)
    {
      txt = "Pretty good, but you didn't get them all correct. Try again or scroll down for the correct answers." + "  <br /> \r\n <br />" + correctAnswers;
    document.getElementById("feedbackArea21").style.color = 'orange';
    document.getElementById("percentage21").style.color = 'orange';
     document.getElementById("feedbackArea21").innerHTML=txt;
      
    }
  else
  {
  txt = "You didn't get them all correct, try again or scroll down for the correct answers." + "  <br /> \r\n <br />" + correctAnswers;

    document.getElementById("feedbackArea21").style.color = 'red';
    document.getElementById("percentage21").style.color = 'red';
       document.getElementById("feedbackArea21").innerHTML=txt;
  }}
