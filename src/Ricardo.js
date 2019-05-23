import React, { Component } from 'react';
import './App.css';

class Ricardo extends Component {
  render() {
    return (
      <div className="Ricardo">
        <h2>Personal Statement</h2>
        <p>Welcome to my portfolio site, my name is Jose Ricardo Chacon Rodriguez and I'm a Senior Computer Science student at NYU-Shanghai. My passion for tech and its development is founded mainly in understanding the underlying concepts and building blocks that allow people to tackle tasks and problems in faster and more efficient ways. I am always willing to collaborate with others in projects involving education and accessibility since these are two fields in which I think innovation can do a lot of good for society. Throughout the past 6 years I have had the privilege to learn a myriad of technologies and programming languages such as: C, C++, C#, CSS, HTML, Java, JavaScript, Python, PHP, Ruby, React, NodeJS and SQL. However, the most important part for me is to find the right tool for the job. </p>
      	<h2>Project Summary</h2>
      	<p>Youth Shared Knowledge (YSK) is a platform for young people to share knowledge with others aimed to work in areas like college campuses or cities where University students can meet fellow young people who either possess knowledge in a subject or area of interest or are interested in one of the areas the user can help with. For the moment it works as a note posting system with individual user logging system to ensure that users can't post anonymous notes which can generate issues.</p>
      	<h2>Research</h2>
      	<p>For this project, the interest was to understand the way young people engage with APPs nowadays and finding trends in popular APPs. Then, integrate those trends into a platform with a focus in engaging young people to teach one another in a real-life environment.</p>
		<p>By looking at APPs such as Tinder, Friendster, Snapchat, Instagram it was clear that the young audience set as the target demographic showed short attention spans with periodic user interaction. This meant that in order to make a successful APP, it was important to design an UX which would keep the users engaged and a minimalistic UI. </p>
		<p>The goal is to create an UI similar to that of Tinder in which the user "swipes" another user's profile card into either an interested or uninterested deck. In the particular case of YSK, the user "card" includes not only a profile picture but both interests for teaching and learning.</p>
      	<h2>Prototype (Access <a href="https://youthsharedknowledge.herokuapp.com/">Here</a>)</h2>
      	<p>This prototype allows users to sign in and create notes in the same way a forum would be used. Due to time constraints, this feature was the one chosen to be implemented as it would showcase the ability to have a global access to any user's published information if they so choose so. The notes work as a placeholder for what would be the users' "cards" which users of the platform can browse and decide whether they are interested or not.</p>
      	<img src={require('./prototype.png')}/>
        <h2>Future Work</h2>
      	<p>The next steps for this project are to implement a feature which first makes the users' "cards" from the signup information and then another feature that would stack the users' deck in order for the users to slide the given "cards" to the left or right of the screen to express interest.</p>
      </div>
    );
  }
}

export default Ricardo;

