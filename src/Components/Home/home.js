import React, { Component } from 'react';
import {AboutDisplay} from './AboutDisplay';



import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
      <div className="nav2">


                    <nav>
                       <ul class="nav">
                         <li class="nav-item">
                            <a class="nav-link" href="#" id ="ini">Inicio</a>
                         </li>
                       <li class="nav-item">
                            <a class="nav-link" href="#" id ="fit">Fitness</a>
                         </li>
                            </ul>
                       </nav>

               </div>


      <AboutDisplay />









    </div>
    );
  }
}

export default Home;
