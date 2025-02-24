const addUserResponse = (user) => {
  return {
    email: user.email,
    name: user.name,
    branch: user.branch,
  };
};

module.exports = { addUserResponse };
