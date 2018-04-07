function addTogether(x) {
   function isNum(myNum) {
      if (typeof myNum !== "number" || typeof myNum === "string") {
         console.log("undefined");
         return undefined;
      } else {
         return myNum;
      }
   }

   if (arguments.length > 1) {
      x = arguments[0];
      var y = arguments[1];

      if (x === undefined || y === undefined) {
         // check if either param is undefined.
         console.log("x or y is undefined");
         return undefined;
      } else {
         if (typeof y === "string" || typeof x === "string") {
            return undefined;
         }

         if (isNum(x) !== undefined && isNum(y) !== undefined) {
            // check if both are numbers.
            return x + y;
         }
      }
   }

   if (x === undefined || isNum(x) === undefined) {
      console.log("x is undefined");
      return undefined;
   } else {
      return function(y) {
         if (y === undefined || isNum(y) === undefined) {
            console.log("y is undefined");
            return undefined;
         }
         //console.log(x + y);
         return x + y;
      };
   }
}

//var sumTwoAnd = addTogether(2);

console.log(addTogether(2, "3"));

//sumTwoAnd(5); // 7