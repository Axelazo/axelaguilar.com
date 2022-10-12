import axios from 'axios';

const token =
  '49084d503e8fbfe6ce15212c4f389ac2fc3790655f38afbe368e74597a21abcf07a307cefb948c70f8dc894c0e2fa4c0570a44f46c77b129485ab8c9b02d15d82f91c678abb76822ec6f8688147ef4a8de753691f8ab6ca0151e83a4d0d2a68ba52d553ae861849e532096c2c50a7448bd07d535bdf17c293d05823ff6b95631';

//REFACTOR
export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : 'https:/api.axelaguilar.com';

const apiURL = '/api';

let fullURL = `${baseURL}${apiURL}`;

export default axios.create({
  baseURL: 'https:/api.axelaguilar.com/api',
  headers: { Authorization: `Bearer ${token}` },
});
