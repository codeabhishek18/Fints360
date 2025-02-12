import { Entity } from "@/models/entity.model";

class entityService
{
    async createEntity(details)
    {
        try
        {
            const newEntity = await Entity.create(details);
            await newEntity.save();
            return newEntity
        }
        catch(error)
        {
            console.log(error);
            throw error
        }
    }

    async getEntities()
    {
        try
        {
            const Entities = await Entity.find();
            return Entities
        }
        catch(error)
        {
            throw error
        }
    }

    async getEntityById(id)
    {
        try
        {
            const Entity = await Entity.findById(id);
            return Entity
        }
        catch(error)
        {
            throw error
        }
    }

    async updateMOA(entityId, buyers, sellers)
    {
        try
        {
            await Entity.findByIdAndUpdate(entityId, { $set: { buyers, sellers }})
            return
        }
        catch(error)
        {
            console.log(error);
            throw error
        }
    }


    async deleteEntity(id)
    {
        try
        {
            await Entity.findByIdAndDelete(id);
            return
        }
        catch(error)
        {
            throw error
        }
    }
}

export default entityService