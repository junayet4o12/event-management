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

<details><summary><b> Answer</b></summary>
<p>

#### Answer: A: `{}`?

<i>The first let variable(greeting) and the second variable(greetign) which is not declared are not same. they have spelling mistake. but we console the second one (greetign) and its value is empty object({}). the consoled answer is empty object it means A: `{}`</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C:'12'

<i>There is no console in this code. But we got a return. And the return value is 12. Cause, the given arguement is 1 and '2' . We sum them in function and return it. the first argument(1) is int. But the second one('2') is string. Generally, when a int is added with an string, it(int) also becomes a string. So, 1(int) and '2's sum is '12'. cause 1  become a string and they return 12 and it is also a string.</i>

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

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Cause, the food value is ['🍕', '🍫', '🥑', '🍔'] we have done many thing in the code like we have made an object which value is first element of food and then we have replaced the value to 🍝. but this change only for info it doesnot make any change in food array. then we console the food. the food value is not change so the consoled ans is ['🍕', '🍫', '🥑', '🍔']</i>

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

#### Answer: B: `Hi there, undefined`

<i>Because, We make a funcition name sayHi and it takes a parameter(name). Then we return  Hi there, and the name in a template string. and we call the function in console out side of function. so the return value of function is shown in console. the out put is Hi there, undefined. cause the name parameter has not any value and its value is not given in any arguments and there is no arugement where the function called so we get undefined in name's output.</i>

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

#### Answer: C:3?

<i>count is a let variable and its initial value is 0. then we have an array and its value is [0, 1, 2, 3]. then we make a foreach loop for nums array. this loop take every element of nums. for each element, if the element is truthy the count's value increases by 1. at first come 0 and its a falsy value. so count is not increased but then come 1 its a truthy value so count is increased by 1  and then come 2 and 3 one by one and they are true value. for each value count is increased by 1 and his counting ends in 3, cause there are 3 truthy value in nums array. so the ans is 3</i>

</p>
</details>
