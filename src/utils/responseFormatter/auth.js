const loginResponse = (data) => {
  return {
    name: data.user.name,
    branch: data.user.branch,
    is_admin: data.user.is_admin,
    token: data.token,
  };
};

module.exports = { loginResponse };
