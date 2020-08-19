import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCoffeeDto {
    /**
     * @ApiProperty decorator useful to *override* 
     * information automatically inferred from the @nestjs/swagger plugin
     */
    @ApiProperty({ description: 'The name of a coffee.' })
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({ each: true })
    readonly flavors: string[];
}
