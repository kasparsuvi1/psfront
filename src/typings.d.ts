/* Allow importing JSON as a module */
declare module '*.json';

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

interface User {
  id: number;
  email: string;
  password: string;
  alias: string;
  sex: string;
  age: string;
  occupation: string;
  degree: string;
  role: string;
  reg_date: Date;
  last_visit: Date;
  prefered_sex: string;
  language: string[];
  activated: boolean;
}

interface Auth {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;
}
