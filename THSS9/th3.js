let userName = prompt("Who's there?",);
if (userName == 'admin'){
  let pass = prompt('Password?',);
  if (pass == 'themaster') {
    alert('Welcome!');
 } else if (pass == null) {
    alert('Canceled.');
 } else {
    alert('Wrong password');
 }  
} else if (userName == null) {
    alert('Canceled');
 } else {
    alert("I don't know you");
 }