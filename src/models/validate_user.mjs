import Validator from 'better-validator';

export default function validateUserInput(data) {
  const validator = new Validator();

  validator(data).required().isObject();

  validator(data.firstname).required().isString();
  validator(data.lastname).required().isString();
  validator(data.username).required().isString();
  validator(data.password).required().isString();
  validator(data.age).required().isNumber().isInt();
  validator(data.city).required().isString();

  const result = validator.run();

  // Vérification manuelle des longueurs
  const errors = result.errors || [];

  if (data.firstname?.length < 2 || data.firstname?.length > 50) {
    errors.push({ key: 'firstname', message: 'firstname doit contenir entre 2 et 50 caractères' });
  }

  if (data.lastname?.length < 2 || data.lastname?.length > 50) {
    errors.push({ key: 'lastname', message: 'lastname doit contenir entre 2 et 50 caractères' });
  }

  if (data.username?.length < 3 || data.username?.length > 30) {
    errors.push({ key: 'username', message: 'username doit contenir entre 3 et 30 caractères' });
  }

  if (data.password?.length < 6 || data.password?.length > 100) {
    errors.push({ key: 'password', message: 'password doit contenir entre 6 et 100 caractères' });
  }

  if (data.age <= 0) {
    errors.push({ key: 'age', message: 'age doit être un entier positif' });
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
