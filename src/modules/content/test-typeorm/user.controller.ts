import { Body, Controller, Get } from '@nestjs/common'

import { UserService } from './user.service'

/**
 * @description 分类控制器
 * @export
 * @class CategoryController
 */
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
        this.userService = userService
    }

    @Get('get')
    async getUser(@Body() param: { id: number }) {
        await this.userService.found()
    }
}
