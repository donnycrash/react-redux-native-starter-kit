import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '@redux/configureStore'
import Router from '@scenes'

const Kernel = () => (
  <Provider store={configureStore()}>
    <Router />
  </Provider>
)

export default Kernel
