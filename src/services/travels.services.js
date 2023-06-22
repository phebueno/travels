import { getPassengerTravelsByPageDB, getPassengerTravelsByNameDB } from "../repositories/travels.repository.js";

export async function travelsServices(page, name){

    if(name){
        const travels = await getPassengerTravelsByNameDB(name)
        return {status:200,message:travels.rows} 
    }

    const limit = page ? 25 : 100;
    if ((isNaN(page) && page !== undefined) || page <= 0)
      return {status:400,message:"Invalid page value"}
    const travels = await getPassengerTravelsByPageDB(!page ? 1 : page, limit);    
    if (travels.rowCount > 25)
      return {status:500,message:"Too many results"}

    return {status:200,message:travels.rows};
}