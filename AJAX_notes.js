/* AJAX - Asynchronous JavaScript And XML//
 AJAX allows background data to load without blocking page context

//documentation: http://api.jquery.com/jquery.ajax/
1. gather data/prepare request (javascript)
2. handle request/send response (ruby)
3. handle response (javascript)

AJAX Request Necessities
jQuery.ajax( url [, settings ] )
-settings is optional
*/

// BASIC SYNTAX //
// $.ajax takes a hashmap of options as an argument.
var ajaxRequest = $.ajax({
  // these two attributes determine which route in your controller will be called.
  url: "/foo",
  type: 'POST',
  // the 'data' attribute determines what data is sent to the server.
  // The server will be able to access these values using the params hash.
  // If the server only needs to know information passed in the URL, this attribute is not necessary.
  data: { bar: 'baz' }
})

// the .done function takes a callback, which will only be fired if the server responds
// with a success status code. the callback will receive arguments corresponding to the
// request object, status, and data sent from the server.
ajaxRequest.done(someCallbackFunction)

// like the .done function, the .fail function will fire off a callback if the server responds
// with an error status code.
ajaxRequest.fail(someOtherCallbackFunction)
