# A typescript, mocha test-scaffold
A quick scaffold to run TypeScript with ts-mocha. Sometimes you just want a quick test
runner to stub out some TypeScript code with remembering all the ceremony involved in
getting mocha, chai, typesceipt, ts-node to register correctly. 

## This 
* TypeScript
* node
* ts-node
* mocha
* ts-mocha
* chai

## Running
```
$ git clone git@github.com:rightisleft/typescript-mocha-test-scaffold.git
$ cd typescript-mocha-test-scaffold.git
$ npm i 
$ npm test
```

### Known Issues

* Currently need to include the expect import into each spec
