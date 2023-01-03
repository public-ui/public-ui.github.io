/*!
 * KoliBri - The accessible HTML-Standard
 */
"use strict";const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},STATE_CHANGE_EVENT=new Event("StateChange");exports.STATE_CHANGE_EVENT=STATE_CHANGE_EVENT,exports.isObject=isObject,exports.isString=isString,exports.isStyle=isStyle;