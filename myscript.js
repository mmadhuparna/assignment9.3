//combining arrays
var evens =[2, 4, 6, 8];
var odd = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];
var numbers = [...primes, ...evens, ...odd]; // using spread operator
console.log(numbers);

//copyin array primes into another array
var newArray = [];
newArray = [...primes];
console.log(newArray);

//destructuring objects
var jamesBond = {
  first: 'James',
  last: 'Bond',
  country: 'United States',
  city: 'New york',
  twitter: '@jamesbond'
};
var{first, last, country, city, twitter} = jamesBond;
console.log(first+" " + last);
console.log(country);
console.log(city);
console.log(twitter);

//destructuring arrays
var players = ['paul', 'andy', 'darrell', 'jim'];
var[player1, player2, player3, player4] = players;
console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);