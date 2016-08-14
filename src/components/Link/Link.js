/* @flow */
import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export class Link extends Component {

  static propTypes = {
    children: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  onPress = () => {
    this.props.onPress()
  }

  render () {
    const { children } = this.props
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

export default Link
