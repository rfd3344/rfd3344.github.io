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
## 元字符
```
.	匹配除换行符以外的任意字符
\w	匹配字母或数字或下划线
\s	匹配任意的空白符
\d	匹配数字
\b	匹配单词的开始或结束
^	匹配字符串的开始
$	匹配字符串的结束
```
## 限定符
```
*	重复零次或更多次
+	重复一次或更多次
?	重复零次或一次
{n}	重复n次
{n,}	重复n次或更多次
{n,m}	重复n到m次
```
## 反义词
```
\W	匹配任意不是字母，数字，下划线，汉字的字符
\S	匹配任意不是空白符的字符
\D	匹配任意非数字的字符
\B	匹配不是单词开头或结束的位置
[^x]	匹配除了x以外的任意字符
[^aeiou]	匹配除了aeiou这几个字母以外的任意字符
```
