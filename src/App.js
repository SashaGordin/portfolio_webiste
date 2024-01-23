import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Project from './components/Project.jsx';
import Layout from './components/Layout.jsx';
import Footer from './components/Footer.jsx';
import FEC from '../src/assets/FEC.jpg'
import SDC from '../src/assets/SDC.jpg'
import MVP from '../src/assets/MVP.png'
import BlueOcean from '../src/assets/BO.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';


function App() {


  const projects = [
    { image: FEC, projectId: "FEC", projectName: 'Frontend Capstone', github: "https://github.com/FEC-CLL/FEC", summary: "This frontend application was built based off of an amazon product description page.", explanation: `
    I built this frontend page alongside 3 other software engineers. Each engineer was responsible for their particular component. The components consisted of Product Description, Ratings and Reviews, Questions and Answers, and Related Items.
    I was responsible for the Questions and Answers component which included several features such as a Search Bar to filter questions based off of keyword, an add answer feature, an add question feature, ability to upvote a helpful question/answer
    and to report an unhelpful question/answer, among others. The biggest challenge for me was implementing the add image feature. When a user wants to answer a question/add a question they have the ability to select a photo from their local device
    and add it to the client side application. This was challenging to implement because the FileReader converts an image to a blob, so learning how to convert it to a dataURL and then store it on the cloud with Cloudinary to actually display on the
    front end took a lot of research. Our application achieved an overall score of 92 on Lighthouse tests which we were proud of. I was able to reduce the FCP(first contentful paint) from 2.7 to 1.7 seconds, resulting in a 37% boost! Overall, I am
    pleased with the result and think our Frontend Capstone had a great look` , techStack: `The tech stack for this application included React, AWS, Express.js, Jest, Node.js, MongoDB, and Git. The biggest
    challenge for me was learning how to use Jest. I had never written unit tests with Jest in the past so it was a good learning experience for me. I was able to achieve over 70% test coverage on my component which I was proud of. I feel much more confident
    writing unit tests and using Jest due to this project.`, video: {link: '/videos/FEC.mp4', orientation: "horizontal"}},
    { image: SDC, projectId: "SDC", projectName: 'System Design Capstone', github : "https://github.com/SDC-SwellSpinach/Products", summary: "A social networking mobile application designed to allow users to find and invite friends to nearby outdoor adventures.", explanation: `I built this application alongside 5 other software engineers. I was personally responsible for building out the map component.
    I used an events API and partenered with the Google's Map API I was able to create a interactive map where the user could move around to
    different locations in the US and find outdoors events in the area. The user could move around the map manually while also entering a zipcode
    to move to a specific location on the map. In addition, I had the role of Project Manager for this project which meant being the head of communications
    with the stakeholder. I made sure to balance the stakeholders expectations with our timeline, we were able to implement most of the features initially discussed
    and create a full-looking application.` , techStack: `The tech stack for this application included React Native, JavaScript, Expo, Node.js and Firebase. The biggest challenge for us was learning
    Firebase and React Native. Expo proved to be rather straightforward although we had no prior experinece with it, while Firebase had a big learning curve and we had to dedicate
    an engineer to become and expert in Firebase and own it for the project. Prior to this project, I had no experience with React Native. Learning
    it as well as Firebase and Google Maps API all within a 2 week time span was challenging but gave me confidence in my ability to adapt and learn
    new skills.`, video: {link: '/videos/FEC.mp4',  orientation: "horizontal"}},
    { image: MVP, projectId: 'MVP', projectName: 'Contractors Delight', github: "https://github.com/SashaGordin/MVP", summary: "A social networking mobile application designed to allow users to find and invite friends to nearby outdoor adventures.", explanation: `I built this application alongside 5 other software engineers. I was personally responsible for building out the map component.
    I used an events API and partenered with the Google's Map API I was able to create a interactive map where the user could move around to
    different locations in the US and find outdoors events in the area. The user could move around the map manually while also entering a zipcode
    to move to a specific location on the map. In addition, I had the role of Project Manager for this project which meant being the head of communications
    with the stakeholder. I made sure to balance the stakeholders expectations with our timeline, we were able to implement most of the features initially discussed
    and create a full-looking application.` , techStack: `The tech stack for this application included React Native, JavaScript, Expo, Node.js and Firebase. The biggest challenge for us was learning
    Firebase and React Native. Expo proved to be rather straightforward although we had no prior experinece with it, while Firebase had a big learning curve and we had to dedicate
    an engineer to become and expert in Firebase and own it for the project. Prior to this project, I had no experience with React Native. Learning
    it as well as Firebase and Google Maps API all within a 2 week time span was challenging but gave me confidence in my ability to adapt and learn
    new skills.`, video: {link: '/videos/FEC.mp4',  orientation: "horizontal"}},
    { image: BlueOcean, projectId: "BlueOcean", projectName: 'One Adventure', github: "https://github.com/One-Piece-Blue-Ocean/OneAdventure", summary: "A social networking mobile application designed to allow users to find and invite friends to nearby outdoor adventures.", explanation: `I built this application alongside 5 other software engineers. I was personally responsible for building out the map component.
    I used an events API and partenered with the Google's Map API I was able to create a interactive map where the user could move around to
    different locations in the US and find outdoors events in the area. The user could move around the map manually while also entering a zipcode
    to move to a specific location on the map. In addition, I had the role of Project Manager for this project which meant being the head of communications
    with the stakeholder. I made sure to balance the stakeholders expectations with our timeline, we were able to implement most of the features initially discussed
    and create a full-looking application.` , techStack: `The tech stack for this application included React Native, JavaScript, Expo, Node.js and Firebase. The biggest challenge for us was learning
    Firebase and React Native. Expo proved to be rather straightforward although we had no prior experinece with it, while Firebase had a big learning curve and we had to dedicate
    an engineer to become and expert in Firebase and own it for the project. Prior to this project, I had no experience with React Native. Learning
    it as well as Firebase and Google Maps API all within a 2 week time span was challenging but gave me confidence in my ability to adapt and learn
    new skills.`, video: {link: '/videos/BO.mp4',  orientation: "vertical"}},
  ]

  return (
    <Router>
      <Routes>
        <Route path="/"
          element={
            <div>
              <Element name="home" >
                <Layout>
                  <Home />
                </Layout>
              </Element>
              <Element name="about" >
                <Layout>
                  <About />
                </Layout>
              </Element>
              <Element name="skills" >
                <Layout>
                  <Skills />
                </Layout>
              </Element>
              <Element name="projects" >
                <Layout>
                  <Projects projects={projects} />
                </Layout>
              </Element>
              <Element name="contact" >
                <Layout>
                  <Contact />
                </Layout>
              </Element>
              <Footer />
            </div>
          }
        >
        </Route>
        <Route path="/projects/:projectId"
          element={
            <Layout>
              <Project projects={projects}/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

