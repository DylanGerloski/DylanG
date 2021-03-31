import React from 'react'
import './Projects.css'
import atom from "../img/Atom-gif.gif"
import ms from '../img/mandelbrot-img.jpg'
import movie from '../img/movie.jpg'
import ai from '../img/mlImg.jpg'


const projects = [
    {
        id: '1',
        name: 'Atomination',
        description:'A Desktop game similiar to minesweeper (built with java). Each game can have between 2-4 players, and the winner is the player who controls all the circles on the board',
        link: 'https://github.com/DylanGerloski/Atomination',
        img: atom
    },
    {
        id: '2',
        name: 'Mandlebrot Set',
        description: 'A C program that renders a picture from the mandelbrot set. Also features parrallel computing to speed up the rendering proccess',
        link: 'https://github.com/DylanGerloski/Parallelization-in-C',
        img: ms

    },
    {
        id: '3',
        name: 'Movie Predicter',
        description: 'An R program that uses machine learning to predict movies that you may like. It uses a data set with 1000s of user rating on movies and finds users that have similiar ratings to yourself to predict a movie you will like.',
        link: 'https://github.com/DylanGerloski/MovieRecomendationSystem',
        img: movie
    },
    {
        id: '4',
        name: 'KNN and Naive Classifiers from Scratch',
        description: 'Two machinine learning algorithms implemented in Java from scratch. Utilizes the k-fold validation method to test its accuracy. All functionalities were built using only standard java libraries.',
        link: 'https://github.com/DylanGerloski/NB-and-KNN-Classifiers-from-scratch',
        img: ai
    }
]



function Project() {
    return (
        <>
            <div className = "project-container" id = 'project'>
                <h1>Projects</h1>
                <div className = 'cards-container'>
                   
                    {projects.map((project) => {
                        return <Projectcards key = {project.id} projects={project}></Projectcards>
                    })}
               </div>
            </div>
        </>
    )
}

export default Project





const Projectcards = (props) => {
    const {name, description, link, img} = props.projects;
    return (
       
        
           <section className = "cards">
                <div className = 'img'>
                    <img src = {img}></img>
                </div>
                <div className = 'card-info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <a href = {link} target = '_blank'>source code</a>
                </div>
            
            </section>
      
    )
}