import { IStudentData } from './details.model';

export class Constant {
   public static studentData = [
      {
         firstName: 'Pooja',
         lastName: 'Deshmukh',
         mobileNumber: 1234567892,
         email: 'abc@gn.com',
         password: '123456',
         city: 'Pune',
      },
      {
         firstName: 'Gayatri',
         lastName: 'Warma',
         mobileNumber: 2222222222,
         email: 'aaa@ff.com',
         password: '123ert',
         city: 'Mumbai',
      },
      {
         firstName: 'Dipali',
         lastName: 'Sharma',
         mobileNumber: 9273846532,
         email: 'xyz@gmail.com',
         password: 'vvv12345',
         city: 'Akola',
      },
      {
         firstName: 'Punam',
         lastName: 'Ingle',
         mobileNumber: 5678934556,
         email: 'aaa@ff.com',
         password: '123ert',
         city: 'Mumbai',
      },
      {
         firstName: 'Shruti',
         lastName: 'Sawant',
         mobileNumber: 6789445667,
         email: 'abc@gn.com',
         password: '123456',
         city: 'Pune',
      }
   ];
   public static tableHeading = ['firstName', 'lastName', 'mobileNumber', 'email', 'city', 'action'];
}
