export type ContactEvidenceStatus = 'pending';

export interface OfficeLocation {
  id: string;
  city: string;
  autonomousCommunity: string;
  cityCenter: {
    latitude: number;
    longitude: number;
    precision: 'approximate-city-centre';
  };
  contact: {
    address: null;
    addressStatus: ContactEvidenceStatus;
    phone: null;
    phoneStatus: ContactEvidenceStatus;
  };
  officialSource: {
    label: string;
    url: string;
    reviewedAt: string;
  };
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export const OFFICIAL_OFFICE_FINDER_URL =
  'https://administracion.gob.es/pag_Home/atencionCiudadana/encuentraTuOficina.html';

const SOURCE = {
  label: 'Punto de Acceso General: buscador oficial de oficinas',
  url: OFFICIAL_OFFICE_FINDER_URL,
  reviewedAt: '2026-08-12',
};

const PENDING_CONTACT = {
  address: null,
  addressStatus: 'pending',
  phone: null,
  phoneStatus: 'pending',
} satisfies OfficeLocation['contact'];

function city(
  id: string,
  name: string,
  autonomousCommunity: string,
  latitude: number,
  longitude: number,
): OfficeLocation {
  return {
    id,
    city: name,
    autonomousCommunity,
    cityCenter: {
      latitude,
      longitude,
      precision: 'approximate-city-centre',
    },
    contact: { ...PENDING_CONTACT },
    officialSource: { ...SOURCE },
  };
}

export const OFFICE_LOCATIONS: readonly OfficeLocation[] = [
  city('madrid', 'Madrid', 'Comunidad de Madrid', 40.4168, -3.7038),
  city('barcelona', 'Barcelona', 'Cataluña', 41.3874, 2.1686),
  city('valencia', 'Valencia', 'Comunitat Valenciana', 39.4699, -0.3763),
  city('sevilla', 'Sevilla', 'Andalucía', 37.3891, -5.9845),
  city('bilbao', 'Bilbao', 'País Vasco', 43.263, -2.935),
  city('malaga', 'Málaga', 'Andalucía', 36.7213, -4.4214),
  city('zaragoza', 'Zaragoza', 'Aragón', 41.6488, -0.8891),
  city('las-palmas', 'Las Palmas de Gran Canaria', 'Canarias', 28.1235, -15.4363),
  city('murcia', 'Murcia', 'Región de Murcia', 37.9922, -1.1307),
  city('palma', 'Palma', 'Illes Balears', 39.5696, 2.6502),
  city('alicante', 'Alicante', 'Comunitat Valenciana', 38.3452, -0.481),
  city('a-coruna', 'A Coruña', 'Galicia', 43.3623, -8.4115),
  city('valladolid', 'Valladolid', 'Castilla y León', 41.6523, -4.7245),
  city('santa-cruz-tenerife', 'Santa Cruz de Tenerife', 'Canarias', 28.4636, -16.2518),
  city('almeria', 'Almería', 'Andalucía', 36.834, -2.4637),
  city('girona', 'Girona', 'Cataluña', 41.9794, 2.8214),
  city('huelva', 'Huelva', 'Andalucía', 37.2614, -6.9447),
  city('pamplona', 'Pamplona', 'Navarra', 42.8125, -1.6458),
];

export function haversineDistanceKm(from: GeoPoint, to: GeoPoint): number {
  const earthRadiusKm = 6371.0088;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const latitudeDelta = toRadians(to.latitude - from.latitude);
  const longitudeDelta = toRadians(to.longitude - from.longitude);
  const fromLatitude = toRadians(from.latitude);
  const toLatitude = toRadians(to.latitude);
  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(fromLatitude) * Math.cos(toLatitude) * Math.sin(longitudeDelta / 2) ** 2;

  return 2 * earthRadiusKm * Math.asin(Math.sqrt(haversine));
}
