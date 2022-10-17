import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://strapi.staysane.me/graphql",
  cache: new InMemoryCache(),
})

export default client;