import React from 'react'

class  StateComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  state = {
    count: 0,
    task: ''
  };
  handleClick() {
    this.setState({count : this.state.count + 1})
  }
  reset = () => {
    this.setState({count: 0, task: ''})
  }
  handleChange = (event) => {
       const value = event.target.value
    this.setState({task: value})
    // console.log(event.target.value)
  }
  // handleChange(event) {
  //   const value = event.target.value
  //   this.setState({task: value})
  //   console.log(event.target.value)
  // }
  render() {
    return <div>
        <button onClick={this.handleClick} >Click me</button>
        <button onClick={this.reset} >Reset </button>
       <h1>i am clicked {this.state.count} times</h1>
       <input onChange={this.handleChange} 
              type="text" 
              placeholder="enter text"
              value={this.state.task}
              name="taskss" />
       <p>{this.state.task}</p>
    </div>
  }
} 
export default StateComponent;