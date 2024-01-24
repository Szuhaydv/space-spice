export default function Contact() {
  return(
    <div className="contact-page">
          <h3>Contact</h3>
          <div className="info-box">
            <div className="address">
              <div className="icon-container">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h5>ADDRESS: </h5>
              <h6><b>Street Address:</b> 1520 Nutters Barn Lane</h6>
              <h6><b>City:</b> Moorland</h6>
              <h6><b>State/Province:</b> IA</h6>
              <h6><b>Country:</b> US</h6>
              <h6><b>Zipcode:</b> 50566</h6>
              
            </div>
            <div className="phone">
              <div className="icon-container">
                <i className="fa-solid fa-phone"></i>
              </div>                            
              <h5>PHONE: </h5>
              <h6>+1 724-459-4103</h6>
              <h6>(+1 225-307-9740)</h6>
            </div>
            <div className="email">
              <div className="icon-container">
                <i className="fa-solid fa-envelope"></i>
              </div> 
              <h5>EMAIL: </h5>
              <h6>spacespice@sample.com</h6>
            </div>
          </div>          
        </div>
  )
}