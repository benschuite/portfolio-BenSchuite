import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import Schoen from '../public/plaatjes/0274.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Hallo, mijn naam is Ben en studeer aan de Haagse Hogeschool</h1>

        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="K86 Sneaker"
            beschrijving="Sneaker gemaakt in Blender"
            Plaatje={AccessibilityPlaatje}
            paginaUrl="/projecten/schoen"
          />
          <Projectkaart
            titel="K86 Sneaker"
            beschrijving="Sneaker gemaakt in Blender"
            Plaatje={Schoen}
            paginaUrl="/projecten/schoen"
          /> */}

          <Verhaalkaart>
            <h2>3D moduleren</h2>
            <p>Lees hier meer over</p>
            <img src="https://i.postimg.cc/RVrpzh4T/0272.png" />
            <figcaption>Foto van 3D schoen gemaakt in Blender</figcaption>
          </Verhaalkaart>
        </section>
        <Footer />
      </main>
    </>
  );
};
