import R from 'ramda'

import { Observable } from 'rxjs/Observable'

import { makeDebugger, notEmpty } from '../functions'
import { TIMEOUT_THRESHOLD } from './setup'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('Network')
/* eslint-enable no-unused-vars */

export const TimoutObservable = Observable.of({
  error: 'TimeoutError',
  details: `TimeoutError in ${TIMEOUT_THRESHOLD} secs`,
})

export const formatGraphErrors = error => {
  const { graphQLErrors } = error
  // graphQLErrors may not catch in graph query (wrang sytax etc ...)
  // checkout this issue https://github.com/apollographql/apollo-client/issues/2810
  if (notEmpty(graphQLErrors)) {
    const details = []
    graphQLErrors.map(({ message, path, detail }) => {
      return details.push({
        detail: `${message} ${detail}`,
        path: path ? R.join(' |> ', path) : '',
      })
    })
    return { error: 'GraphQLError', details }
  }

  /* debug('maybe a network error') */
  return { error: 'NetworkError', details: 'checkout your server or network' }
}

export const getThenHandler = res => {
  switch (true) {
    case res.status >= 200 && res.status < 300:
      return Promise.resolve(res.text())
    case res.status === 404:
      return Promise.reject({
        error: 'NotFound',
        details: `${res.url}`,
      })
    default:
      debug('unhandle error: ', res)
      return Promise.reject({
        error: 10000,
        details: `${res.statusText}: unhandle`,
      })
  }
}

export const getCatchHandler = err => {
  switch (true) {
    /*
    case err instanceof TimeoutError:
      return {
        error: 'TimeoutError',
        details: `TimeoutError in ${GRAPHQL_TIMEOUT / 1000} secs`,
      }
      */
    case err.error === 'NotFound':
      return { error: err.error, details: err.details }
    default:
      return { error: err.error, details: err.details }
  }
}