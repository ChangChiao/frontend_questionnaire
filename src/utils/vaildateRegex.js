export default {
  emailRule: /^w+((-w+)|(.w+))*@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+)*.[A-Za-z]+$/,
  userName: /^[a-zA-Z0-9]{2,12}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,12}$/,
  phonenumber: /^[0-9]{10}$/,
};
