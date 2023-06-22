import connection from "../database/database.js";

export async function getPassengerTravelsByPageDB( page, limit ) {
  return await connection.query(
    `
    SELECT passengers."fullName" as passenger, COUNT(passenger_travels."travelId") as travels FROM passengers
        JOIN passenger_travels ON passenger_travels."passengerId" = passengers.id
            GROUP BY passengers.id
            ORDER BY passengers.id
            OFFSET $1
            LIMIT $2;`,
    [(page-1)*limit, limit]
  );
}

export async function getPassengerTravelsByNameDB(name){
  return await connection.query(
    `
    SELECT passengers."fullName" as passenger, COUNT(passenger_travels."travelId") as travels FROM passengers
        JOIN passenger_travels ON passenger_travels."passengerId" = passengers.id
          WHERE passengers."fullName" ILIKE $1   
            GROUP BY passengers.id
            ORDER BY passengers.id;`,
    [`%${name}%`]
  );
}
