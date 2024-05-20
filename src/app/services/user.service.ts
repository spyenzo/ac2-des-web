import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Engenheiro de FE',
      password: '123456'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Engenheiro de BE',
      password: 'abcdef'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Analista de dados',
      password: 'qwerty'
    }
  ];

  getUsers() {
    return this.users;
  }

  getUserById(userId: number) {
    return this.users.find(user => user.id === userId);
  }

  updateUser(userId: number, updatedUser: any) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
    }
  }
}
