import {Platform} from 'react-native';

export type ApiTarget = 'local' | 'cloudflare';

export const API_TARGET: ApiTarget = 'cloudflare';

const LOCAL_API_HOST = Platform.select({
  android: '10.0.2.2',
  ios: '127.0.0.1',
  default: 'localhost',
});

const CLOUDFLARE_TUNNEL_URL =
  'https://acm-proposed-everyday-probability.trycloudflare.com';

const API_BASE_URLS: Record<ApiTarget, string> = {
  local: `http://${LOCAL_API_HOST}:5002/api`,
  cloudflare: `${CLOUDFLARE_TUNNEL_URL}/api`,
};

export const API_BASE_URL = API_BASE_URLS[API_TARGET];

// Change API_TARGET to 'cloudflare' when you want the mobile app to use the tunnel URL.
// For real device local testing, replace LOCAL_API_HOST with your laptop's local IP address.
// Example: 192.168.1.10
