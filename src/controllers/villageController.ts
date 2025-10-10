
import { db ,pool } from '../../drizzle/src/index.ts'
import { villageTable } from '../../drizzle/src/db/village.schema.ts'
import type { Request, Response, NextFunction } from 'express';
import { eq } from 'drizzle-orm';
import z from 'zod';
export default class villageController{


async index(req:Request,res:Response,next:NextFunction){

    try {
        const  schemavillage = z.object({
            id:z.coerce.number("Not a number!").positive().gte(1)
        })
        const {id} = schemavillage.parse(req.params)
        const village = await db.select().from(villageTable).where(eq(villageTable.id,Number(id)))

        if(village.length === 0){
            return res.status(404).json({message:"Village not found"})
        }
        res.status(201).json({village})
    } catch (error) {
        next(error)
        
    }

}
 async create(req:Request,res:Response,next:NextFunction){
        try {
            const schemavillage = z.object({
                name:z.string("not a string").min(3,"Name must be at least 3 characters long"),
                country:z.string("not a string").min(3,"Country must be at least 3 characters long")
            })
           let {name,country} = schemavillage.parse(req.body)
           const newvillage = await db.insert(villageTable).values({name,country}).returning()
           res.status(201).json({newvillage})
            
        } catch (error) {
            next(error)
            
        }

    }
async show (req:Request,res:Response,next:NextFunction){
    try {
        const villages = await db.select().from(villageTable)
        res.status(201).json({villages})
    } catch (error) {
        next(error)
    }
}

async update(req:Request,res:Response,next:NextFunction){
    try {
        const schemavillage = z.object({
            id:z.coerce.number("Not a number!").positive().gte(1),
        })
        const {id} = schemavillage.parse(req.params)
         const schemavillagebody = z.object({
                name:z.string("not a string").min(3,"Name must be at least 3 characters long"),
                country:z.string("not a string").min(3,"Country must be at least 3 characters long")
            })
           let {name,country} = schemavillagebody.parse(req.body)
        const village = await db.select().from(villageTable).where(eq(villageTable.id,Number(id)))
        if(village.length === 0){
            return res.status(404).json({message:"Village not found"})
        }
        const villageupdate = await db.update(villageTable).set({name,country}).where(eq(villageTable.id,Number(id))).returning()
        res.status(201).json({villageupdate})
    } catch (error) {
        next(error)
        
    }
}
async delete(req:Request,res:Response,next:NextFunction){
    try {
        const schemavillage = z.object({
            id:z.coerce.number("Not a number!").positive().gte(1),
        })
        const {id} = schemavillage.parse(req.params)
        const village = await db.select().from(villageTable).where(eq(villageTable.id,Number(id)))
        if(village.length === 0){
            return res.status(404).json({message:"Village not found"})
        }
        await db.delete(villageTable).where(eq(villageTable.id,Number(id)))
        res.status(204).json({message:"Village deleted"})
    } catch (error) {
        next(error)
    }
}

}