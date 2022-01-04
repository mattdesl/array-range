/**
  * Hello Matt!
  * Just wanted to contribute to you work. Let me know if this is ok with you and you can merge it with you master
  *
  * 1. @start: will always have default value of 0
  * 2. @end: will require validation on program start
  * 3. changes made to accomodate ES6
  * 4. returns empty array even if no arguments are fed when the module is invoked
  *
  * Cheers and have a nice day.
  **/


module.exports = (start = 0, end) => {
  let startStatus = (!Number.isNaN(start) && typeof start === "number");
  let endStatus = (!Number.isNaN(end) && typeof end === "number");

  /* make sure we have the right value for start */
  start = (!startStatus) ? 0 : start;
  startStatus = true;
 
  /* when end is a falsy value type */
  if (startStatus && !endStatus) {
    end = start;
    start = 0;
  }

  /* we need to make sure that length value for initializing array is always 0 or positive */
  const length = end - start;

  if (length < 0) {
    throw new Error("Difference between 'end' and 'start' must always be '0' or greater");
  }
  else {
    /* initialize */
    let arrayOfNumbers = new Array(length); 

    /* iteration to create array */
    for (let i = 0, currentValue = start; i < length; ++i, ++currentValue) {
      arrayOfNumbers[i] = currentValue;
    }

    /* return to caller */
    return arrayOfNumbers;
  }
}

