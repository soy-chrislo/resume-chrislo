import styles from './App.module.css'

function App() {

  return (
    <main className={styles.main_container}>
      <article className={styles.panel}>
        <section className={styles.header}>
          <h1>Christian Rubio</h1>
          <h3>Backend Developer</h3>
        </section>
        <section className={styles.section}>
          <h2>EDUCATION</h2>
          <div>
            <h3>Universidad de Ibagué</h3>
            <span className={styles.date}>Feb, 2021 - May, 2022</span>
            <p>Systems Engineering</p>
          </div>
          <div>
            <h3>Fundación Universitaria Compensar</h3>
            <span className={styles.date}>Aug, 2022 - Current</span>
            <p>Software Engineering</p>
          </div>
        </section>
        <section className={styles.section}>
          <h2>SKILL</h2>
          <section className={styles.groups_skill}>
            <div className={styles.column}>
              <div className={styles.groups_programming}>
                <h3>Programming</h3>
                <ul>
                  <li>JavaScript / Typescript</li>
                  <li>Java</li>
                  <li>C / C++</li>
                  <li>HTML / CSS</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>Bash Scripting</li>
                </ul>
              </div>
              <div className={styles.groups_ui}>
                <h3>UI</h3>
                <ul>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
              <div className={styles.groups_languages}>
                <h3>Languages</h3>
                <ul>
                  <li>Spanish - <span className={styles.italic}>Native</span></li>
                  <li>English - <span className={styles.italic}>B2</span></li>
                </ul>
              </div>

            </div>
            <div className={styles.column}>
              <div className={styles.groups_tools}>
                <h3>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Linux</li>
                </ul>
              </div>
              <div className={styles.groups_frameworks}>
                <h3>Frameworks / Environments</h3>
                <ul>
                  <li>Node.js / Bun</li>
                  <li>React.js / React Native</li>
                  <li>Express.js / Nest.js</li>
                  <li>Electron.js / Tauri</li>
                </ul>
              </div>
              <div className={styles.groups_soft}>
                <h3>Soft skills</h3>
                <ul>
                  <li>Teamwork</li>
                  <li>Communication</li>
                  <li>Leadership</li>
                  <li>Self taught</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </article>
      <article className={styles.panel}>
        <section className={styles.header}>
          <p className={`${styles.strong} ${styles.blue}`}>www.soychristian.com</p>
          <p className={styles.strong}>chris@soychristian.com</p>
        </section>
        <section className={`${styles.section} ${styles.experience_section}`}>
          <h2>EXPERIENCE</h2>
          <div>
            <h3>Colegio Santader de Ibagué</h3>
            <span className={styles.date}>Feb, 2023 - Oct, 2023</span>
            <ul>
              <li>Extracurricular Programming Instructor.</li>
            </ul>
          </div>
          <div>
            <h3>Mediservis del Tolima SAS</h3>
            <span className={styles.date}>Aug, 2023 - Current</span>
            <ul>
              <li>Technical Professional Internship Program.</li>
              <li>Digital Transformation Manager in Business Environments.</li>
              <li>Technology Tools Support Specialist.</li>
              <li>Designer of ICT-Based Applications.
                <ul>
                  <li>
                    <span className={styles.italic}>Paola of Mediservis, Chatbot.</span> 
                    <ul>
                      <li>
                        Chatbot developer responsible for automating and streamlining repetitive tasks for the company's employees.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className={styles.italic}>Centaury, Management dashboard for technological tools.</span>
                    <ul>
                      <li>
                        Developer of web platform for managing ICT-based Tools within the company.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className={styles.italic}>Higia, Task management software.</span>
                    <ul>
                      <li>
                        Adapted and integrated to run under the google workspace environment.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  )
}

export default App
