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