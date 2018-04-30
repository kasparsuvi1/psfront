/* Allow importing JSON as a module */
declare module '*.json';

/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

// TODO: viia samale nimetustele backiga.
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  alias: string;
  password: string;
  activated: boolean;
  gender: string;
  age: string;
  regDate: Date;
  lastVisit: Date;
  degree: Degree;
  occupation: Occupation;
  roles: Role[]; // ROLE
  responses: Response[];
}

interface Role {
  id: number;
  roleName: string;
  description: string;
}

interface Degree {
  id: number;
  description: string;
  name: string;
}

interface Occupation {
  id: number;
  description: string;
  name: string;
}

interface Hotel {
  id: number;
  name: string;
  webpage: string;
  country: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
  restos: Resto[];
  adverts?: Advert[];
}

// TODO: Resto should have open times or something like that too?
interface Resto {
  id: number;
  name: string;
  webpage: string;
  country: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
  hotel: Hotel;
}

interface Advert {
  id: number;
  advertStatus: string; // ENUM
  createdDate: string;
  advertText: string;
  mealType: string; // ENUM
  preferredStart: string;
  preferredEnd: string;
  acceptedTime: string;
  restos: Resto[];
  hotels: Hotel[];
  responses: Response[];
  user: User;
}

interface Response {
  id: number;
  responseText: string;
  proposedTime: string;
  responseStatus: string; // ENUM
  user: User;
}

interface Auth {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  jti: string;
}
