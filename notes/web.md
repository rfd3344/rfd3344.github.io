---
layout: notes

---

#   HTML 
##  Input 
```
<input class="form-control col-sm-2" type="text"  name="filter[CardNo]" maxlength="4"  id="pin"  pattern="\d{4}"   >
```
### Min Max 
```
min="1" 
max="5"
```


### Money 
```
pattern="^\d+(\.)\d{2}$" 
```
0.00  => true
01.00 => true
01,00 => false
0,00  => flase
0.000 => false
0-01  => false
### 4 Digital Number Only 
```
pattern="\d{4}"
```

#  Regular Expression 
##  优先级
```
\       转义符
() []   圆括号和方括号
{n,m}   限定符
^, $, \任何元字符、任何字符	定位点和序列（即：位置和顺序）
|       或  例如: (m|f)ood 匹配"mood"或"food"
```
```
(pattern)   	匹配 pattern 并获取这一匹配
(?:pattern) 	industr(?:y|ies) 等于 industry|industries
(?=pattern)  	正向肯定预查   例如:Windows(?=95|98|NT|2000) 匹配"Windows2000"中"Windows"， 不匹配"Windows3.1"中"Windows"
(?!pattern) 	正向否定预查   例如:Windows(?=95|98|NT|2000) 匹配"Windows3.1"中"Windows"， 不匹配"Windows2000"中"Windows"
(?<=pattern) 	反向肯定预查(look behind)  例如:(?<=95|98|NT|2000)Windows 匹配"2000Windows"中"Windows"， 不匹配"3.1Windows"中"Windows"
(?<!pattern)	反向否定预查
```
##  字符集合
```
[xyz]        所包含的任意一个字符 例如: [abc]匹配plain中'a'
[^xyz]       未包含的任意字符  例如: [abc]匹配plain中'p'、'l'、'i'、'n
[a-z]        所有的小写字母 
[A-Z]        所有的大写字母 
[a-zA-Z]     所有的字母 
[0-9]        所有的数字 
[0-9\.\-] 	 所有的数字，句号和减号 
[ \f\r\t\n]  所有的白字符
[^a-z]       任何不在指定范围内的任意字符
```
```
.	换行符外 任意字符
\w	字母或数字或下划线
\s	任意的空白符
\d	数字
\b	单词的开始或结束
^   字符串的开始
$   字符串的结束
\W	任意不是字母，数字，下划线，汉字的字符
\S	任意不是空白符的字符
\D	任意非数字的字符
\B	不是单词开头或结束的位置
```
##    特殊字符
```
\.  匹配 .
\\  匹配 \ 
\(  匹配 (
\)  匹配 )
\[  匹配 [
\{  匹配 {
\+  匹配 +
\*  匹配 *
\$  匹配 $
\|  匹配 |
```
##    限定符
```
*       0次 或 多次
+	    1次 或 多次
?	    0次 或 1次
{n}	    n次
{n,}    n次 或 多次
{n,m}   n到m次

```
其他
```
?    非贪婪     例如: 'o+?'匹配单个 "o"，'o+'匹配所有'o'
```

## Examples
### numbers only
```
<script>
var str = "asd1234";
var patt1 = /[0-9]+/;
document.write(str.match(patt1));
// 1234
</script>
```

```
'abc12345#$*%3423432343423234342'.replace(/(.{4})/g,"$1_SPACE_");   
//  Add "_SPACE_"  to each 4 words 
```


