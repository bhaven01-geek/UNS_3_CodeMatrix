import React from "react";
import "./index111.css";

const choice = () => {
  return (
    <div>
      <center>
        <div>
          <h2>Welcome XYZ!</h2>
          <h3>Please Select your role</h3>
        </div>
      </center>
      <center>
        <div class='row row-cols-3 row-cols-md-2 g-10'>
          <div class='col'>
            <div class='card h-100'>
              <img
                src='/AfterLogin/images/stud.jpeg'
                class='card-img-top'
                alt='...'
              ></img>
              <div class='card-body'>
                <h5 class='card-title'>Learner </h5>
                <p class='card-text'>
                  Here u can register yourself as a learner, and connect with
                  several experts to learn topics of your choice!
                </p>
                <button type='button' class='btn btn-outline-primary'>
                  Register as a Learner
                </button>
              </div>
            </div>
          </div>
          <div class='col'>
            <div class='card h-100'>
              <img
                src='/AfterLogin/images/tea.jpeg'
                class='card-img-top'
                alt='...'
              ></img>
              <div class='card-body'>
                <h5 class='card-title'>Tutor </h5>
                <p class='card-text'>
                  Register as a tutor and teach to your hearts content on the
                  topic you love!
                </p>
                <button type='button' class='btn btn-outline-primary'>
                  Register as a Tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default choice;
