import styles from './Sobre.module.css'
import img from '../imgs/gato.jpg'
import img2 from '../imgs/meuGato.png'
import img3 from '../imgs/camera.jpg'

import { TiInfoLarge } from "react-icons/ti";
function Sobre() {
    return (
        <section className={styles.sobre}>
            <h1>Serviços</h1>
            <p className={styles.apresent}>Estes Serviços são todos feitos com muito amor e carinho! </p>

            <div>

                <article>
                    <img src={img2} alt='Meu gatinho que morreu em 2023' />
                    <h2>Ache seu Pet ideal</h2>
                    <p>
                        Em um mundo cheio de correrias e estresse, um gatinho é o remédio perfeito.
                        Com seus ronronares suaves e olhos curiosos, eles trazem alegria e tranquilidade para qualquer lar.
                        Adote um gatinho hoje e descubra o amor incondicional que só um felino pode oferecer.”

                    </p>
                    <a href='https://www.instagram.com/isac_vitor_13/#' target='_blanck' rel='noreferrer'>Saiba mais <TiInfoLarge /> </a>
                </article>
                <article>
                    <img src={img3} alt='Logo do desenvolvedor' />
                    <h2>Transforme o seu Gato em um modelo</h2>
                    <p>
                        Capture momentos fofos e inesquecíveis! Fotografar seu gatinho é como guardar um pedacinho de felicidade em cada imagem.
                        Seja na luz suave da manhã ou no aconchego do sofá à tarde, cada clique revela a personalidade única do seu bichano.
                        Tire fotos do seu gatinho e eternize esses instantes de amor e travessura!
                    </p>
                    <a href='https://www.instagram.com/isac_vitor_13/#' target='_blanck' rel='noreferrer'>Saiba mais <TiInfoLarge /> </a>
                </article>
                <article>
                    <img src={img} alt='Logo do desenvolvedor' />
                    <h2>Adestre</h2>
                    <p>
                        Seu gatinho é um diamante bruto esperando para ser lapidado!
                        Leve-o a um de nossos adestradores e desbloqueie todo o potencial desse pequeno felino.
                        Com paciência, técnicas adequadas e amor, você verá seu gato aprender truques incríveis e se tornar um verdadeiro artista das patinhas.
                        Não perca a oportunidade de transformar seu bichano em uma estrela!
                    </p>
                    <a href='https://www.instagram.com/isac_vitor_13/#' target='_blanck' rel='noreferrer'>Saiba mais <TiInfoLarge /> </a>
                </article>


            </div>

        </section>
    )
}
export default Sobre