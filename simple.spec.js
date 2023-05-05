it('should enable the feature', () => {
  const featureEnable =true;
  expect (featureEnable).toBe(true);  
});

function add(a, b) {
  return a + b;
}
it('should behave', () => {
  //Arrange
const expectedResult = 10;
  //Act
const result = add(2, 8);
  //Assert
 expect (result).toBe(expectedResult);
});