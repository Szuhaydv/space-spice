import { Link } from "react-router-dom"

export default function SingleRecipe({id, image, title, readyInMinutes}) {
  return (
    <div className="item-sample item1">
      <div className="item-title-container">
        <h4>{title}</h4> 
      </div>      
      <div className="img-info-container">
        <div className="item-img-container">
          <img src={image} alt="item image" />
        </div>
        
        <div className="small-info">
          <div className="ready-time">
          <i className="fa-regular fa-calendar"></i>
          <h5>{readyInMinutes} min</h5>
          </div>
          <Link to={`/recipes/${id}`}><button><span>Show </span>More</button></Link>   
        </div>                                   
      </div>                                   
    </div>
  ) 
}