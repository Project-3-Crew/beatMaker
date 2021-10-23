import React from 'react';

const Home = () => {


  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a',}}
        > 
         <h2>Welcome to the BeatMaker App</h2>
         <p>The BeatMaker App is a platform the user 
           can come to and have some fun.
         </p>
         <ul>Features</ul>
         <li>Login/Signup</li>
         <li>Create Beat</li>
         <li>Blog with friends</li>
        </div>
        <div className="col-12 col-md-8 mb-3">
        
          
        </div>
      </div>
    </main>
    
  );
};

export default Home;
