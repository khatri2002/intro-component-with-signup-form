import { InputData } from "./type";

export const inputs: InputData = [
  {
    key: "firstName",
    placeholder: "First Name",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "First Name cannot be empty",
      },
    },
  },
  {
    key: "lastName",
    placeholder: "Last Name",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Last Name cannot be empty",
      },
    },
  },
  {
    key: "email",
    placeholder: "Email Address",
    type: "text",
    rules: {
      required: {
        value: true,
        message: "Email Address cannot be empty",
      },
      pattern: {
        value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
        message: "Looks like this is not an email",
      },
    },
  },
  {
    key: "password",
    placeholder: "Password",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password cannot be empty",
      },
    },
  },
];
