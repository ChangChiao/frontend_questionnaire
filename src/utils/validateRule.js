import * as rules from "../utils/vaildateRegex";
const rule = rules.default;

const ruleTest = {
  userName: (value, errors) => {
    if (!rule.userName.test(value.trim())) {
      errors.userName = "无效格式";
    }
  },
  // password: (value, errors) => {
  //   if (!rule.password.test(value.trim())) {
  //     errors.password = "无效格式";
  //   }
  // },
  phonenumber: (value, errors) => {
    if (!rule.phonenumber.test(value.trim())) {
      errors.phonenumber = "无效格式";
    }
  },
  email: (value, errors) => {
    if (!rule.emailRule.test(value.trim())) {
      errors.email = "Please enter a valid email.";
    }
  },
};

function validateRule(values) {
  const errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (key === "required") {
      value.forEach((item) => {
        if (values[item] === "") errors[item] = "此為必填";
      });
      continue;
    }
    ruleTest[key] && ruleTest[key](value, errors);
  }
  console.log(values, errors);
  return errors;
}

export default validateRule;
