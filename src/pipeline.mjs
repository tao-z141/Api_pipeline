import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const headers = {
  'X-Api-Key': process.env.RANDOMMER_API_KEY
};

async function getRandomUser() {
  const res = await axios.get('https://randomuser.me/api/');
  const user = res.data.results[0];

  return {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    gender: user.gender,
    location: `${user.location.city}, ${user.location.country}`,
    picture: user.picture.large
  };
}

async function getPhoneNumber() {
  const res = await axios.get('https://randommer.io/api/Phone/Generate', {
    headers,
    params: { countryCode: 'FR', Quantity: 1 }
  });
  return res.data[0];
}

async function getIban() {
  const res = await axios.get('https://randommer.io/api/Finance/Iban/FR', { headers });
  return res.data;
}

async function getCreditCard() {
  const res = await axios.get('https://randommer.io/api/Card', { headers });
  const card = res.data;
  return {
    cardNumber: card.cardNumber,
    type: card.type,
    Expiration: card.date,
    cvv: card.cvv
  };
}

async function getRandomName() {
  const res = await axios.get('https://randommer.io/api/Name', { 
    headers,
    params: {
      nameType: 'firstname',
      Quantity: 1
    }
  });
  return res.data[0];
}

async function AllFunctions() {
  try {

    const user = await getRandomUser();
    console.log('User:', user);

    const phone = await getPhoneNumber();
    console.log('Phone number:', phone);

    const iban = await getIban();
    console.log('IBAN:', iban);

    const card = await getCreditCard();
    console.log('Credit Card:', card);

    const nom = await getRandomName();
    console.log('Random name:', nom);

  } catch (err) {
    console.error('Erreur:', err.message);
  }
}

AllFunctions();
