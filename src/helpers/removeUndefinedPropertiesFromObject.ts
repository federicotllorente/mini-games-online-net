// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeUndefinedPropertiesFromObject: any = (obj: any) => {
  let newObj = {}
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined) {
      newObj = {
        ...newObj,
        [key]: obj[key]
      }
    }
  })
  return newObj
}
