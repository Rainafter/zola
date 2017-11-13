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

export const sortByName = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  return 0;
};

export const sortByPriority = (a, b) => {
  if (a.priority < b.priority) return -1;
  else if (a.priority > b.priority) return 1;
  return 0;
};
