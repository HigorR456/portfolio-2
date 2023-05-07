import { FaCode, FaRegCopyright, FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { TbBrandReact } from 'react-icons/tb'
import { SiNextdotjs, SiSass, SiTailwindcss } from 'react-icons/si'

export default function Home() {
  return (
    <>
      <header>
        <div>
          Higor<FaCode/>Dev
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
          <section className='home-section'>
            <div className='container'>

              <div className='intro'>
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

          <section className='projects-section'>a</section>
          <section className='contact-section'>b</section>
      </main>

      <footer>
        <div className='wrap'>
          <div>
            <FaRegCopyright/> 2023. All rights reserved.
          </div>
          <div>
            <FaLinkedin/>
            <FaGithub/>
          </div>
        </div>
      </footer>
    </>
  )
}
