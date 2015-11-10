import Ember from 'ember';

export function numberWithDelimiter(params/*, hash*/) {
  const number = params[0].toString();
  var e = 0;
  const parts = [];
  var quit = false;
  
  do {
    let arg1 = e - 3;
    let arg2;
    if (e < 0) { arg2 = e; }

    let nextPart = "";

    if (!arg2) {
      nextPart = number.slice(arg1);
    } else {
      nextPart = number.slice(arg1, arg2);
    }

    if (nextPart.length > 0) {
      parts.unshift(nextPart);
      e = e - 3;
    } else if (nextPart.length === 0) {
      quit = true;
    }

  } while (!quit);

  return parts.join(",");
}

export default Ember.Helper.helper(numberWithDelimiter);
