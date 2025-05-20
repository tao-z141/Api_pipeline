import Validator from 'better-validator';

export default function validateAlbumInput(data) {
  const validator = new Validator();

  validator(data).required().isObject();

  validator(data.title).required().isString();
  validator(data.description).optional().isString();
  validator(data.year).required().isNumber();

  const result = validator.run();
  const errors = result.errors || [];

  if (data.title?.length < 3 || data.title?.length > 100) {
    errors.push({ key: 'title', message: 'title doit contenir entre 3 et 100 caractères' });
  }

  if (data.description && (data.description.length > 500)) {
    errors.push({ key: 'description', message: 'description doit contenir au maximum 500 caractères' });
  }

  if (!Number.isInteger(data.year) || data.year < 1900 || data.year > new Date().getFullYear()) {
    errors.push({ key: 'year', message: 'year doit être un entier entre 1900 et l\'année en cours' });
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
