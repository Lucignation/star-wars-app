import styles from './dashboard.module.scss';

//imports from folders
import Sidebar from '../../components/sidebar/sidebar.component';
import Navbar from '../../components/navbar/navbar.component';
import Categories from '../../components/Categories/categories.component';
import Film from '../../components/Films/films.component';

const Dashboard = () => {
  return (
    <section className={styles.dashboard_container}>
      <Sidebar />
      <div className={styles.dashboard_content}>
        <Navbar />

        <section>
          <Categories />
        </section>

        <section>
          <Film />
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
