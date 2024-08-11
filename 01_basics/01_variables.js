const accountId = 14453
let accountEmail="ujjwal@aph.com"
var accountPassword = "121212"
accountCity = "jaipur"

accountEmail ="ujj@uj.com"
accountPassword = "03030303"
accountCity = "Bhopal"
let accountState;


// accountId =2   * It is not allowed because we can't change the value of constant

console.log(accountEmail); 
/*
    prefer not to use var
    because of issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
