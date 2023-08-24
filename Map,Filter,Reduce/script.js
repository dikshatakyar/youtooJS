const Users = [
  {
    firstName: "Diksha",
    lastName: "Takyar",
    age: "20",
  },
  {
    firstName: "Vandana",
    lastName: "Pradhan",
    age: "21",
  },
  {
    firstName: "Ishank",
    lastName: "Bansal",
    age: "22",
  },
  {
    firstName: "Aishanya",
    lastName: "Singh",
    age: "19",
  },
];

/**TASK 1 : give a list of full names */

const fullName = Users.map((person) => {
  return person.firstName + " " + person.lastName;
});

console.log(fullName);

/**TASK2 : find the age and the no. of people associated with it.
 * ans should be : {19 : 1, 21 : 2, 22 : 1}
 */

const Ages = Users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(Ages);

/** TASK3 : find the first name of all the people whose age is less than 21 */

const Jawans = Users.filter((person) => person.age < 21).map(
  (obj) => obj.firstName
);

console.log(Jawans);
