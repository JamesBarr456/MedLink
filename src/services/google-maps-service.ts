import axios from 'axios';
import { config } from '@/config/public/dev';

export const geocodeAddress = async (address: string) => {
  const apiKey = config.apis.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === 'OK') {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error(`Error de geocodificación: ${response.data.status}`);
    }
  } catch (error) {
    console.error('Error en la petición de geocodificación:', error);
    throw error;
  }
};
