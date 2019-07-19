# AWS-SDK as promise
-----------

This modules provides a wrapper function for the AWS SDK library to expose all methods as promise method by default.

## Examples

```

import AWS from 'aws-sdk'
import awsAsPromise from 'aws-sdk-as-promise'

const Iam = awsAsPromise(new AWS.IAM({region, apiVersion: '2010-05-08'}))
const result = await Iam.getRole({RoleName})

```
