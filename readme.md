# Vitest dynamic import error

Running `evalImport` from `eval.js` using regular Node works fine, but when running it from Vitest, the following error appears:

```bash
# Running as a regular Node.js script:
$ npm run start

> vite-dynamic-import-eval@1.0.0 start
> node eval.js

1673248713683
[Module: null prototype] {  }

# Running via vitest:
$ npm run test

> vite-dynamic-import-eval@1.0.0 test
> vitest run


 RUN  v0.10.5 C:/t/vitest-dynamic-import-eval

 ❯ eval.test.js (1)
   × test

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  eval.test.js > test
TypeError: A dynamic import callback was not specified.
 ❯ eval (eval at evalImport evalImport.js:2:16), <anonymous>:1:1
 ❯ Module.evalImport evalImport.js:2:16
      1| export async function evalImport() {
      2|   return await eval('import("data:text/javascript,console.log(Date.now())")')
       |                ^
      3| }
      4| 
 ❯ eval.test.js:5:20

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING",
}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

Test Files  1 failed (1)
     Tests  1 failed (1)
      Time  1.37s (in thread 4ms, 34232.99%)

npm ERR! code 1
npm ERR! path C:\t\vitest-dynamic-import-eval
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c vitest run

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\igrep\AppData\Local\npm-cache\_logs\2023-01-09T07_19_32_065Z-debug.log
```

It looks like Vitest doesn't support the dynamic import when using `eval` or `new Function()`. Perhaps it's related to this error?: https://github.com/nodejs/node/issues/30591
