//1. FETCH API (working)

const GITHUB_API = "https://api.github.com/users/dikshatakyar";

const example = async () => {
  const user = await fetch(GITHUB_API);
  console.log("user : ", user); //response object

  /**
   * fetch() takes one argument — the path to the resource you want to fetch — and returns a promise that resolves with a Response object.
   */

  const myUser = await user.json();
  console.log("myuser : ", myUser);
  /**
   * The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
   */
};

example();

//--------------------------------------------------------------------------------------



