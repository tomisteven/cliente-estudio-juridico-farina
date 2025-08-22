// netlify/functions/reviews.js
import fetch from "node-fetch";

export async function handler(event, context) {
  const placeId = "TU_PLACE_ID"; // ID de tu negocio en Google Maps
  const apiKey = process.env.GOOGLE_API_KEY; // La API Key la guardás como variable de entorno en Netlify

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.result.reviews || []),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error obteniendo reseñas" }),
    };
  }
}
