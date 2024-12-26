type InputKeys = "firstName" | "lastName" | "email" | "password";

export type Inputs = Record<InputKeys, string>;

export type InputData = Array<{
  key: InputKeys;
  type: string;
  placeholder: string;
  rules: Object;
}>;
