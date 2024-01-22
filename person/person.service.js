import Person from "./person.model.js";

export const getPersonsService = async () => {
  return await Person.find();
};

export const getPersonService = async (personId) => {
  return await Person.findById(personId);
};
