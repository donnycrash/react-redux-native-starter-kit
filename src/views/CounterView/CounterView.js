/* @flow */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '@redux/modules/Counter'
import Container from '@containers/Container'
import Title from '@components/Title'
import Counter from '@components/Counter'

class CounterContainer extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired
  }

  render () {
    const { counter, actions } = this.props
    return (
      <Container>
        <Title>Counter</Title>
        <Counter
          value={counter}
          decrement={actions.decreaseCounter}
          increment={actions.increaseCounter}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
