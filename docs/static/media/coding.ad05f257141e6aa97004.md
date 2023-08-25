# Regular Expression

Testing website: https://regex101.com/

## 优先级

\ 转义符

() [] 圆括号和方括号

{n,m} 限定符

^, $, \任何元字符、任何字符 定位点和序列（即：位置和顺序）

| 或 例如: (m|f)ood 匹配"mood"或"food"

## Anchor

```
^ Start of String

$ End of String

\b 单词的开始或结束

\D 任意非数字的字符

\B 不是单词开头或结束的位置
```

## Assertion

include look-ahead, look-behind, and conditional expressions

```
x(?=y) Lookahead

/Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost", neither

"Sprat" nor "Frost" is part of the match results
```

```
Windows(?=95|98|NT|2000)
Match Windows in "Windows2000",
NotMatch Windows in "Windows3.1"
```

x(?!y) Negative lookahead

```
Windows(?=95|98|NT|2000)
Match Windows in "Windows3.1"，
NotMatch Windows in "Windows2000"
```

(?<=y)x Lookbehind

```
(?<=95|98|NT|2000)Windows
Match Windows in "2000Windows",
NotMatch Windows in "3.1Windows"
```

(?<!y)x Negative lookbehind

### NotSure

(pattern) 匹配 pattern 并获取这一匹配

(?:pattern) industr(?:y|ies) 等于 industry|industries

## Groups and ranges

```
[characters] to match all characters

\w Any word characters, equal to [a-zA-Z0-9_]
\W Any not word characters
. Any not newline
\S Any not whitespace(space, tab, newline), equal to [\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
[ \f\r\t\n] Any whitespace
\s Any whitespace

[xyz]
[^xyz]
[a-z]
[^a-z] Any not a-z
[A-Z]
[a-zA-Z] Any a-z and A-Z

[0-9] Any number
[0-9\.\-] number or \. or \-
\d Any number
\D 任意非数字的字符
```

## Special character

`\specialCharacter` to represent specialCharacter\

```
. use \.
\ use \\
( use \(
) use \)
[ use \[
{ use \{
- use \+
* use \*
$ use \$
| use \|
/ use \/
\t tab
\r carriage return
\n newline
```

## Quantifiers

```
a? 0-1 of a
a\* 0-Any of a
a+ 1-Any of a
a{n} exactly n of a
a{n,} n-Any of a
{n,m} n-m of a
? 非贪婪 例如: 'o+?'匹配单个 "o"，'o+'匹配所有'o'
```

Eg: numbers only

```js
var str = 'asd1234';
var patt = /[0-9]+/;
document.write(str.match(patt)); // 1234;
```

Eg: input value to money form

```js
$('input').keyup( function(){
  if (!St ring.prototype.splice) {
      String.prototype.splice = function(start, delCount, newSubStr) {
          return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
      };
  }
  var value = $(this).val();
  value = value.match(/\d+/g).join("");
  for( i=3 ; i<value.length; i+=4){
      value = value.splice(i, 0, ",");
  }
  if( $(this).val()  ){
      value = '$'.concat(value);
  }
  $(this).val( value);
})
```

Eg: Money

```
pat="^\d+(\.)\d{2}$"

0.00 => true
01.00 => true
01,00 => false
0,00 => flase
0.000 => false
0-01 => false
```

### 4 Digital Number Only

```
Pat = '\d{4}'
```

Eg: URL Check

```js
function is_valid_domain_name($domain_name) {
  //valid chars check
  return (
    preg_match(
      /^([a-z\d](-*[a-z\d])*)(\.([a-z\d](-*[a-z\d])*))*$/i,
      $domain_name
    ) &&
    preg_match('/^.{1,253}$/', $domain_name) && //overall length check
    preg_match(/^[^\.]{1,63}(\.[^\.]{1,63})*$/, $domain_name)
  ); //length of each label
}
```

# naming convention

## action

```
Get /set
Add /remove
Create /destroy
Start /stop
Open /close
Read /write
Load /save
begin/end
backup/ restore
import /export
split /merge
inject /extract
attach/detach
bind /separate
view/browse
edit /modify
select /mark
copy /paste
undo /redo
insert /delete
add /append
index /sort
find /search
increase /decrease
play /pause
launch /run
compile /execute
debug /trace
observe /listen
build /publish
input /output
encode /decode
encrypt /decrypt
compress /decompress
Pack /unpack
parse /emit
connect /disconnect
send/receive
download/upload
Refresh /synchronize
update /revert
lock /unlock

Submit /commit
push/pull
Expand /collapse
begin /end
start /finish
enter /exit
abort /quit
obsolete/depreciate
collect /aggregate
```

## Synonym

### item/data

pieces piece

volumes volume

units unit

facts fact

sets set

## Redux Action

api: getUserById(id) getUsers postUser patchUser deleteUser

act: fetchUser(id) fetchUsers saveUser({id?}) removeUser

updateUser (only update reducer)

## File Name

React component: Capitalize

Folder, utils: camelCase

# OOP

## 3 Features

1. 封装 Encapsulation

   have the bondary and reduce the impact from outside

   Private: only itself

   Protected: itself and it's child

   Public: all

2. 继承 Inheritance

   code can be resued and reduce the redudancy

3. 多态 polymorphism

   override parent's attributes

## Abstract

abstract

抽象类, 只能用于继承, 而无法实例化对象, 不可以用 private

interface

方法是虚拟的, 继承的时候, 需要实现这些方法

trait

代码的复用而写的一个小插件, 用 use 放在类中间

## Solid Principle

https://learnku.com/articles/4160/solid-notes-on-object-oriented-design-and-programming-oodoop

### SRP - Single Responsibility Principle

对象应该仅具有一种单一功能

### OCP - Opened Closed Principle

开闭原则 extension 可扩展

```js
class PayHandler {
  // pay_method1
  // pay_method2
  // ...
}
// Change to
class PayHandler {}
class pay_method1 implements PayHandler {}
class pay_method2 implements PayHandler {}
```

### LSP - Liskov Substitution Principle

子类可替换父类

尽量不要重写父类的方法

### ISP(Interface Segregation Principle)

接口隔离原则 more interface

```js
interface Features1{
pay()
}
interface Features2{
askMore()
}
class ATM implements Features1{ }
class Onlinepay implements Features1, Features2{ }
```

### DIP(Dependency Inversion Principle)

依赖反转原则

# Algorithm

## 复杂度

随 n 变化

i = 1; // 时间 O(1), 空间 O(1)

```js
while(i<n){ i = i \* 2; } // 时间 O(logN) 二分法
for(i=1; i<=n; i++){ } // 时间 O(n)
for(i=1; i<=n; i++){ for(j=1; j<=n; j++){ } } // 时间 O(n2)
i = a[n]; // 空间 O(n)


```

## 常见算法

贪婪法、分治法、穷举法、动态规划，回溯法。（贪婪、穷举、分治是基础，动态规划有难度，可以先放着）

## Comment

Eg:

```js
/\*\*

- Descriptions ...
-
- @type {enumeration}
- @param {Boolean} para1
- @param {Array|Object} para2: The collection to iterate over.
- @param {Function} para3: The function invoked per iteration.
- @returns {Array} Returns the new mapped array.
- @since 1.0.0
- @example
-
- eg1: ...
  \*/
```

# Design Pattern

创建型：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式

结构型：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式

行为型：模版方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式、状态模式、策略模式、职责链模式(责任链模式)、访问者模式
