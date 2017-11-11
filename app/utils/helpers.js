/**
 *  Login Helpers
 */


/* Check for a valid email */
export const isValidEmail = (email) => {
  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) return false;
  return true;
};


/* Check the password contains at least 10 characters long and contains at least 1 non­alphanumeric character */
export const isValidPassword = (pwd) => {
  const filter = /^(?=.*[^a-zA-Z]).{10,}$/; //
  if (!filter.test(pwd)) return false;
  return true;
};
