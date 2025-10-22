import dotenv from 'dotenv'
dotenv.config();

 export const loginCredentials = [
  {
    username: process.env.USERNAME, 
    password: process.env.PASSWORD,
    expected: true
  },
  {
    username: 'admin',
    password: 'admin123',
    expected: false
  },
  {
    username: 'Pratik2000',
    password: 'admin',
    expected: true
  }
];

// export default loginCredentials;