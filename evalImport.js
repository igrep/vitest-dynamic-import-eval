export async function evalImport() {
  return await eval('import("data:text/javascript,console.log(Date.now())")')
}
