import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArrayOfObjects } from 'src/app/common/decorator'

export class CreateClientDTO {
  @IsNotEmpty({ message: 'Please provide valid name' })
  @ApiProperty({ example: 'xyz' })
  name: string

  @IsNotEmpty({ message: 'Please provide valid phone' })
  @ApiProperty({ example: '+<countryCode><Number> e.g: +923130185010' })
  phone: string

  @IsNotEmpty({ message: 'Please provide valid CNIC' })
  @ApiProperty({ example: 4220106968754 })
  CNIC: number

  @IsNotEmpty({ message: 'Please provide valid email' })
  @ApiProperty({ example: 'xyz@email.com' })
  @IsEmail()
  email: string

  @IsNotEmpty({
    message: 'Please provide valid clientSalutation/preSalutation',
  })
  @ApiProperty({ example: 'S/O' })
  clientSalutation: string

  @IsNotEmpty({
    message: 'Please provide valid relationSalutation/postSalutation',
  })
  @ApiProperty({ example: 'S/O' })
  relationSalutation: string

  @IsNotEmpty({ message: 'Please provide valid leadSource' })
  @ApiProperty({ example: 'Advertisement' })
  leadSource: string

  @IsNotEmpty({ message: 'Please provide valid salutantName/relation' })
  @ApiProperty({ example: 'Father name, mother name' })
  relation: string

  @IsNotEmpty({ message: 'Please provide valid city' })
  @ApiProperty({ example: 'Karachi' })
  city: string

  @IsNotEmpty({ message: 'Please provide valid address' })
  @ApiProperty({ example: '5th street, Newtown' })
  address: string

  @IsNotEmpty({ message: 'Please provide valid country' })
  @ApiProperty({ example: 'Pakistan' })
  country: string

  @IsNotEmpty({ message: 'Please provide valid country' })
  @ApiProperty({ example: 'Sindh' })
  state: string
}
