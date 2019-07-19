"use strict";

function AwsAsPromise(awsService) {
  for (const x of Object.getOwnPropertyNames(Object.getPrototypeOf(awsService)))
    this[x] = function () {
      const mod = awsService[x](...arguments);
      return mod.promise ? mod.promise() : mod;
    };
}

module.exports = function awsAsPromise(awsService) {
  return new AwsAsPromise(awsService)
}
