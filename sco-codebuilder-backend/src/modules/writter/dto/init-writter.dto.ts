import { validationErrorMessages } from './../../../constants/validation-error-messages.constants';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class InitWritterDto {

    @IsNotEmpty({ message: validationErrorMessages.INIT_WRITTER.TOKEN.NOT_EMPTY })
    @IsString({ message: validationErrorMessages.INIT_WRITTER.TOKEN.INVALID_VALUE })
    token: string;

    @IsOptional()
    @IsBoolean({ message: validationErrorMessages.INIT_WRITTER.RESULT.INVALID_VALUE })
    result?: boolean;
}