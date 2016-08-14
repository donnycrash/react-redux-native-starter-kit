/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { styles } from '@components/NavigationBar'
import LaunchView from '@views/LaunchView'
import CounterView from '@views/CounterView'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container}>
    <Scene key="welcome" component={LaunchView} title="Welcome" />
    <Scene key="counter" component={CounterView} title="Counter" />
  </Scene>
)

export default scenes
