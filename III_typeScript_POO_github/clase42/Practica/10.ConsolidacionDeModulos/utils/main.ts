import { add, reverse, User } from './index';

console.log('Sum: ', add(3, 4));
console.log('Reversed String: ', reverse('backend'));

const user = new User('Fabio', 44);
console.log(`User: ${user.name}, Age: ${user.age}`);