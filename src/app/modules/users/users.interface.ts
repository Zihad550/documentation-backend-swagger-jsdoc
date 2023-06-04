export default interface IUser {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  password: string;
  address: {
    country: string;
    city: string;
  };
}
