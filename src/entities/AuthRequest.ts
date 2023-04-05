import { PROPERTY_DEPS_METADATA } from "@nestjs/common/constants";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AuthRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40 })
    address: string;

    @Column({ length: 40 })
    nonce: string;

    @Column({ default: false })
    verified: boolean;

    @Column()
    expiredAt: Date;
}