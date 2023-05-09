'use client';
import { useState } from 'react'

import { FaCode, FaRegCopyright, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { GrMapLocation, GrMailOption } from 'react-icons/gr'

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className='theme-light'>
      <header className={menu ? 'show' : ''}>
        <div className='logo'>
          Higor<FaCode className='icon' />Dev
        </div>

        <div className='menu-wrap' onClick={() => menu ? setMenu(false) : setMenu(true)}>
          <BiMenu className='menu-icon'/>
          <AiOutlineClose className='close-icon' />
        </div>

        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
          <section className='home-section' id='home'>
            <div className='container'>

              <div className='hero'>
                <div className='text-wrap'>
                  <h1>Front-end React Developer</h1>
                  <p>Hello I am Higor. A passionate frontend developer from Brazil!</p>
                  <div className='icon-wrap'>
                    <FaLinkedin className='icon'/>
                    <FaGithub className='icon'/>
                  </div>
                </div>
                <div className='photo-wrap'>
                  <img src='/photo.jpg' alt='photo'></img>
                </div>
              </div>

              <div className='stack'>
                <h2>Tech Stack:&nbsp;</h2>
                <div className='skills'>
                  <div className='wrap'>
                    <img src='/html5.svg' alt='html'></img>
                  </div>

                  <div className='wrap'>
                    <img src='/css3.svg' alt='css'></img>
                  </div>

                  <div className='wrap'>
                    <img src='/typescript.svg' alt='typescript'></img>
                  </div>

                  <div className='wrap'>
                    <img src='/react.svg' alt='react'></img>
                  </div>

                  <div className='wrap'>
                    <img src='/next.svg' alt='next'></img>
                  </div>

                  <div className='wrap'>
                    <img src='/sass.svg' alt='sass'></img>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className='projects-section' id='projects'>
            <div className='container'>
              <h2>Projects</h2>

              <div className='project-wrap'>
                <div className='image-wrap'>
                  <img src='/screencapture-crypto.png' className='crypto'></img>
                </div>

                <div className='info-wrap'>
                  <div className='text'>
                    <h3>Crypto-Tiger</h3>
                    <p>Crypto-Tiger is a web application that allows the user to see real-time info about the crypto market.</p>
                  </div>

                  <div className='skills-wrap'>
                    <img src='/react.svg' alt='react'></img>
                    <img src='/sass.svg' alt='sass'></img>
                  </div>

                  <div className='links'>
                    <a href='https://github.com/HigorR456/crypto-tiger' target='_blank'>Code <FaGithub /></a>
                    <a href='https://crypto-tiger.netlify.app/' target='_blank'>Demo <FiExternalLink /></a>
                  </div>
                </div>
              </div>

              <div className='project-wrap'>
                <div className='image-wrap'>
                  <img src='/screencapture-pokemon.png' className='pokemon'></img>
                </div>

                <div className='info-wrap'>
                  <div className='text'>
                    <h3>Poke-commerce</h3>
                    <p>A commerce website with focus on SEO with pre-rendered pages that use dynamic routes with everything a real commerce site has.</p>
                  </div>

                  <div className='skills-wrap'>
                    <img src='/typescript.svg' alt='typescript'></img>
                    <img src='/react.svg' alt='react'></img>
                    <img src='/next.svg' alt='next'></img>
                    <img src='/sass.svg' alt='sass'></img>
                  </div>

                  <div className='links'>
                    <a href='https://github.com/HigorR456/poke-commerce' target='_blank'>Code <FaGithub /></a>
                    <a href='https://pokemon-commerce.netlify.app/' target='_blank'>Demo <FiExternalLink /></a>
                  </div>
                </div>
              </div>

              <div className='project-wrap'>
                <div className='image-wrap'>
                  <img src='/screencapture-task.png' className='task'></img>
                </div>

                <div className='info-wrap'>
                  <div className='text'>
                    <h3>Task-App</h3>
                    <p>A to-do app with minimalist design with option to toggle between themes.</p>
                  </div>

                  <div className='skills-wrap'>
                    <img src='/react.svg' alt='react'></img>
                    <img src='/sass.svg' alt='sass'></img>
                  </div>

                  <div className='links'>
                    <a href='https://github.com/HigorR456/Task-App' target='_blank'>Code <FaGithub /></a>
                    <a href='https://task-app456.netlify.app/' target='_blank'>Demo <FiExternalLink /></a>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className='contact-section' id='contact'>
            <div className='container'>
              
              <h2>Contact</h2>

              <div className='content'>
                <div className='location-wrap'>
                  <GrMapLocation className='icon' />
                  <div className='text'>
                    <h4>Location</h4>
                    <p>São Paulo, Brazil</p>
                  </div>
                </div>

                <div className='email-wrap'>
                  <GrMailOption className='icon' />
                  <div className='text'>
                    <h4>Email</h4>
                    <a href='mailto:higor456dev@gmail.com'>higor456dev@gmail.com</a>
                  </div>
                </div>
              </div>

            </div>

          </section>
      </main>

      <footer>
        <div className='wrap'>
          <div className='copy'>
            <FaRegCopyright/> 2023. All rights reserved.
          </div>
          <div className='links'>
            
            <a href='https://www.linkedin.com/in/higor456dev/' target='_blank'><FaLinkedin className='icon'/></a>
            <a href='https://github.com/HigorR456' target='_blank'><FaGithub className='icon'/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
