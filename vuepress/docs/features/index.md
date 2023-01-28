## Defined by JQL

In JQL, both *Operators* and *Keywords* are defined, in here, it is described which operator(or keyword) is supported(or not supported) by jql2sql package.

### Keywords

As JQL support keywords(*and*, *or*, *is*, *in*, *not*), we support them and theire combination like below.

* (*expression*) **and** (*expression*)
* (*expression*) **or** (*expression*)
* 'is'* and *'is not'* are supported
* 'in'* and *'not in'* are supported

For more detail, please see [Operators](#operators) section below.

### Operators

|Operator            |Supported or Not    |Note                |
|--------------------|--------------------|--------------------|
|=          | >= 0.0.7 | N/A |
|!=         | Will be supported | N/A |
|>          | >= 0.0.7 | N/A |
|<          | >= 0.0.7 | N/A | 
|>=         | >= 0.0.7 | N/A |
|<=         | >= 0.0.7 | N/A |
|~          | >= 0.0.7 | N/A |
|!~         | >= 0.0.11 | N/A |
|in         | >= 0.0.11 | N/A |
|not in     | >= 0.0.11 | N/A |
|is         | >= 0.0.11 | N/A |
|is not     | >= 0.0.11 | N/A |
|was        | No plane to support |Too dependent on Jira|
|was not    | No plane to support |Too dependent on Jira|
|was in     | No plane to support |Too dependent on Jira|
|was not in | No plane to support |Too dependent on Jira|
|changed    | No plane to support |Too dependent on Jira|

### Functions
#### Time Functions

|Operator                   |Supported or Not    |Note                |
|---------------------------|--------------------|--------------------|
|startOfDay/Week/Month/Year | No plane to support | N/A |
|endOfDay/Week/Month/Year   | No plane to support | N/A |
|lastLogin()                | No plane to support | N/A |
|now()                      | Will be supported ||
|currentLogin()             | Will be supported ||

#### People Functions
|Operator                   |Supported or Not    |Note                |
|---------------------------|--------------------|--------------------|
|currentUser()| Will be supported | N/A |
|membersOf()  | Will be supported | N/A |

#### Issue Functions

|Operator                   |Supported or Not    |Note                |
|---------------------------|--------------------|--------------------|
|issueHistory()   | No plane to support |Too dependent on Jira|
|openSprints()    | No plane to support |Too dependent on Jira|
|watchedIssues()  | No plane to support |Too dependent on Jira|
|myApproval()     | No plane to support |Too dependent on Jira|
|myPending()      | No plane to support |Too dependent on Jira|

