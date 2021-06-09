# top100
top100 is a code challenge demonstrating a quick and effiect way to handle millions of inputs and sort them by the top 100 inputs.

## How to use
This code is designed to be used on a node server or in the browser. It's currently very lean and to the point. You can demo the code by copying index.js and pasting it into your browser console. You can then run this sample bit of code to test it out.

INSERT SAMPLE HERE
```
// Place whatever characters here to simulate IP addresses
const txt = "abcdefghijklmnopqrstuvwxyz";
const startTime = performance.now();
for(let i = 0; i < txt.length; i++) {
    request_handled(txt[i]);
}

console.log(top100());
console.log(performance.now() - startTime);
```

## Benchmark Test
```
Entries: 107280
Processing Time: 59.9 ms
```

## Q/A 

What would you do differently if you had more time?
I would write this in typescript to keep it type safe. I would also convert the code to be an ES6 module so that it could be imported by other files.

What is the runtime complexity of each function?
request_handled - the master list of all ips coming in are stored in an Object and lookups are done by key index where the key is the ip. Guards are in place to make sure a new IP is greater than the smallest value by checking the last index of the top100array. If it does pass that check the value is then checked if it already exists in the top100arr. If does exist it won't be readded. If does not exist in the array it is pushed. After this the top100Arr is sorted from greatest to least. If the sorted array is greater than 100 the last entry is removed from the array.

top100 - this method is very quick since it needs to map over the top100arr and return just the ips. The array is max 100 entries.

clear - this method simply resets the ipMap back to an empty object and the top100arr to an empty array.

How does your code work?
Please see above descriptions and the code.

What other approaches did you decide not to pursue?
Storing all the items into a single array and then doing a lookup any time a new entry came in would have worked. The problem with that approach is that it would be really slow since it would need to loop the array until it found the entry it was looking for. This would have also meant that the top100 method would be slow since it would need to loop through all entries in the array and sort them.

How would you test this?
I've included a quick and dirty test to this README. If I was to add this to a product I would use a testing libray like jasmine or jest and write unit tests that would make assertions on what the outcome should be.
