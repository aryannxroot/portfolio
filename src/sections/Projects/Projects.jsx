import styles from './ProjectsStyles.module.css';
import jobs from '../../assets/jobs.png';
import restaurant from '../../assets/restaurant.png';
import sidcup from '../../assets/golf.jpg';
import search from '../../assets/search.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={jobs}
          link="https://github.com/aryannxroot/Jobs"
          h3="ReactJobs"
          p="Jobs App"
        />
        <ProjectCard
          src={sidcup}
          link="https://github.com/aryannxroot/Sidcup_golf_family"
          h3="Sidcup family"
          p="Golf Club"
        />
        <ProjectCard
          src={restaurant}
          link="https://github.com/aryannxroot/restaurant_website_ui"
          h3="Gericho"
          p="Restaurant"
        />
        <ProjectCard
          src={search}
          link="https://github.com/aryannxroot/ImageSearchApp"
          h3="ImageSearch"
          p="Search for images"
        />
      </div>
    </section>
  );
}

export default Projects;
