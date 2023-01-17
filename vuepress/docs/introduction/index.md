# Introduction

jql2sql package is helper to implement very comprehensive, flexible searching, something like below.

* ((item is 'good') or (item is 'so so')) and (date < now()))

You might 

So, firstly, we should define our own searching language, however, we wouldn't want to re-invent wheel.
You may sense from package name **jql2sql**, 
As JQL(Jira Query Language) is well known and good to leverage it.
Just we add some *Operators* and *Keywords* and some of them are not su
It transpile JQL(Jira Query Language) to SQL.