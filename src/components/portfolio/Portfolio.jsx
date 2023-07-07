import { useState } from 'react'
import './portfolio.css'
import placeholder from '../../assets/projects/placeholder.jpg'
import meijerImg from '../../assets/projects/meijer.jpg'
import spotifyImg from '../../assets/projects/spotify.png'
import fordImg from '../../assets/projects/ford.png'
import movieImg from '../../assets/projects/movies.png'
import jpmcImg from '../../assets/projects/jpmc.jpg'
import personalImg from '../../assets/projects/personal.png'
import ModalDialog from './ModalDialog'

// get from dribble site

const data = [
  {
    id: 1,
    image: jpmcImg,
    title: 'Smart App Admin Page UI',
    description: "During my software engineering internship at JPMorgan Chase in the summer of 2023, I worked alongside a team of two other interns in an agile environment. Our main objective was to develop a user interface using ReactJS for an internal microservice's admin tables. Additionally, we created custom REST API endpoints to facilitate seamless communication between the user interface and the microservice's database. Through our collaborative efforts, we successfully implemented features such as data fetching, display, filtering, and updates. This project not only enhanced the functionality and usability of the admin interface but also contributed to improving internal operations at JPMorgan Chase.",
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: meijerImg,
    title: 'Organization Efficiencies Utilizing WiFi Locationing',
    description: "In collaboration with Meijer, a midwestern supermarket chain, my team of five senior computer science students developed 'Organization Efficiencies Utilizing WiFi Locationing' as part of our capstone course at Michigan State University. This project aimed to optimize Meijer's Mobile Shop & Scan system by allowing customers to complete purchases entirely on their mobile devices. Using MIST wireless access points, we triangulated the precise locations of customers within the store and provided managers with a dashboard displaying a heat map and metrics for informed decision-making. Our software included consumer and employee mobile apps built with React Native, a web app powered by ReactJS and Microsoft Power BI, and a Microsoft SQL database for data storage. This project successfully improved store efficiency, customer service, and provided valuable insights for Meijer's operations.",
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: fordImg,
    title: 'FordPass Icon Library Project',
    description: "During my software engineering internship at Ford Motor Company in the summer of 2022, I worked on the FordPass Icon Library Project. The goal was to match existing icons in the iOS FordPass application with new icons in a separate icon library. To accomplish this, I developed a Python script that standardized and compared the icons. The script searched for icons in the application, standardized their format, and utilized OpenCV to create masks for accurate comparison. By calculating the percentage difference between pixels, I identified the most similar icons in the new library. This project aimed to enhance the user interface consistency within FordPass, improving the overall user experience.",
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: personalImg,
    title: 'Personal Portfolio Website',
    description: "I created a personal portfolio website using ReactJS and CSS, deploying it on GitHub Pages. The website serves as a platform to showcase my skills, experiences, projects, and provides multiple avenues for contacting me through messaging and social media. Designed to be visually appealing and user-friendly, the website presents information about myself, including my background, education, and professional experiences. It also features a portfolio section with project descriptions and technologies used. With the purpose of highlighting my abilities and fostering professional connections, the website serves as a valuable tool for self-presentation and networking opportunities.",
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: spotifyImg,
    title: 'Spotify Song Popularity with Machine Learning',
    description: "In my final project for the Introduction to Machine Learning class at Michigan State University, my team of four senior computer science students worked on a Spotify's top chart songs analysis. We obtained a dataset from Kaggle that included information about Spotify's top chart songs from 2022, such as peak rank, weeks on the charts, and various song attributes like danceability, energy, and tempo. Using this dataset, we applied two machine learning techniques. First, we used Sci-Kit Learn to developed a linear regression model to predict the number of weeks a song stays on the charts based on its features. The analysis revealed that attributes like danceability, energy, loudness, and tempo had a positive correlation with song popularity and longevity, while acousticness and instrumentalness had a negative correlation. Additionally, we built a neural network model to predict a song's mode (major or minor) based on its features, uncovering the subjective qualities that influence the overall mood and tone of a song. This project provided insights into the factors influencing song popularity and the impact of subjective attributes on music. The findings can be valuable for music industry professionals in decision-making processes related to song production and marketing strategies. Through collaboration and thorough analysis, we presented our findings in a comprehensive paper documenting our research.",
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: movieImg,
    title: 'Movie Catalog Website',
    description: "The Movie Catalog Website was a project where I utilized ReactJS and the OMDb API to create a visually appealing platform for users to search and browse movie titles. With a focus on user experience, I developed a responsive and intuitive interface that allowed users to search for movies and retrieve their posters. This project provided me with valuable practice in ReactJS, CSS styling, and making API requests, enhancing my web development skills and allowing me to create an engaging movie catalog website.",
    demo: 'https://dribbble.com'
  },
]

const Portfolio = () => {
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {/* <ModalDialog/> */}
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <ModalDialog title={title} description={description}/>
                  {/* <button className='btn btn' onClick={() => {setShow(!isShow)}}>Description</button> */}
                  {/* <a href={github} className='btn' target='_blank'>Github</a> */}
                  {/* <ModalDialog className='modal'/> */}
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio