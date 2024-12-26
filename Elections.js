function validation() {
    document.getElementById('author').classList.add('hide');
     var year = document.getElementById('year').value;
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
  const date = month + ' ' + day + ', ' + year;

class AgeForVoting {
    constructor(date) {
      this.date = date;
  }

     LimitTime() {
   var initialDate = new Date('January 1, 2000');
   var initial = initialDate.getTime();

   var finalDate = new Date('January 1, 2018');
   var final = finalDate.getTime();

   return final - initial;

 } 
 
  CurrentTime() {
      var time = new Date();
    return time.getTime();
 }
 
  UserTime() {
    var myDate = new Date(this.date);
    return myDate.getTime();
 }
 
  Conditional() {
       if (this.LimitTime() <= this.CurrentTime() - this.UserTime()) {
        document.getElementById('text').innerHTML = "Old enough to vote." + "<br>" + "Please click the image to registrate for the 2024 elections.";
      document.getElementById('image').classList.remove('hide'); // <<<---- HERE     
    } else if (this.LimitTime() > this.CurrentTime() - this.UserTime()) {
        document.getElementById('text').innerHTML = "NOT old enough. Try again when you become 18.";
    } else {
        document.getElementById('text').innerHTML = "Sorry, try again.";
    }
  }
}

const voting = new AgeForVoting(date);
console.log('Constant num: ' + voting.LimitTime());
console.log('Machine num:  ' + voting.CurrentTime());
console.log('User num:     ' + voting.UserTime());
console.log('The diff.:    ' + (voting.CurrentTime() - voting.UserTime()))
voting.Conditional(date);



/* window.alert(voting.UserTime() * 31556952000);
*/}

function userInformation() {
   document.getElementById('text').innerHTML = "Please, fill the information requested.";
 document.getElementById('credentials').classList.remove('hide');
 document.getElementById('presidentSelection').classList.remove('hide')
}

function registration() {
       var first = document.getElementById('first').value;
   var surname = document.getElementById('surname').value;
   var ssn = document.getElementById('SSN').value; 
   var candidate = document.getElementById('president').value;
   console.log(candidate);
   
           if (ssn < 1000000000 && ssn > 1010001&& first!="" && surname!="" && candidate!="--Select a president") {
           document.write("The information provided has been processed.<br>" + "The citizen " + first + " " + surname + " has successfully voted for " + candidate + ".");
           document.write("<br><br>God Bless America.");
       } else {
               document.getElementById('text').innerHTML = "Please, revise your responses.";
       }
   } 
