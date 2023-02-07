# JQL2SQL
This package is helper to implement very comprehensive, flexible searching, something like below.

|jql text|(description ~ 'Begin with*' or price = 100) date < NOW()'|
|---|------------------------------------------------------|
|**Transpiled SQL**| **(DESCRIPTION LIKE 'Begin with%' OR PRICE = 100) AND DATE < NOW()**| 

We transfile jql text to SQL for completing various searching 'and', 'or', '()', %keyword% and so on.

For security reason, we can't use SQL directly in our searching query, so we should define own grammar for searching.
JQL (Jira Query Language) has been used for searching jira issues, so it is famouse and well defined.
We really wouldn't want to re-invent wheel, so borrowing jql grammar is our choice.
It prevent not only re-inventing, but also, it is well known many people as jira is famous issue tracker.


# Live demo
Please visit our live demo https://jql2sql.github.io/ to understand how jql2sql package works.


# Q & A

## Why we can't use SQL directly for searching
In security point of view, it's very dangerous due to SQL injection attack.
So, we need our own grammar for searching, and it should be transpiled as SQL.

## Why this package use JQL
As Jira is famouse issue tracker, therefore JQL(Jira Query Language) has been used by many people. So, Rather than re-inventing wheel, we borrow JQL grammar.
