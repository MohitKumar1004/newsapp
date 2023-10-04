import React, { Component } from 'react'


export default class Spinner extends Component {
  render() {
    return (
        <div class="d-flex align-items-center justify-content-center text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
  }
}
