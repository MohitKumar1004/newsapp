import React from 'react'

export default function NewsItem(props){

    let {title, description,imageUrl,newsUrl,author,date,source} = props;

    return (
        <div className="card h-100 my-3">
            <div className="d-flex justify-content-flex-end align-items-center position-absolute" style={{right:'0'}}>
                <span className="badge rounded-pill bg-danger">
                    {source}
                </span>
            </div>
            <img src={imageUrl||imageUrl===''?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvJKmuP2V26c9zsN0uTAg-ugu3wbMRPyL54iqLoX_PYb54tRUEBEN1b-RL_7qkuAnWRY&usqp=CAU"} className="card-img-top object-fit-cover" style={{height:'35%'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <p className="card-text mx-3 mt-auto">
                <small className="text-muted">
                    By {author?author:"unknown"} on {date?(new Date(date)).toGMTString():""}
                </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary mx-3 mb-3">Read more</a>
        </div>
    )
}
