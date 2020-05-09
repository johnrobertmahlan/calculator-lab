# Calculator App

Herewith some closing thoughts on this calculator app, which I will not work on for the foreseeable future. It works *almost* entirely as intended, with one exception.

Suppose you enter the following: `5 + 5 - 2` and then hit the equal sign. You'd expect the result to be *8*, but the calculator returns *-2*. 

The reason is the way the render function was built into the equal sign. When you hit `5+5`, the following evaluates to true: `operation === 'addition'`. But if you do not hit the equal sign at this point, and simply move on to enter `-2`, then `operation === 'addition'` no longer evaluates to true; instead, `operation === 'subtraction'` evaluates to true. When you then hit the equal sign, there are three elements in our array:

`inputs = [5, 5, 2]`

Since the `operation` variable can take just one value at a time, its value is `subtraction`. Thus, the numbers in that array are *subtracted* from one another. This is why we get a result of `-2`: 5 minus 5 equals 0, and 0 minus 2 equals -2.

One possible solution to this problem is to rethink the way operations are determined. We might try pushing the operator symbols themselves into our array and then running through the array to calculate. In that case, our array would look like this:

`inputs = ['5', '+', '5', '-', '2']`

Then we could write a loop that performs the appropriate operations.

Unless and until this edit is made, the calculator app will work *only if* the user hits the equal sign for every operation they wish to perform. To get the correct result for `5 + 5 - 2`, the user simply has to hit the equal sign after entering `5 + 5`, then hit `-2` followed by the equal sign. The result will be `8`, as it should be.