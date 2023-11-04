import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="row1" style={{"backgroundColor": "red"}}>
          <div class="row1section1">
              <div>
                  <img src="images/Dinesh.jpg" alt="" class="logo" />
              </div>
              <div>
                  <h3>Dinesh</h3>
                  <div>Technical Trainer</div>
                  <div>Web Developer</div>
                  <div>Email Me</div>
              </div>
          </div>
          <div class="row1section2">
              <div>Projects</div>
              <div>About Me</div>
              <div>Contact Me</div>
          </div>
      </div>
      <div class="row2">
          <h3>Projects / Experiences</h3>
          <div class="row2section1">
              <div>
                  <img src="images/background.jpeg" alt="" /><br />
                  Project 1<br />
                  Project Description goes here...
              </div>
              <div>
                  <img src="images/background.jpeg" alt="" /><br />
                  Project 1<br />
                  Project Description goes here...
              </div>
              <div>
                  <img src="images/background.jpeg" alt="" /><br />
                  Project 1<br />
                  Project Description goes here...
              </div>
              <div>
                  <img src="images/background.jpeg" alt="" /><br />
                  Project 1<br />
                  Project Description goes here...
              </div>
              <div>
                  <img src="images/background.jpeg" alt="" /><br />
                  Project 1<br />
                  Project Description goes here...
              </div>
              <div>
                  <img src="images/background.jpeg" alt="" /><br />
                  Project 1<br />
                  Project Description goes here...
              </div>
          </div>
      </div>
      <div class="row3">
          <h3>About Me</h3>
          <div class="row3section1">
              <div>
                  <h4>Personal Details</h4>
                  <ul>
                      <li>ITEM</li>
                      <li>ITEM</li>
                      <li>ITEM</li>
                      <li>ITEM</li>
                  </ul>
              </div>
              <div>
                  <h4>Educational Details</h4>
                  <ul>
                      <li>ITEM</li>
                      <li>ITEM</li>
                      <li>ITEM</li>
                      <li>ITEM</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="row4">
          <div>&copy; Copyright. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default App;
