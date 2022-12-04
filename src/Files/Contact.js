import React, { Component } from 'react'

export class Contact extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            name: '',
            number: '',
            course: '',
            email: '',
            address: ''
          }
        }
        nameHandle = (e)=> {
          this.setState({
            name: e.target.value
          })
        }
        numberHandle = (e)=> {
          this.setState({
            number: e.target.value
          })
        }
        courseHandle = (e)=>{
          this.setState({
            course: e.target.value
          })
        }
        emailHandle = (e)=> {
          this.setState({
            email: e.target.value
          })
        }  
        addressHandle = (e)=>{
          this.setState({
            address: e.target.value
          })
        }
        submitHandle = ()=> {
          alert(`Name : ${this.state.name} , Phone-Number : ${this.state.number} , Course-Name : ${this.state.course} , Email : ${this.state.email} , Address : ${this.state.address}`)
        }
        render() {
          return (
            <div>
              <div className="container-fluid ">
                <div className="row-cols-1 col-md-6 mx-auto border border-3 rounded p-3 card mt-3">
                  <form onSubmit={this.submitHandle}>
                    <div class="mb-3">
                      <label class="form-label">Name :</label>
                      <input type="text" class="form-control required" value={this.state.name} onChange={this.nameHandle}/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Phone-Number :</label>
                      <input type="number" class="form-control required" value={this.state.number} onChange={this.numberHandle}/>
                    </div>
                     <div class="mb-3">
                      <label class="form-label">Course :</label>
                      <input type="text" class="form-control" value={this.state.course} onChange={this.courseHandle}/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email :</label>
                      <input type="email" class="form-control" value={this.state.email} onChange={this.emailHandle}/>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Address :</label>
                      <input type="text" class="form-control" value={this.state.address} onChange={this.addressHandle}/>
                    </div>
                    <div className="row-cols-1 col-md-4 mx-auto mt-4">
                      <button type="sumbit" className="btn btn-success fw-bold">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      
    )
  }
}

export default Contact