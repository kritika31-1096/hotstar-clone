import React, { Component, Fragment } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Fragment>
                
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                 <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="/slider1.webp" class="d-block w-100" style={{height: 400}} alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="/slider2.webp" class="d-block w-100" style={{height: 400}} alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="/slider3.webp" class="d-block w-100" style={{height: 400}} alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="/slider4.jpeg" class="d-block w-100" style={{height: 400}} alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="/slider5.webp" class="d-block w-100" style={{height: 400}} alt="..."/>
    </div>
     
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

            </Fragment>
        );
    }
}
 
export default Slider;