/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import "./Portfolio.css";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

// side image is not required
// import image from "../images/design-desk.jpeg";
// const imageAltText = "desktop with books and laptop";

import image_ted from "../../images/projects/ted.png";
import image_valorant from "../../images/projects/valorant.jpg";
import image_resume from "../../images/projects/resume.jpg";
import image_automation from "../../images/projects/Firefly-automation.jpg";
import image_lyrics from "../../images/projects/music.jpg";
import image_face from "../../images/projects/masked_face.jpg";
import image_chatbot from "../../images/projects/openai-lockup.png";
import image_mm from "../../images/projects/openai-lockup.png";
import image_face_recognition from "../../images/projects/face-recognition.jpg";
import image_lppa from "../../images/projects/Gemini.png";
import image_doc_AI from "../../images/projects/Firefly-chatbot.jpg";
import piano_tiles from "../../images/projects/piano-tiles.jpg";
import monkeytype from "../../images/projects/monkeytype.png";
import nutrilytics from "../../images/projects/nutrition.jpg";
import datamatics from "../../images/projects/datamatics.png";
import invisibility_cloak from "../../images/projects/invisibility_cloak.png";
import history from "../../images/projects/history.jpg";
import vehicle from "../../images/projects/vehicle.jpg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Visualizing TED Talks",
    description:
      "Scraping the transcript of TED Talks and visualizing it using WordCloud.",
    url: "https://github.com/45H15H/Scraping-TED",
    image: image_ted,
  },
  {
    title: "Nutrilytics",
    description: "A web app that helps you get detailed nutritional analysis in seconds.",
    url: "https://nutrilytics.ashishs.codes",
    image: nutrilytics,
  },
  {
    title: "Immersive History",
    description: "Step into the past and explore captivating historical stories through interactive mediums.",
    url: "https://history.ashishs.codes",
    image: history,
  },
  {
    title: "Meeting Minutes Generator",
    description: "A simple web app that generates meeting minutes using OpenAI's GPT-3 and TTS API.",
    url: "https://meeting-minutes-v1.streamlit.app/",
    image: image_mm,
  },
  {
    title: "LinkedIn Profile Picture Analyzer",
    description: "A simple web app that analyzes your LinkedIn profile picture using Google's Gemini.",
    url: "https://linkedin-profile-picture-analyzer.streamlit.app/",
    image: image_lppa,
  },
  {
    title: "Soppy-Mails",
    description: "A RPA project that automates customer feedback management using Datamatics tools.",
    url: "https://github.com/45H15H/Datamatics-Hackathon",
    image: datamatics,
  },
  {
    title: "RoadIntel",
    description: "A real-time AI system for vehicle detection, tracking, and semantic analysis using YOLO and Gemini.",
    url: "https://github.com/45H15H/roadIntel",
    image: vehicle,
  },
  {
    title: "Doja Cat Lyrics Dataset",
    description:
      "Immerse yourself in the emotional journey of Doja Cat's music with this sentiment analysis dataset.",
    url: "https://www.kaggle.com/datasets/ashish51ngh/doja-cat-lyrics",
    image: image_lyrics,
  },
  // {
  //   title: "GUI Automation Showcase",
  //   description: "A collection of practical GUI automation projects.",
  //   url: "https://github.com/45H15H/GUI-Automation/",
  //   image: image_automation,
  // },
  {
    title: "Image Anonymizer",
    description: "Utilizing image recognition techniques to automatically detect and mask faces in images.",
    url: "https://github.com/45H15H/Privacy_protection",
    image: image_face,
  },
  {
    title: "Face Recognition",
    description: "A face recognition app that recognizes faces in images.",
    url: "https://github.com/45H15H/face-recognition",
    image: image_face_recognition,
  },
  {
    title: "Document Assistant",
    description: "AI chatbot answering queries from uploaded documents.",
    url: "https://interactive-pdf-reader.streamlit.app/",
    image: image_doc_AI,
  },
  {
    title: "Mini Project",
    description: "Automated piano tiles game using OpenCV and PyAutoGUI.",
    url: "https://github.com/45H15H/GUI-Automation/blob/main/Piano-Tiles/tileClick.py",
    image: piano_tiles,
  },
  {
    title: "Valorant Sprays as Stickers",
    description:
      "A unique WhatsApp sticker app that brings the vibrant world of Valorant to your conversations!",
    url: "https://github.com/45H15H/WhatsApp_Sticker_App",
    image: image_valorant,
  },
  {
    title: "Mini Project",
    description: "Automated monkeytype game using PyAutoGUI and Browser Automation.",
    url: "https://github.com/45H15H/GUI-Automation/tree/main/monkeytype",
    image: monkeytype,
  },
  {
    title: "Mini Project",
    description: "Invisiblity cloak using OpenCV and Python.",
    url: "https://github.com/45H15H/Invisibility-Cloak",
    image: invisibility_cloak,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}> 
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease 0s 1 slideInFromLeft"
            }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="card">
                  <img src={project.image} alt={project.title} />
                  <div className="card-content">
                    <h3 style={{ fontWeight: "bold", fontSize: "16px", fontFamily: "Arial" }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: "16px", fontFamily: "Arial" }}>{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
