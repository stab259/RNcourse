const MAP_BOX_TOKEN = 'pk.eyJ1Ijoia2FyYTI1OSIsImEiOiJjbGVpNjV3bDAxMXZ6M3FtenV4ZTM4aHFiIn0.mmQufzud31ot6ai6eVOLEQ';

export function getMapPreview(lat, lng) {
  // console.log(lat, lng);
  const imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${lng},${lat},10/600x600?access_token=${MAP_BOX_TOKEN}`;

  return imagePreviewUrl;
}

