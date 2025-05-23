/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../../images/white_keyboard_bg.jpg";

import "./About.css"

const imageAltText = "white keyboard along with a notebook";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m passionate about harnessing Generative AI and Computer Vision to create intelligent tools that see, understand, and generate. I thrive on experimenting with language and vision models, automating workflows, and bringing ideas to life through quick prototypes. Always curious, always building, and always embracing new learning opportunities!";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "🚀 Hackathons fuel my creativity",
  "🛠️ Automating with web scraping",
  "🔍 Exploring real-world datasets",
  "💡 Turning data into insights",
  "🧠 Building with LLMs & GenAI",
  "🎓 Always learning & sharing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Outside of academics, I’ve worked as a freelancer, building custom web scrapers and automations for real-world use cases. It taught me how to move fast, solve practical problems, and pick up new tools on the go — skills I now carry into everything I build with AI.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="about-background" src={image} alt={imageAltText} />
      <div className="about-container">
        <h2>About me</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
