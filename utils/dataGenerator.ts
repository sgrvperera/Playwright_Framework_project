export function generateRandomEmployee() {
  const randomNumber = Math.floor(Math.random() * 100000);

  return{
    firstName: `Test${randomNumber}`,
    lastName: `User${randomNumber}`,
  };
}