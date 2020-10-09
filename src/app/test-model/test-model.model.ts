/*
    This is the model file for my TestModel. To use a Java reference,
    this is like the @Entity file.
*/
export interface ITestModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
function toString(ITestModelObj: ITestModel) {
    console.log(`${ITestModelObj.id}, ${ITestModelObj.firstName}, ${ITestModelObj.lastName}, ${ITestModelObj.email}`);
}
