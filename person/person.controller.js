import { getPersonService, getPersonsService } from "./person.service.js";

export const getPersons = async (req, res) => {
  const persons = await getPersonsService();
  res.status(200).send(persons);
};

export const getPersonById = async (req, res) => {
  const { personId } = req.params;
  const person = await getPersonService(personId);
  res.status(200).send(person);
};
