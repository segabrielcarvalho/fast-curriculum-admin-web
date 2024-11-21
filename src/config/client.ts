interface IClientConfig {
  apiGraphqlUrl: string;
  apiWebSocketUrl: string;
}

const clientConfig = {
  apiGraphqlUrl:
    process.env.NEXT_PUBLIC_API_GRAPHQL_URL || 'http://localhost:3000/graphql',
  apiWebSocketUrl:
    process.env.NEXT_PUBLIC_API_WS_URL || 'ws://localhost:3000/graphql',
} as IClientConfig;

export default clientConfig;
