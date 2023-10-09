<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b> A: `{}`..The first let variable(greeting) and the second variable(greetign) which is not declared are not same. they have spelling mistake. but we console the second one (greetign) and its value is empty object({}). the consoled answer is empty object it means A: `{}`</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C:'12' . There is no console in this code. But we got a return. And the return value is 12. Cause, the given arguement is 1 and '2' . We sum them in function and return it. the first argument(1) is int. But the second one('2') is string. Generally, when a int is added with an string, it(int) also becomes a string. So, 1(int) and '2's sum is '12'. cause 1  become a string and they return 12 and it is also a string.</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`   Cause, the food value is ['🍕', '🍫', '🥑', '🍔'] we have done many thing in the code like we have made an object which value is first element of food and then we have replaced the value to 🍝. but this change only for info it doesnot make any change in food array. then we console the food. the food value is not change so the consoled ans is ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>
