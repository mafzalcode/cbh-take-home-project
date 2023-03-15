# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## My Explanation Starts Here
I've added the modified version of the function in the new file `dpkNew.js`

I made the following changes to refactor:
- I removed the outermost if-statement because it's redundant. If candidate is falsy, then it will be set to a hash of the event in the next if-statement.
- I added optional chaining to access event.partitionKey. This makes the code more concise and avoids the need for an explicit if-statement and removed TRIVIAL_PARTITION_KEY since it only appears once in the code and using fall back for it.
```javascript
  let candidate = event?.partitionKey || "0";
```
- I used the nullish coalescing operator (??) to provide a default value of "" for JSON.stringify if event is falsy. This simplifies the code and makes it more concise.
```javascript
    const data = JSON.stringify(event ?? "");
```
- I removed the innermost if-statement because it's unnecessary. JSON.stringify always returns a string, so it's safe to assume that candidate is a string at that point.

Overall, I believe that my version is more readable because it eliminates unnecessary code and reduces redundancy. It also makes use of modern JavaScript features like optional chaining and the nullish coalescing operator, which can make the code more concise and easier to read.
