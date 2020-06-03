# typescript

## 基础类型

### 介绍

- typescript 不仅继承了 js 的七大数据类型（Boolean、String、Number、undefined、null、Symbol、Object）外，还提供了其他六种（元组、枚举、任意值、空值、never、类型断言）数据类型。



### 布尔值

- 最基本的数据类型就是简单的 true/fasle 值，在 JavaScript 和 TypeScript 中叫做  `boolean`。

   `let isGo: Boolean = false;`



### 数字

- 和 JavaScript 中一样，TypeScript 中的所有数字都是浮点型数字。这些浮点数	的类型为`number`。除了支持十进制和十六进制外，还支持 ES5 中的二进制和八进制。

   `let decLiteral: number = 6; // 十进制`

   `let hexLiteral: number = 0xf00d; // 十六进制` 

   `let binaryLiteral: number = 0b1010; // 二进制 `

   `let octalLiteral: number = 0o744; // 八进制`



### 字符串

- TypeScript 像其他语言一样，当我们使用`string`表示文本数据类型。我们可以使用双引号（`"`）或者单引号（`'`） 表示字符串。

   `let name: string = '丹丹';`

- 同时，你也可以使用模板字符串（**`**），并且以`${variable}`这种形式插入变量。

   ``let name: string = `Hello, my name is ${ name }`;``



### 数组

- TypeScript 像 JavaScript 一样可以操作数组元素。并且，存在两种定义方式。第一种，可以在元素类型后接`[]`，表示由此类元素组成的一个数组。

   `let array: number[] = [1, 2, 3];`

- 第二种是利用 TypeScript 中的泛型定义，`Array<元素类型>`。

   `let array: Array<number> = [1, 2, 3];`



### 元组

- 元组类型允许表示一个已知元素数量及类型的数组，各个元素类型各自不必相同，因此每个元素所拥有方法也可能各自不一。

   `let x: [string, number];`

   `x = ['hello', 1]; // ok`

   `x = [1, 1]; // Error `

- 每个元素所拥有的方法也可能各自不一。

   `console.log(x[0].substr(1)); // ok`

   `console.log(x[1].substr(1));// Error, 'number' does not have 'substr'`

- 当给一个越界数组元素