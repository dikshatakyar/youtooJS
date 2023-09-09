/**
 * CORS : cross origin resource sharing
 * 
 * - CORS is a mechanism which uses additional HTTP headers to tell the browser whether a specific webapp can share resource with another webapp. Both the web app should have different origin.
 * 
 * - by origin we mean : dikshatakyar.in 
 * suppose this website wants to request data from another domain like : google.com/api/getdata 
 * so this was not allowed, even if we call subdomains like : api.dikshatakyar.in (this was not allowed) and neither different ports, like making request to : dikshatakyar.in:5050. Neither different protocols were allowed like calling an HTTP from HTTPS.
 * 
 * when CORS became a standard, the browser allowed all the above things. 
 */


/**
 * 1. HOW CORS WORK? 
 * - suppose we have 2 apps on different origin, when app A request something from B, a CORS Preflight mechanism is followed i.e a preflight call is made before the actual call is made.
 * The browser now uses additional HTTP header to verify this request first. 
 * Browser makes a preflight call(also called OPTION CALL) and then the server verifies whether the call is valid or not. If this is valid, B will send some additional HTTP header which will let the client(A) know that it is verified, then the actual call is made.
 * 
 * 
 * 2. ADDITIONAL HTTP HEADER :
 *  : Accept-Conrol-Allow-Origin (this is set as * as any domain can access it)
 * 
 * 
 * 
 * 3. PREFLIGHT CALL MADE FOR ALL REQUEST?
 *  : no, some request are tagged as simple request. 
 * 
 *  
 */