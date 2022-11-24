import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './user.entity'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private accountRepo: Repository<User>) {
        this.accountRepo = accountRepo
    }

    public async found() {
        // 然后就可以定义where选项了
        // const where: FindOptionsWhere<User> = {
        //     id: paramType,
        //     name: account
        // }
        const result = await this.accountRepo.createQueryBuilder().getMany()

        console.log(JSON.stringify(result))
    }
}
