---
layout: notes

---

#   HTML 
##  Input 
'''
<input class="form-control col-sm-2" type="text"  name="filter[CardNo]" maxlength="4"  id="pin"  pattern="\d{4}"   >
'''
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
