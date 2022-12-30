export type ButtonType = {
  label: string;
};

export enum InputTypeStrings {
  text = "text",
  password = "password",
  email = "email",
}

export type InputType = {
  placeholder?: string;
  type: InputTypeStrings;
  label?: string;
};
