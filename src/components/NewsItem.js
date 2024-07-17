//rce
import React from 'react'

const NewsItem =(props)=> {
    let { title, description, image, url, author, date, source } = props;
    return (
      <div className='my-2'>
        <div className="card" >
          <div>

          <span className="badge rounded-pill bg-danger" style={{display:'flex', zIndex:'1', justifyContent:'flex-end', position:'absolute', right:'0'}}>
             {source?source:"Google News"}
          </span>
          </div>
          <img src={image?image:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/07/0/0/sun-valley-bezos.jpg?ve=1&tl=1"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-start">{title ? title : "petrol price in pakistan - The Economic Times"}...</h5>
            <p className="card-text text-start">{description}...</p>
            <p className="card-text text-start"><small className="text-body-secondary">By {author ? author : "Unknown"} On {new Date(date).toDateString()}</small></p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-dark ">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
