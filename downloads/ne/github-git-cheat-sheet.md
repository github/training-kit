---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Cheat Sheet
byline: Git is the open source distributed version control system that facilitates GitHub activities on your laptop or desktop. This cheat sheet summarizes commonly used Git command line instructions for quick reference.
leadingpath: ../../
---

{% capture colOne %}

## इन्स्टल गर्नुहोस

### GitHub डेस्कटप

[desktop.github.com](https://desktop.github.com)

### Git सबै प्लेटफर्मका लागि

[git-scm.com](https://git-scm.com)

## Configure गर्नुहोस

सबै लोकल रेपोजिटोरिहरुको लागि प्रयोगकर्ताको जानकारी configure गर्नुहोस्

`$ git config --global user.name "[name]"`

यसले तपाइले commit गर्दा संलग्न गर्न चाहानु भएको नाम सेट गर्दछ

`$ git config --global user.email "[email address]"`

यसले तपाइले commit गर्दा संलग्न गर्न चाहानु भएको इमेल सेट गर्दछ

`$ git config --global color.ui auto`

यसले कमाण्ड लाइन आउटपुटको रङकरण गर्दछ

## Branches

Branches हरु Git संग काम गर्नलाई महत्त्वपूर्ण हुन्छन्।  अहिले "checked out" branch मा तपाइले गरेको commit हरु राखिनेछ।  Branch हेर्नकालागि `git status` को प्रयोग गर्न सक्नुहुनेछ।

`$ git branch [branch-name]`

यसले नया branch बनाउनेछ

`$ git switch -c [branch-name]`

यसले तपाइको working directory लाई तपाइले चयन गर्नुभएको branch मा परिवर्तन गर्नेछ

`$ git merge [branch]`

यसले तपाइले चयन गर्नुभएको branch को history ल ाई वर्तमान branch मा मिश्रित गराउनेछ।  यो प्रायजसो pull request हरुमा गरिन्छ, तर यो पनि एउटा महत्वपुर्ण कार्य हो।

`$ git branch -d [branch-name]`

यसले तपाइले चयन गर्नुभएको branch मेटाउनेछ

{% endcapture %}

<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}

## Repository बनाउनुहोस

नया repository आफ्नो कम्प्युटरमा बनाउन सकिन्छ अथवा कसैले बनाएको repository क्लोन गर्न सकिन्छ।  यदी तपाइले आफ्नो कम्प्युटरमा repository बनाउनु भयो भने उक्त repository लाई पछि GitHub मा push गर्नुपर्ने हुन्छ।

`$ git init`

यदी तपाइले काम गर्दै गरेको directory मा `git init` कमाण्ड रन गर्नुभयो भने उक्त directory लाई Git repository मा परिणत गर्नेछ। `git init` कमाण्ड प्रयोग गरेपछि, उक्त directory लाई खाली Git repository संग लिंक गर्न निम्न कमाण्ड प्रयोग गर्नुहोस् :

`$ git remote add origin [url]`

यसले तपाइको कम्प्युटर मा भएको लोकल repository लाई remote repository संग लिंक गर्नेछ। URL ले GitHub मा भएको repository लाई औंलााउनेछ।

`$ git clone [url]`

यसले URL को, repository लाई डाउनलोड अथवा क्लोन गर्नेछ। क्लोनमा सबै फाइल, branch अनि commit हरु संलग्न गरिनेछ।

## .gitignore फाइल

कहिले कहिँ कुनै फाइलहरु Git ले ट्रयाक न गर्नु राम्रो विचार हुन सक्छ। यो प्रक्रिया एउटा फाइल मा गरिन्छ जसको नाम `.gitignore` हो। यसका लागि तपाइले टेम्पलेट [github.com/github/gitignore](https://github.com/github/gitignore) मा भेटाउन सक्नुहुनेछ।

## परिवर्तनहरु syncornization गर्नुहोस

तपाइको कम्प्युटर मा रहेको लोकल repository लाई github.com को remote repository संग synchronize गर्नुहोस

`$ git fetch`

यसले रिमोट ट्रयाकइंग branch को सबै डाउनलोड गर्नेछ

`$ git merge`

यसले रिमोट ट्रयाकइंग branch लाई वर्तमान लोकल संग मिश्रित गर्नेछ

`$ git push`

यसले लोकल branch को सबै commit लाई GitHub मा अपलोड गर्नेछ

`$ git pull`

यसले तपाइको वर्तमान working repository लाई तेही अनुरुपको रिमोट branch को परिवर्तनहरु संग अपडेट गर्नेछ l `git pull`, `git fetch`, र `git merge` को संयोजन हो।

{% endcapture %}

<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Make changes

प्रोजेक्ट फाइलको एभोलुशन ब्राउज र इन्स्पेक्ट गर्नुहोस्

`$ git log`

यसले वर्तमान branchको भर्सन हिस्ट्री लिस्ट गर्नेछ

`$ git log --follow [file]`

यसले फाइल को भर्जन हिस्ट्री लिस्ट गर्नेछ, रिनेम भाएक (एउटा फाइलको लागि मात्रै काम गर्नेछ)

`$ git diff [first-branch]...[second-branch]`

यसले दुइ branch बिच भिन्नता देखाउनेछ

`$ git show [commit]`

यसले निर्धारित commit र मेटाडाटा को परिवर्तन हरु देखाउनेछ

`$ git add [file]`

यसले भर्जनिंग को लागि काम गरिराखेको फाइल को स्न्यापसट लिनेछ

`$ git commit -m "[descriptive message]"`

यसले कामगरिराखेको फाइल को स्न्यापसट

## commits दोहोराउनुहोस

यसले गल्ति र क्राफ्ट रिप्लेस्मेंट हिस्ट्री मेटाउछ

`$ git reset [commit]`

यसले परिवर्तनहरुलाई लोकल्ली प्रिजर्व गरेर,`[commit]` पछाडिको commits हरु मेटाउछ

`$ git reset --hard [commit]`

यसले सबै history मेटाएर निर्धारित commit मा लाग्नेछ 

> साबधान! हिस्ट्री परिवर्तन गर्दा धेरै साइड इफ्फेक्ट हुनसक्छन l यदी तपाईलाई GitHub मा भएको हिस्ट्री परिवर्तन गर्न खोज्दैहुनुन्छ भने साबधानी अप्प्नाउनु होला l की समस्या भए [github.community](https://github.community) मा जान सक्नुहुनेछ अथवा सुप्पोर्ट टिमलाई सम्पर्क गर्नसक्नुहुने छ।

{% endcapture %}

<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Glossary

- **Git**: एउटा ओपन सोर्स, वितरित भर्जन कन्ट्रोल सिस्टम
- **GitHub**: Git repositories होस्ट गर्ने र अरु संग collaborate गर्ने प्लेटफर्म
- **commit**: Repository को सबै परिवर्तन हरु को स्न्यापसट
- **branch**: Commit लाई पोइन्ट गर्ने पोइन्टर
- **clone**: सबै commit र branches भएको Remote repositoryको लोकल भर्जन
- **remote**: सबै योगदानकर्ता ले योगदान आदान प्रदान गर्न मिल्ने common GitHub repository
- **fork**: अरु कसैको GitHub repository को कपि
- **pull request**: repository मा परिवर्तनहरु सल्लाह गर्ने स्थान 
- **HEAD**: वर्तमान working directory लाई जनाउने पोइंटर, HEAD पोइंटर लाई `git switch` को प्रयोग गरेर विभिन्न branches, tags र commits लाई पोइन्ट गर्न सकिन्छ

{% endcapture %}

<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
