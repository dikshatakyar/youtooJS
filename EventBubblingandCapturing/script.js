/**
 * Event bubbling and capturing are two ways of event propagation in the DOM tree.
 *
 * suppose :-
 *      div #grandparent    => onClickGparent();
 *          div #parent     => onClickParent()
 *              div #child  => onClickChild()
 *
 *
 * EVENT BUBBLING :- if we click on child, the onClickChild() would be called first, then it moves up to the hierarchy and it goes directly to the end of the DOM. Bubble always comes out, so the event is bubbling out the DOM tree.
 * EVENT CAPTURING(EVENT TRICKLING) :- "THE UPWARDS DOWN" i.e capturing down the DOM tree. All the 3 event handlers will be triggered but the order would be completely different to what was there in event Bubbling. When we click on child, the grandparent would be called first, then the parent, then the child.
 *
 *
 * -----------------------------------------------------------------------------------------------------------
 *
 * IMPLEMENTATION :-
 *   - in the addEventListener(), we can pass the third argument as a boolean useCapture flag.
 *     addEventListener('click', () => {}, useCapture)
 *     when useCapture => true : eventcapturing is enabled
 *     if we don't pass any attribute or a falsey value : eventbubbling
 *
 *  */

//implementation :
document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent CLicked !!");
    e.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent CLicked !!");
    // e.stopPropagation();
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child CLicked !!");
    e.stopPropagation();
  },
  true
);

/**
 * whole chain is anyways followed, using a mix and match
 * => according to w3c, first the event capturing happens then bubbling out happens
 *
 * ==> STOP PROPAGATION
 * - since bubbling and capturing are quite expensive things
 * - in callback method of addEventListener, we have access to event object(e), e has access to e.stopPropagation(), other event handlers won't be called
 * - in case of event capturing, when we click on child with e.stopPropagation(), grandparent, child and parent would be called in the correct order, because, in case of event capturing we started with grandparent and at last child.
 */
