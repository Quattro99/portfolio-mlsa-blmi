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
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm Michele Blum. I was born in Switzerland and have both Swiss and Italian roots. I'm 24 years old, and I can speak English, German, and Italian fluently.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Microsoft Azure Infrastructure",
  "Entra ID",
  "Identity & Access Management",
  "AVD",
  "Cloud Security",
  "Microsoft 365 suite",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "In my leisure time, I engage in activities that reflect my energetic and dynamic personality - gym, kickboxing, and exploring the adrenaline-pumping worlds of cars and motorcycles are a few of my passions. I'm studying at ipso! Bildung AG to graduate as a bachelor of technology in HF computer science, specializing in system and network technology with cybersecurity. When it comes to my work, I'm really interested in tech stuff. I am especially interested in Microsoft Azure Infrastructure, Entra ID, Identity & Access Management, and Cloud Security. Apart from these, I also know about Exchange Online, Exchange Online Protection, Microsoft Defender for Office, Microsoft Intune and Azure compute as well as networking. I also handle SQL databases and hybrid IT architectures. Last but not least, a long time ago, in a galaxy far, far away, I've heard some things about on-premise infrastructures and know my way around. Transforming my set of skills and interests into practical experiences, I'm committed to making valuable contributions in the Microsoft community.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
