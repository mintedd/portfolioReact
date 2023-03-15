import React from 'react';
import profilepic from '../../assets/profilepic.png'

function About() {
  return (

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src={profilepic} style={{ height: 150 }}></img>
        <h1 class="display-4">About Me</h1>
        <p class="lead">Graduated from The Ohio State University. Recieved a Bachelor of Science in Biology Pre-Medicine and Minored in Korean. After graduation, Covid hit and I ended up helping my mother out with her cafe business. However, due to the pandemic we had to shut that down and I went into pursue my career in Real Estate. Loved what I did but wanted a bit more structure to my life so here I am now pursuing Software Engineering</p>
      </div>
    </div>
  );
}

export default About;