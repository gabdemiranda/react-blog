import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou Gabriel!
      </h3>
      <img
        src={fotoSobreMim}
        alt="Foto de Gabriel casual"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Sou Gabriel de Miranda Castro, um desenvolvedor de software especializado em Ruby on Rails, com aproximadamente três anos de experiência na criação e manutenção de aplicações web de alta qualidade. Meu foco está no desenvolvimento back-end, onde aplico práticas ágeis e princípios de código limpo para entregar soluções eficientes e bem estruturadas. Além de dominar Ruby on Rails, possuo conhecimentos sólidos em JavaScript, Vue.js, Stimulus e React, o que me permite atuar em todo o stack de desenvolvimento.
      </p>
      <p className={styles.paragrafo}>
        Minha trajetória profissional inclui a integração de APIs, tanto internas quanto externas, utilizando ferramentas como Faraday e Docker para garantir ambientes de desenvolvimento consistentes. Tenho experiência em colaborar com equipes de UX para melhorar a experiência do usuário e em implementar testes automatizados com RSpec e Capybara, garantindo a qualidade do software.
      </p>
      <p className={styles.paragrafo}>
        Com estudos acadêmicos em Engenharia da Computação e Engenharia Civil, além de uma especialização intensiva em Ruby on Rails, busco constantemente expandir meus conhecimentos e habilidades. Procuro oportunidades em ambientes que incentivem o aprendizado contínuo e as interações técnicas, onde eu possa contribuir significativamente para o sucesso de projetos desafiadores e inovadores.
      </p>
    </PostModelo>
  )
}