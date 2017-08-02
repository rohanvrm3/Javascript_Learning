//this is spartaa
//console.log(name);

/*

var name = 'John';
console.log(name);

var lastName = "Smith"; //camelcase
console.log(lastName);

var age = '26';
console.log(age);

var fullAge = "true";
console.log(fullAge);

// lecture: variables 2
var name = 'John';
var age = 26;
console.log(name + age);
console.log(age + age);

var job, isMarried;
console.log(job);
job = 'teacher';
isMarried = 'false';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// lecture operators

NowAge=21
var ageJohn = 36;
var ageRam = 36;

var ageRam = NowAge * ageJohn*2 * (ageJohn - ageRam);
console.log(ageRam);

console.log(NowAge);

// Lecture: If/Else statements


var name = "Rohan";
var age = 26;
var isMarried = "no";

if (isMarried == "yes")
  {
    console.log(name + " is married");
  }
  else
{
  console.log(name + " is not married yet");
}

isMarried = true;

if (isMarried)
{
  console.log('yes');
}


// lecture: Boolean operators and switch case

var age=25;

if (age<10)
{console.log('teenager');
} else if (age < 20 || age > 30)
{console.log('John is a young guy');}
else {
  console.log('Big guy');
}

var dance = 'salsa';

dance = prompt('what type of dance is this');

switch (dance) {
  case 'salsa':
  console.log('This is salsa dance');
  break;
  case 'kathak':
  console.log('this is sparta');
    break;
  default:
  console.log('bitches');

}

// coding challenge 1

var johnAge = 111; var johnHeight = 120;
var paulAge = 111; var paulHeight = 120;
var kevinAge = 111; var kevingHeight = 120;

var johnR = johnAge + (5 * johnHeight);
var paulR = paulAge + (5 * paulHeight);
var kevinR = kevinAge + (5 * kevingHeight);

if (johnR > paulR && johnR >= kevinR) {
  console.log('Yay! John wins.' + ' John score is: ' + johnR);
} else if (paulR > johnR && paulR >= kevinR ){
  console.log('Yay! Paul wins. Paul score is: ' + paulR);
} else if ( kevinR > johnR && kevinR >= paulR ) {
  console.log('Yay! Kevin wins. Kevis score is: ' + kevinR);
} else {
  console.log('it\'s is a draw!');
}

*/

// learning functions

var currentYear = 2016;

function calculateAge(yearOfBirth) {
  var age = currentYear - yearOfBirth;
  return age;
}

var ageRohan = calculateAge(1992);
var ageAkshay = calculateAge(1967);
var ageJohn = calculateAge(1987);

function yearOfRetirement (name, year) {
  var age = calculateAge (year);
  var retirement = 65 - age;

    if (retirement >= 0)
    {
      console.log(name + ' retires in' + retirement + ' years');
    } else {
    console.log(name + ' has already retired' + 'it\'s been ' + (retirement * -1) + ' years');
    }
}

yearOfRetirement('Rohan', 1990);
yearOfRetirement('Akshay', 1967);
yearOfRetirement('John', 1909);
