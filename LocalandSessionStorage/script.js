/**
 * web storage API is used to store some data into the web browsers.
 * this data is key-value pair of strings
 *
 * two mechanisms :-
 * local and session
 *
 *
 * Session : data is persisted for that particular session. suppose a user visits the site, session is started, and the data would be persisted till he is there on the window, when tab is closed it is lost.
 *
 * - better than cookies : unlike cookies, session storage data is not being sent to the server, also session storage has a larger capacity to store. in session storage min 5mb can be stored
 *
 *
 * LOCAL : it does not clears itself, even when the user closes the web browser, or shut downs the system and comes back again to the website, the data is still persisted. We can keep the data as long as we want. It has highest memory capacity, when compared to session storage or cookies.
 *
 * Data which is not relevant to store at server, or it can be used in cases of optimization. Getting the data from local storage is faster than making a network call to the server.
 * Local storage is in the application tab.
 *
 * They follow same origin policy : origin has : PROTOCOL, HOST, PORT
 * i.e we can access the data whenever it's on same origin
 * local storage for each an every origin is different in the browser.
 * local storage is stored on the window object of the browser
 */

/** TUTORIAL  */

localStorage.setItem("hello", "world");

//to fetch :
console.log(localStorage.getItem("hello"));

//remove :
localStorage.removeItem("hello");

//to clear everything :
localStorage.clear();

// we generally store object in local storage

const user = { name: "Diksha" };

//this function tries to parse object into string
// console.log(String(user));
localStorage.setItem("user", user);

//but we want original object :
localStorage.setItem("user : ", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user : ")));

/**
 * JSON.stringify() is used to convert an object to JSON string
 * 
 * JSON.parse() converts JSON strings into JS object
 */