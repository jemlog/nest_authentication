import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  // db 연결 안했으므로 하드 코딩 되어있다.
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  // username으로 user 조회
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
