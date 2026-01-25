import Head from "next/head";
import Image from "next/image";
import { site } from "../data/siteData";
import styles from "../styles/Home.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SideGifs from "../components/sideGifs"

export default function Home() {
  return (
    <>

      {/* site name */}
      <Head>
        <title>{`${site.name} | ${site.tagline}`}</title>

        <meta name="description" content={site.about} />
      </Head>

      <main className={styles.container}>
        <Image
          src="/profilepicture.jpg"
          alt={site.name}
          width={150}
          height={150}
          className={styles.profileImage}
        />

        <h1 className={styles.name}>{site.name}</h1>
        <p className={styles.tagline}>{site.tagline}</p>


        <section className={styles.contactSection}>


          {/* Social Icons */}
          <div className={styles.socialLinks}>
            {site.links.github && (
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            )}
            {site.links.linkedin && (
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            )}
            {site.links.instagram && (
              <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            )}
          </div>


          {/*  city name */}
          {site.location && (
            <p className={styles.locationText}>
              <a
                href={`https://www.google.com/maps/place/${encodeURIComponent(
                  site.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.locationLink}
              >
                {site.location}
              </a>
            </p>
          )}


        </section>


        <p className={styles.about}>{site.about}</p>

        <section className={styles.highlightsSection}>

          <div className={styles.highlightsList}>
            {site.highlights.map((item, i) => (
              <div key={i} className={styles.highlightItem}>
                {item}
              </div>
            ))}
          </div>
        </section>


        {/* skills section */}
        <section className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <div className={styles.skillsList}>
            {site.skills.map((skill, i) => (
              <div key={i} className={styles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* projects section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {site.projects.map((proj, i) => (
            <a key={i} href={proj.link} target="_blank" className={styles.projectCard}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </a>
          ))}
        </div>

        {/* eduction section */}
        <section className={styles.educationSection}>
          <h2 className={styles.educationTitle}>Education</h2>
          <div className={styles.educationList}>
            {site.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <div className={styles.educationDegree}>{edu.degree}</div>
                <div className={styles.educationSchool}>{edu.school}</div>
                <div className={styles.educationYear}>{edu.year}</div>
              </div>
            ))}
          </div>
        </section>

       
          <SideGifs />
          
        

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </footer>
      </main>
    </>
  );
}
