<div>
    <p style="font-size:1.3rem">Step 1:<br>
        <span style="font-size: 0.9rem">
            Create a variable called <i style="color: red">current</i> that will contain
            the current smallest difference. Set it to equal <i style="color: purple">Infinity</i>.
        </span>
    </p>
</div>
<hr />
<div>
    <p style="font-size:1.3rem">Step 2:<br>
        <span style="font-size: 0.9rem">
            Sort both arrays in ascending order.
        </span>
    </p>
</div>
<hr />

<div>
    <p style="font-size:1.3rem">Step 3:<br>
        <span style="font-size: 0.9rem">
            Loop through both arrays using a while loop, instead of a for loop.
            <br/>
            For example:
    </span>
            <pre>
let indexOne = 0;
let indexTwo = 0;
while(indexOne < array.length && indexTwo < array.length) {
    // the rest of the code here
}
            </pre>
</div>
<hr />

<div>
    <p style="font-size:1.3rem">Step 4:<br>
        <span style="font-size: 0.9rem">
            Check if the value of index <i style="color:red">i</i> in the first array is greater than the value at index
<i style="color:red">j</i>
            in the second array
        </span>
    </p>
    <ul>
        <li>If the value at index <i style="color:red">i</i> is greater than the value at index 
            <i style="color:red">j</i> change the value of <i style="color:red">current</i> to the value at the current
            index of the first array minus the value of the current index of the second array</li>       
        <li>Increase the current index of the second array by one</li>
    </ul>
</div>
<hr />

<div>
    <p style="font-size:1.3rem">Step 5:<br>
        <span style="font-size: 0.9rem">
            If none of the values of the first array are greater than or less than the values contained in the second 
            array
        </span>
    </p>
    <ul>
        <li>The values are equal so return zero</li>
    </ul>
</div>
<hr />

<div>
    <p style="font-size:1.3rem">Step 6:<br>
        <span style="font-size: 0.9rem">
            If the smallest difference is greater than <i style="color:red">current</i> update the value of the smallest difference to be 
            equal to <i style="color:red">current</i>
        </span>
    </p>
</div>
<hr />