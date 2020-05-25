export const findByTestIdentifier = (component:any, id:string) => {
    const wrapper = component.find(`[test-id='${id}']`)
    return wrapper;
}