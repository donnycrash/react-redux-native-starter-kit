/* @flow */

import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import styles from './styles'

export class Title extends Component {
  static propTypes = {
    children: PropTypes.string
  }

  render () {
    const { children } = this.props
    return (
      <Text style={styles.text}>{children}</Text>
    )
  }
}

export default Title
