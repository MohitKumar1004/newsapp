import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
            <div className="card my-3">
                <div className="d-flex justify-content-flex-end align-items-center position-absolute" style={{right:'0'}}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2023-10/inb0gkmg_constable-killed_625x300_01_October_23.jpg"} className="card-img-top img-responsive" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <small className="text-muted">
                        By {author?author:"unknown"} on {date?(new Date(date)).toGMTString():""}
                    </small>
                </p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}
