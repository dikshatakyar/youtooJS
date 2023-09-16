/**
 * Event Delegation : technique of handling events in a webpage in a better way. Based upon event bubbling.
 *
 * instead of attaching event handlers to each and every element, we should rather attach event handler directly to the parent of these element
 * (single event listener to the parent)
 * because of the concept of event bubbling, our events are propagated up the hierarchy and the parent is listening to all the events.
 * it is only possible due to event bubbling
 */

document.querySelector("#category").addEventListener("click", (e) => {
  // console.log(e.target); //using this we can know where the user clicked and then redirect the user to that particular page
  console.log("Category Parent Clicked !!");

  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

/** only redirect when e.target is actual a li element
 * as we should not directly redirect as suppose if we had some nested different element, if we clicked on those element, the event will bubble up.
 */

/**
 * PROS :
 * - we attach single event handler, so it saves a lot of memory and does optimisation.
 * - writing less code, as we attach event handler to the parent
 * - DOM Manipulation :  if the new children are adding up in the DOM, it doesn't matter as parent is anyways listening
 *
 *
 *
 *
 *
 *
 * CONS :
 * - all the events are not bubbled up, some events like blur, focus, resizing of the window. as they have their own risks.
 * - common ones are bubbled up
 * - to let event delegation work, we can't use stopPropagation()
 */
