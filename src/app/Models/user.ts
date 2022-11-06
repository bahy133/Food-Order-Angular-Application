import { Food } from './food';
export class User {
  name!: string;
  id!: string;
  password!: string;
  phone!: string;
  address!: string;
  gender!: string;
  type!: string;
  cart!: Food[];
  cardData!: {
    cardnumber: string;
    cardexpiary: string;
    cvv: string;
  };
}
