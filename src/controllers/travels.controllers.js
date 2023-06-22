import { travelsServices } from "../services/travels.services.js";

export async function getPassengerTravels(req, res) {
  try {
    const { page, name } = req.query;
    
    const result = await travelsServices(page, name)

    res.status(result.status).send(result.message);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
