import { Component } from 'react'
import './app.scss'
import { foo } from './app.config'

class App extends Component {

  componentDidMount () {
    console.log('foo', foo)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
