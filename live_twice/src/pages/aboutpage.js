import React, { PureComponent } from 'react';

import Footer from '../components/Footer';
import image1 from ".././livetwice.jpg";
import image2 from ".././livetwice1.jpg";
import image3 from ".././livetwice2.jpg";
import './aboutus.css';
export default class Aboutpage extends PureComponent {
    render() {
        return (
            <div>
                
                <h1 class="display-5 mt-4">About Us</h1>
                <figure>
  <blockquote class="blockquote mt-4">
    <p>“You only live twice:<br/>
Once when you are born<br/>
And once when you look death in the face”.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
  Ian Fleming<cite title="Source Title">, You Only Live Twice</cite>
  </figcaption>
</figure>


<div style={{"display":"flex","flexDirection":"row"}}>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{"width":"38rem","marginLeft":"5rem","borderRadius":"8px"}}>
      <img src={image1} class="d-block" alt="..." style={{"width":"38rem","marginLeft":"5rem","borderRadius":"8px"}}/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block" alt="..." style={{"width":"38rem","marginLeft":"5rem","borderRadius":"8px"}}/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block" alt="..." style={{"width":"38rem","marginLeft":"5rem","borderRadius":"8px"}}/>
    </div>
  </div>
</div>
  

<div style={{"width":"40rem"}}>
    <p class="lead p-4">This one may seem obvious, but there’s nothing like a good, concrete trigger to get a memory flowing. Flip through photo albums and yearbooks, watch home movies, sort through old letters and e-mails you’ve saved, etc. You can even search for triggers online, including music, pictures, and videos from the era in question (one YouTube clip of Eureeka’s Castle, and half my childhood comes flooding back).
    <br/><br/>
    Autobiographical memory is special. It comprises both episodic memory (memory for events) and semantic memory (general knowledge), but it is unique in that all of the memories are relevant to YOU. Unlike other systems of memory, autobiographical memory contributes to the formation of your sense of self. It is not simply a log of your daily activities—the memories form the story of your life.
    <br/><br/>
    An honest memoir is an unforgettable memoir.
    <br/><br/>
    We wanted to build an app that’s used and loved by people all around the world, we are a team with all kinds of different perspectives, experiences and backgrounds. Be a part of something bigger and better- LiveTwice 
    </p>

</div>


</div>
                <Footer />
           <div>
                    <ul class="bg-bubbles">
                <li className="bubbles blue"></li>
              <li className="bubbles red"></li>
              <li className="bubbles blue"></li>
              <li className="bubbles"></li>
              <li className="bubbles blue"></li>
              <li className="bubbles red"></li>
              <li className="bubbles"></li>
              <li className="bubbles blue"></li>
              <li className="bubbles red"></li>
            </ul>  
            </div>
            </div>
        )
    }
}
