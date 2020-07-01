export interface ITestModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
function toString(ITestModelObj: ITestModel) {
    console.log(`${ITestModelObj.id}, ${ITestModelObj.firstName}, ${ITestModelObj.lastName}, ${ITestModelObj.email}`)
}
