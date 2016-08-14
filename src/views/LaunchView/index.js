/* @flow */

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import Container from '@containers/Container'
import Title from '@components/Title'
import Link from '@components/Link'

class LaunchView extends Component {
  render () {
    return (
      <Container>
        <Title>Because someone decided counters are fun!</Title>
        <Link onPress={Actions.counter}>Go to counter</Link>
      </Container>
    )
  }
}

export default LaunchView
