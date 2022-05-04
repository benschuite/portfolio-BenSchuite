import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>K86 Sneaker</h1>
        <p>
          In mijn 3de leerjaar heb ik de minor k86 gevolgd. Voor deze minor heb
          ik mijn eigen 3D sneaker ontworpen.
        </p>
        <Footer />
      </main>
    </>
  );
};
