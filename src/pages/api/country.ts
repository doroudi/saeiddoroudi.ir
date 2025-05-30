export const get = ({ request }) => {
    const country = request.headers.get('CF-IPCountry') || 'Unknown';
    return new Response(JSON.stringify({ country }), {
      headers: { 'Content-Type': 'application/json' }
    });
  };