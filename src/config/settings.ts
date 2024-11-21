interface ISettings {
  tokenKey: string;
  refreshTokenKey: string;
  jwtSecret: string;
}

const settings: ISettings = {
  tokenKey: 'vote-me-shorten.token',
  refreshTokenKey: 'vote-me-shorten.refreshToken',
  jwtSecret: process.env.JWT_SECRET || '',
};

export default settings;
