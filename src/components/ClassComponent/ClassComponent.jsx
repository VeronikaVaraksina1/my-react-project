import React from "react";

class Greeting extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: this.props.initialName
    }
}

  handleClick = () => {
    this.setState({
      name: "Me"
    })
    this.props.onHide();
  }

  render() {
    return <div><p>Hello, <i onClick={this.handleClick}>{this.state.name}</i></p></div>
  }
}

export class ClassComponent extends React.Component {

  state = {
    show: true
  }

  render() {
    return <>
    <h2>Classic component</h2>
    {this.state.show ? <Greeting initialName="Everyone" onHide={() => {
      this.setState({show: false})
    }} /> : null }
    </>
  }
}

// this.state.show && <Greeting><h1>hello world</h1></Greeting> 