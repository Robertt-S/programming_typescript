import { BikeRepo } from "../../ports/bike-repo";
import { Bike } from "../../bike";
import prisma from "./db"

export class PrismaBikeRepo implements BikeRepo {

    async find(id: string): Promise<Bike> {
        return await prisma.bike.findFirst({
            where: { id }
        })
    }

    async add(user: Bike): Promise<string> {
        const addedBike = await prisma.bike.create({
            data: { ...user }
        })
        return addedBike.id
    }

    async remove(id: string): Promise<void> {
        await prisma.bike.delete({
            where: { id }
        })
    }

    update(id: string, bike: Bike): Promise<void> {
      throw new Error("Method not implemented.");
    }

    async list(): Promise<Bike[]> {
        return await prisma.bike.findMany({})
    }
}