export const sortUsers = (users, sort) => {
  switch (sort) {
    case "firstNameDesc":
      return users.sort((a, b) => b.firstName.localeCompare(a.firstName));
    case "lastNameAsc":
      return users.sort((a, b) => a.lastName.localeCompare(b.lastName));
    case "lastNameDesc":
      return users.sort((a, b) => b.lastName.localeCompare(a.lastName));
    case "femaleFirst":
      return users.sort((a, b) => a.sex.localeCompare(b.sex));
    case "maleFirst":
      return users.sort((a, b) => b.sex.localeCompare(a.sex));
    case "ageAsc":
      return users.sort((a, b) => a.age - b.age);
    case "ageDesc":
      return users.sort((a, b) => b.age - a.age);
    default:
      //firstNameAsc
      return users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }
};

const searchOneUser = (user, search) => {
  let flag = false;
  Object.keys(user).forEach(key => {
    if (key === "_id" || key === "password") return; //skip id and password
    let val = user[key];
    if (
      (Number.isInteger(val) && val.toString().indexOf(search) !== -1) ||
      (!Number.isInteger(val) &&
        val.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    ) {
      flag = true;
    }
  });
  return flag;
};

export const searchUsers = (users, search) => {
  if (search === "" || search === undefined) {
  // if (search === "") {
    return users;
  } else {
    return users.filter(user => searchOneUser(user, search));
  }
};
