import React, { Component } from 'react'

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
    formList: []
  }

  nameInfo = e => {
    this.setState({
      name: e.target.value
    })
  }

  phoneInfo = e => {
    this.setState({
      phone: e.target.value
    })
  }

  saveListToLocalStorage = () => {
    this.setState({
      formList: this.state.formList.concat(
        `${this.state.name}: ${this.state.phone}`
      )
    })
  }

  // handleSubmit = e => {
  //   //prevent page reloading
  //   e.preventDefault()
  //   //send this state value to parent via onCreate
  //   this.props.onCreate(this.state)
  //   //state reset
  //   this.setState({
  //     name: '',
  //     phone: ''
  //   })
  // }

  // componentDidMount() {
  //   const listFromStorage = localStorage.getItem('grab-phone-info')
  //   if (listFromStorage) {
  //     this.setState({
  //       list: listFromStorage.split(',')
  //     })
  //   }
  // }

  render() {
    return (
      <>
        <header>Hello, Phone Book!</header>
        <div>
          <form>
            <input
              placeholder="name"
              value={this.state.name}
              onChange={this.nameInfo}
              // name="name"
            />
            <input
              placeholder="phone"
              value={this.state.phone}
              onChange={this.phoneInfo}
              // name="phone"
            />
            <button onClick={this.saveListToLocalStorage}>Save</button>
          </form>
          <ul>
            {this.state.formList.map(info => {
              return <li>{info}</li>
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default PhoneForm
