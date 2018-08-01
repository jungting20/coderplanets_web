/* config for different envs */

const getGraphQLEndpoint = () => {
  switch (process.env.GOAL) {
    case 'production':
      /* return 'http://api.coderplanets.com/graphiql' */
      return 'http://localhost:8000/graphiql'

    case 'dev':
      return 'http://devapi.coderplanets.com/graphiql'
    /* return 'http://devapi.coderplanets.com' */

    case 'local':
      return 'http://localhost:4001/graphiql'

    default:
      return 'http://localhost:4001/graphiql'
  }
}
export const GRAPHQL_ENDPOINT = getGraphQLEndpoint()
export const GITHUB_ADDR = 'https://github.com/mydearxym/mastani_web'
export const GITHUB_ME = 'https://github.com/mydearxym'
export const ISSUE_ADDR = 'https://github.com/mydearxym/mastani_web/issues/new'
export const MENTION_USER_ADDR = 'https://coderplanets.com/users/'
