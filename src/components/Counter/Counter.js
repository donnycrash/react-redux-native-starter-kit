/* @flow */
import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import Button from '@components/Button'
import styles from './styles'

export class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  }

  decrement = () => {
    this.props.decrement()
  }

  increment = () => {
    this.props.increment()
  }

  render () {
    const { value } = this.props
    return (
      <View style={styles.container}>
        <Button onPress={this.decrement}>-</Button>
        <Text style={styles.value}>{value}</Text>
        <Button onPress={this.increment}>+</Button>
      </View>
    )
  }
}

export default Counter
