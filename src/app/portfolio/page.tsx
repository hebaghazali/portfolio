import { InfoBlock } from '../../components/infoBlock';
import styles from './page.module.css';

const projects = [
    {
        title: 'IKEA Clone',
        description:
            'IKEA Clone is an e-commerce platform I built with a team of 5 during my ITI training. The project was developed using React.js, SCSS, i18next for localization, Firebase for the backend, Redux for state management, and @paypal/react-paypal-js for payment integration. It features a seamless shopping experience, with a fully functional cart and multi-language support, giving users a real-world feel of an online furniture store.',
        imagePath: '/images/portfolio/ikea.png',
        projectLink: '/portfolio/project-1',
    },
    {
        title: 'IKEA Admin Panel',
        description:
            'The IKEA Admin Panel, developed with my team during ITI training, is a comprehensive management tool built with Angular, Chart.js, Firebase, and RxJS. It features dark/light mode and Firebase authentication. The panel includes three tables: Users (with admin authorization), Products (for CRUD operations), and Orders (with expandable details). This tool streamlines admin tasks and enhances the management of the e-commerce platform.',
        imagePath: '/images/portfolio/ikea-admin.png',
        projectLink: '/portfolio/project-1',
    },
];

const PortfolioPage = () => {
    return (
        <div className={styles.projectsWrapper}>
            {projects.map((project) => (
                <InfoBlock
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    imageSize={{ width: 540, height: 500 }}
                    projectLink={project.projectLink}
                    buttonText='View Project'
                />
            ))}
        </div>
    );
};

export default PortfolioPage;
