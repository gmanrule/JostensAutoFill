// ==UserScript==
// @name         Yearbook Avenue Autofill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  because Jostens doesn't like auto-fill for whatever reason
// @author       Garrett B.
// @match        http://yearbookavenue.jostens.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //start userscript
    function autofill() {
    /*var txtJobNumber = document.getElementById("txtJobNumber").value;
alert(txtJobNumber);
txtJobNumber = "3748";*/

    document.getElementById("txtJobNumber").value = "3748";
} //end userscript
})();
