export interface Config {
  protocol: string
  host: string
  port: string
}

const config: Config = {
  protocol: 'http',
  host: 'localhost',
  port: '3000',
};

export default config;
