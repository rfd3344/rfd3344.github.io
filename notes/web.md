
#  HTML 
## Input 
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
### 4 Digital Number 
```
pattern="\d{4}"
```
