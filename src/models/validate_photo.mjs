import Validator from 'better-validator';

export default function validatePhotoInput(data) {
  const validator = new Validator();

  validator(data).required().isObject();

  validator(data.title).required().isString();
  validator(data.url).required().isString();
  validator(data.description).optional().isString();

  const result = validator.run();
  const errors = result.errors || [];

  if (data.title?.length < 3 || data.title?.length > 100) {
    errors.push({ key: 'title', message: 'title doit contenir entre 3 et 100 caractères' });
  }

  if (!data.url || !data.url.startsWith('http')) {
    errors.push({ key: 'url', message: 'url doit être une URL valide' });
  }

  if (data.description && (data.description.length > 500)) {
    errors.push({ key: 'description', message: 'description doit contenir au maximum 500 caractères' });
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
