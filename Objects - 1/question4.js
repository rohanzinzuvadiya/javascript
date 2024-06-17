// 4. Question: Write a function to delete the 'password' property from the 'user' object. 

const user = {
    username: 'rohan', 
    password: 'secret', 
    email: 'rohan@gmail.com' 
};

function deleteUserPassword() {
    delete user.password;
  }
  deleteUserPassword();
  console.log(user); // Output: { username: 'rohan', email: 'rohan@gmail.com ' }