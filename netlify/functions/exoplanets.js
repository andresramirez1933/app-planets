export async function handler(event, context) {
  try {
    const name = event.queryStringParameters?.name;

    if (!name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing 'name' parameter" }),
      };
    }

    // Codificar el nombre del planeta (importante para espacios)
    const encoded = encodeURIComponent(name.trim());

    const apiURL = `https://exo.mast.stsci.edu/api/v0.1/exoplanets/${encoded}/properties`;

    const response = await fetch(apiURL);

    // Si la API responde algo que NO es JSON → error
    const text = await response.text();

    let json;
    try {
      json = JSON.parse(text);
    } catch (err) {
      throw new Error('Invalid JSON from external API: ' + text.slice(0, 80));
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(json),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
}
