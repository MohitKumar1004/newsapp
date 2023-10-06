import React, { Component } from 'react'


export default class Spinner extends Component {
  render() {
    return (
        <div class="container text-center p-3">
            <div class="spinner-border" role="status">
                {/* <span class="sr-only">Loading...</span> */}
            </div>
        </div>
    )
  }
}
