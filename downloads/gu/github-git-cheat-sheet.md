---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Cheat Sheet
byline: Git is the open source distributed version control system that facilitates GitHub activities on your laptop or desktop. This cheat sheet summarizes commonly used Git command line instructions for quick reference.
leadingpath: ../../
---

{% capture colOne %}
## Git સ્થાપિત કરો
GitHub ડેસ્કટોપ ક્લાયંટ પ્રદાન કરે છે, जસૌથી સામાન્ય રીપોઝીટરી કાર્યો માટે ગ્રાફિકલ યુઝર ઈન્ટરફેસ સમાવે (GUI) છે અને અદ્યતન દૃશ્ય માટે Git નું આપમેળે જનરેટ થયેલ આદેશ વાક્ય સંસ્કરણ.

### GitHub Desktop
[desktop.github.com](https://desktop.github.com)

Linux અથવા POSIX સિસ્ટમ માટે Git ડિલિવરી આધિકારીક Git SCM વેબસાઇટ પરથી ઉપલબ્ધ છે.

### Git બધા પ્લેટફોર્મ માટે
[git-scm.com](https://git-scm.com)

## ઉપકરણ સેટિંગ્સ
તમામ સ્થાનિક રીપોઝીટરીઝ માટે વપરાશકર્તા માહિતી રૂપરેખાંકિત કરો

```$ git config --global user.name "[name]"```

તમે તમારા પ્રતિબદ્ધ વ્યવહાર સાથે સાંકળવા માંગો છો તે નામ સેટ કરો


```$ git config --global user.email "[email address]"```

તમે તમારા પ્રતિબદ્ધ વ્યવહાર સાથે સાંકળવા માંગો છો તે ઇમેઇલ સેટ કરો


## રિપોઝીટરી બનાવો

નવી રિપોઝીટરી શરૂ કરો અથવા કોઈપણ વર્તમાન URL પાસેથી મેળવો


```$ git init [project-name]```

ઉલ્લેખિત નામ સાથે સ્થાનિક રિપોઝીટરી બનાવો


```$ git clone [url]```

પ્રોજેક્ટ અને તમામ સંસ્કરણ ઇતિહાસ ડાઉનલોડ કરો

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## ફેરફારો કરો
સંપાદનો અને હસ્તકલા પ્રતિબદ્ધ વ્યવહારોની સમીક્ષા કરો


```$ git status```

પ્રતિબદ્ધ થવા માટે નવી અને બદલાયેલી ફાઇલોની સૂચિ જુઓ


```$ git diff```

ફાઈલો માટે તફાવતો બતાવો કે જે હજુ સુધી સ્ટેજ કરવામાં આવી નથી


```$ git add [file]```

સંસ્કરણ નિયંત્રણ માટે ફાઇલ સ્નેપશોટ બનાવો


```$ git diff --staged```

સ્ટેજીંગ અને અંતિમ ફાઇલ સંસ્કરણ વચ્ચે તફાવત બતાવો


```$ git reset [file]```

સ્ટેજિંગમાંથી ફાઇલને દૂર કરો, પરંતુ તેની સામગ્રીઓ રાખો


```$ git commit -m"[descriptive message]"```

સંસ્કરણ ઇતિહાસમાં કાયમી ધોરણે ફાઇલ સ્નેપશોટ રેકોર્ડ કરો

## જૂથ ફેરફાર
પૂર્ણ થયેલા પ્રયાસોની શ્રેણીને નામ આપો


```$ git branch```

વર્તમાન ભંડાર પર તમામ સ્થાનિક શાખાઓની યાદી બનાવો


```$ git branch [branch-name]```

નવી શાખા બનાવો


```$ git switch -c [branch-name]```

ઉલ્લેખિત શાખા પર સ્વિચ કરો અને કાર્યકારી નિર્દેશિકા અપડેટ કરો


```$ git merge [branch-name]```

ઉલ્લેખિત શાખાના ઇતિહાસને વર્તમાન શાખામાં મર્જ કરો


```$ git branch -d [branch-name]```

ઉલ્લેખિત શાખા કાઢી નાખો
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## ફાઇલ નામ સંસ્થા
આવૃત્તિવાળી ફાઇલોને ખસેડો અને કાઢી નાખો


```$ git rm [file]```

કાર્યકારી નિર્દેશિકામાંથી ફાઇલને દૂર કરો અને પગલું કાઢી નાખો


```$ git rm --cached [file]```

સંસ્કરણ નિયંત્રણમાંથી ફાઇલો દૂર કરો અને સ્થાનિક ફાઇલો રાખો


```$ git mv [file-original] [file-renamed]```

ફાઇલનું નામ બદલો અને કમિટ માટે તૈયાર કરો

## ટ્રેકિંગ પ્રતિબંધો
અસ્થાયી ફાઇલો અને પાથને બાકાત રાખો

```
*.log
build/
temp-*
```

`.gitignore` તમને ઉલ્લેખિત પેટર્ન સાથે મેળ ખાતી ફાઇલો અને પાથથી અટકાવે છે


```$ git ls-files --others --ignored --exclude-standard```

પ્રોજેક્ટમાં સમાવેલ નથી તેવી ફાઇલોની યાદી બનાવો

## ટુકડાઓ સાચવો
અપૂર્ણ ફેરફારોને આશ્રય અને પુનઃસ્થાપિત કરો


```$ git stash```

ટ્રૅક કરેલી ફાઇલોને બધા ફેરફારો સાથે અસ્થાયી રૂપે સાચવો


```$ git stash pop```

તાજેતરમાં સાચવેલી ફાઇલ પુનઃપ્રાપ્ત કરો


```$ git stash list```

બધા અસ્થાયી રૂપે સાચવેલા ફેરફાર સેટની સૂચિ બનાવો


```$ git stash drop```

સૌથી તાજેતરમાં સાચવેલ ફેરફારને કાઢી નાખે છે
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## ઇતિહાસ તપાસ
પ્રોજેક્ટ ફાઇલની પ્રગતિ તપાસો


```$ git log```

વર્તમાન શાખા માટે સંસ્કરણ ઇતિહાસની સૂચિ જુઓ


```$ git log --follow [file]```

નામ સહિત, ફાઇલ માટે સંસ્કરણ ઇતિહાસની સૂચિ આપે છે


```$ git diff [first-branch]...[second-branch]```

બે શાખાઓ વચ્ચે સામગ્રી તફાવત દર્શાવે છે


```$ git show [commit]```

આઉટપુટ મેટા માહિતી અને ઉલ્લેખિત કમિટમાં ફેરફારો

## પછી કમિટ કરો
ભૂલો દૂર કરો અને ઇતિહાસ બદલો


```$ git reset [commit]```

`[commit]` સ્થાનિક રીતે ફેરફારો રાખીને, પછીના તમામ કમિટ્સને કાઢી નાખે છે


```$ git reset --hard [commit]```

ઉલ્લેખિત કમિટ પર પાછા ફરો અને પછીના બધા ફેરફારોને કાઢી નાખો

## સમન્વયન બદલો
રિપોઝીટરી બુકમાર્ક અને વિનિમય સંસ્કરણ ઇતિહાસ રજીસ્ટર કરો(URL)


```$ git fetch [remote]```

રિપોઝીટરી બુકમાર્ક્સ માંથી તમામ ઇતિહાસ ડાઉનલોડ કરો


```$ git merge [remote]/[branch]```

બુકમાર્ક શાખા વર્તમાન સ્થાનિક શાખામાં મર્જ કરો


```$ git push [remote] [branch]```

તમામ સ્થાનિક શાખા GitHub પર અપલોડ કરો


```$ git pull```

બુકમાર્ક ઇતિહાસ ડાઉનલોડ કરો અને ફેરફારોને એકીકૃત કરો
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
