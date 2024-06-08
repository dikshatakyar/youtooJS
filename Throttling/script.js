/**
 * used mainly in : performance optimisation and rate limiting
 * 
 * Throttling and Debouncing are used for making performant webapps. 
 * How do they do this? => by limiting the rate of execution of function calls.
 * 
 * 
 * 
 * DEBOUNCING : difference b/w 2 keystroke events is over a certain time(eg : >300ms), then make an API call.
 * this is mostly used in e-commerce.
 * 
 * THROTTLING : if there are lot of events happening, only make the function call after a certain period of time. Here, we check the difference b/w 2 function call is over a certain time, then make an API call.
 * Scenarios of throttling : to track how frequently user is resizing it.
 * to throttle : setting an interval.
 * 
 * 
 * -----------------------
 * suppose if a user is constantly clicking a BUTTON :-
 * debouncing : we can delay the call, or the function call should be made when the diff b/w the events is >500ms
 * throttling : clicking a button, here throttling makes more sense, like the next click should be made after 500ms. 
 * 
 * 
 * 
 * WHAT IS BETTER?
 * - depends on use case or scenario.
 * 
 */