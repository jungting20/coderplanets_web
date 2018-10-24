/*
 *
 * RepoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, ReadedLabel, BodyDigest } from './styles'

import Header from './Header'
import Footer from './Footer'
import { makeDebugger, cutFrom } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:RepoItem:index')
/* eslint-enable no-unused-vars */

const getOpacity = (current, active, viewed) => {
  if (active.id) {
    return current.id !== active.id ? 0.6 : 1
  }
  return viewed ? 0.85 : 1
}

const RepoItem = ({ entry, active, onTitleSelect }) => (
  <Wrapper opacity={getOpacity(entry, active, entry.viewerHasViewed)}>
    {entry.viewerHasViewed ? <ReadedLabel>已读</ReadedLabel> : null}

    <Header entry={entry} onTitleSelect={onTitleSelect.bind(this, entry)} />
    <BodyDigest>{cutFrom(entry.desc, 180)}</BodyDigest>
    <Footer
      contributors={entry.contributors}
      author={entry.author}
      insertedAt={entry.insertedAt}
    />
  </Wrapper>
)

RepoItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  onTitleSelect: PropTypes.func,
}

RepoItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
}

export default RepoItem
