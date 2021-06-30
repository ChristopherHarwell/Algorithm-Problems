<h1>Array of Products <br/><br> 
<i>Medium Difficulty<i> 
</h1>

<h3><b>Instructions:</b></h3>
<p>
  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at **output[i]** is equal to the product of
  every number in the input array other than **input[i]**

  *Note that you're expected to solve this problem without using division.*
</p>
<hr>

<h2 style="color: white">Sample Input:</h2>

```javascript
array = [5, 1, 4, 2]
```

<h2>Sample Output:</h2>

```javascript
[8, 40, 10, 20]
 
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4
```
<hr>

<h2>Pseudocode Solution:</h2>

My pseudocode solution can be found in this [video]('https://youtu.be/yllmY1ERx5s')