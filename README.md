<h1 align="right">
  <img src="assets/logo.jpeg" width="200px" align="left" />
  x-www-form-urlencoded to JSON
</h1>

<p align="right">
  A simple web tool that converts an x-www-form-urlencoded string to JSON
  <br><br>
  <a>
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=091D33&color=1D72A8">
  </a>
</p>

<br>
<br>

> **Note**
>
> Take a look at https://pferreirafabricio.github.io/x-www-form-urlencoded-to-json/ for a live test

## ⚙ How it works

The conversion is made in 6 simple steps:

> x-wwww-form-urlencoded example: `name=Tom&surname=Platz&age=68`

1. Blank characters at the start and at the end of the string are removed
2. Split the string into an array by the `&` character
```js
[
  'name=Tom',
  'surname=Platz',
  'age=68'
]
```
3. Each string inside the array is split again, now by the `=` character
```js
[
  ['name', 'Tom'],
  ['surname', 'Platz'],
  ['age', 68]
]
```
4. Each array inside the array maps the values to the function [decodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
```js
['name', 'Tom'] -> [decodeURIComponent('name'), decodeURIComponent('Tom')]
['surname', 'Platz'] -> [decodeURIComponent('surname'), decodeURIComponent('Platz')]
['age', '68'] -> [decodeURIComponent('age'), decodeURIComponent('68')]
```
> We need to do this because some values may be encoded, for example: `From=%2B12012537162` where `%2B`, when decoded by [decodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent), will return the `+` character
5. We take the array of array, now adequately sanitized, and call the [Object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries), to transform the array of arrays into an Object
```js
{
  name: 'Tom',
  surname: 'Platz',
  age: 68
}
```
6. Finally we call [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) using the third parameter (space) as `2` to have better visualization of the JSON
```json
{
  "name": "Tom",
  "surname": "Platz",
  "age": "68"
}
```

The final function will be:
```js
function convertToJson(value) {
  return JSON.stringify(
    Object.fromEntries(
      value
        .trim()
        .split("&")
        .map((s) => s.split("="))
        .map((pair) => pair.map(decodeURIComponent))
    ),
    undefined,
    2
  );
}
```

## ✨ Features
- Converts an x-www-form-urlencoded string to JSON
- Provides a user-friendly interface to input the string and view the converted JSON
- Allows users to copy the converted JSON to the clipboard
- Free and online tool

## 🏄‍♂️ Quick Start
 1. Clone this repository `git clone https://github.com/pferreirafabricio/x-www-form-urlencoded-to-json.git`
 2. Enter in the project's folder: `cd x-www-form-urlencoded-to-json`
 3. Open the `index.html` in your browser

## :bricks: This project was built with: 
- HTML
- CSS
- JavaScript

## 📚 References
- [How to convert an x-www-form-urlencoded string to JSON?](https://stackoverflow.com/a/65512971/12542704)
- [Re: How to convert an x-www-form-urlencoded string to JSON?](https://community.broadcom.com/enterprisesoftware/communities/community-home/digestviewer/viewthread?GroupId=1255&MessageKey=417be054-5933-4f1f-b237-b3bca4570ae0&CommunityKey=0f580f5f-30a4-41de-a75c-e5f433325a18&tab=digestviewer)
