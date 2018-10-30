'use string'

let counter = 0
let username = prompt('what is your name')
 console.log( 'my name is ' + username + '.')

let people = prompt("Do you think Womens Population are higher than Mens?")
  console.log('womens population is much higher than men.')
if(people.toLocaleLowerCase() === 'yes' ||
people.toLocaleUpperCase() === 'YES' ||
 people.toLocaleLowerCase() === 'y' ||
 people.toLocaleUpperCase() === 'Y'){
  alert(people + ', correct,acordind to the statistics Womens Population is more higher than Mens.')
   counter++
 }else {
  alert(people  + ', Wrong, the answer is yes.')
}
let person = prompt(" can a man live a month without   water?")
console.log('a human bing can not live more than seven days without water.')
if(person.toLowerCase() === 'yes' || 
person.toUpperCase() === 'YES' ||
person.toLowerCase() === 'y' ||
person.toUpperCase === 'Y' ){
  alert(person + ', is incorrect, a person can not live without water.') 
  counter++
} 
  else{
  alert(person + ',  is correct. a person can not live without water.')
}

let pig = prompt("they say, Pig is the smartest animal in the world?.")
console.log('pig is one of the fourth smartest aninal in our planet.')
if((pig.toLowerCase() === 'yes') ||
(pig.toUpperCase() === 'YES') ||
(pig.toLowerCase() === 'y') ||
(pig.toUpperCase() ==='Y' )){
alert(pig + " is correct. good to know yourself!.") 
counter++
}else{
  (pig + 'is incorrect. you don\'t know yourself')
}
let guy = prompt('can you touch your right ear with your left hand over your head?.')
console.log('every one can do thet. don\'t think you are smart.')
 if(guy.toLowerCase() === 'yes' ||
 guy.toUpperCase() === 'YES' ||
 guy.toLowerCase() === 'y' ||
 guy.toUpperCase() === 'Y' ){
  alert(guy + ", is correct, you are fool.")
  counter++
  }
else{
  alert(guy + 'is incorrect, don\'t afraid to try!.')
 }
let animal = prompt ("is Cheter the fastest animal in the world?.")
console.log('cheter is the fastest land animal in the world.')
 if(animal.toLowerCase() === 'yes' ||
 animal.toUpperCase() === 'YES' ||
 animal.toLowerCase() === 'y' ||
 animal.toUpperCase() === 'Y' ){
alert(animal + ' cheter is the fastest animal in the world . butt he dosen\'t know JS.')
counter++
 }
  else{
 alert(animal + 'is not correct. cheter is the fastest animal in the world.')

 let languageArray = ['English', 'spanish', 'amharic', 'french']

for(let i = 0; i < languageArray.length; i++){
  let languagesspoken = prompt('how many official languages spoksn in DC?')
  if((languageArray.length -1) - (i) === 0) {
    alert('sorry,you\'re out of chances.move to the nexet question')
  }
  else if(languagesspoken === '4') { 
    alert('Great job! this ' + languagesspoken + ' languages are the official languages in Dc')
    
    counter++
    i = languageArray.length
  } else if(languagesspoken < '4') {
    alert('Sorry, that\'s too few. You have ' + ((languageArray.length -1) - (i)) + ' more chances.'
    )
  } else if(languagesspoken > '4') {
    alert('Sorry, that\'s too many. You have ' + ((languageArray.length -1) - (i)) + ' more chances.'
    )
  }
  console.log('Index is now', i)
  console.log(languageArray[i])
}

for(let i = 0; i < 6; i++){
  let languagesspoken = prompt('what are the top four international languages?')
  if(i === 5) {
    alert('Sorry, you\'re out of chances. Move on to the next question.')
  }
  else if(languagesspoken.toLowerCase() === 'english') {
    alert('Great job! ' + languageArray[0] + ', ' + languageArray[1] + ', ' + languageArray[2] +' and ' + languageArray[3] + '.' + ' are highly spoken languages.')
    counter++
    break
  } else if(languagesspoken.toLowerCase() === 'french') {
    alert('Great job! ' + languageArray[1] + ' , ' + languageArray[0] + ' , ' + 'languageArray[2] ' + ' and ' + languageArray[3]  + ' are highly spoken languages.')
    counter++
    break
  } else if(languagesspoken.toLowerCase() === 'Spanish') {
    alert('Great job!' + languageArray[2] + ' , ' + languageArray[0] +', ' + languageArray[1] +' and ' +  languageArray[3] + ' are highly spoken languages.')
    counter++
    break
  } else if(languagesspoken.toLowerCase() === 'chinish') {
    alert('Great job! ' + languageArray[3] + ' , ' + languageArray[0] +', ' + languageArray[1] +' and ' + languageArray[2] + 'are highly spoken languages.')
    counter++ 
    break
  } else if(languagesspoken !== languageArray[i]) {
    alert('Sorry, that\'s not a languages speaks. You have ' + ((languageArray.length + 1) - (i) + ' more chances.'))
  }
  console.log('Index is now', i)
  console.log(languageArray[i])
}
let = confirm('Good Job ' + username + '! You got ' + counter + ' out of 7 questions correct.')

console.log('goodjob, game over.')
}