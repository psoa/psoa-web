import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>Sobre mim</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="profile-section pt-3 pt-lg-0">
                  <img className="profile-image mb-3 rounded-circle mx-auto" src="images/profile.jpg" alt="profile pic" />
                  <div className="bio mb-3">
                    Olá, meu nome é Tiago e sou o noivo da Camila, paulista tentando viver no RJ e desenvolvedor de software para a B3.<br/>
                    Você encontrará mais informações sobre mim nas redes sociais abaixo e um resumo das minhas qualificações neste sítio.
                    Este sitio foi uma forma de eu aprender react e voltar a brincar com a parte Web depois de muitos anos trabalhando por debaixo do capô na Bolsa de São Paulo</div>
                  <ul className="social-list list-inline py-3 mx-auto">
                    <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/psoa"><i className="fab fa-twitter fa-fw" /></a></li>
                    <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tndias"><i className="fab fa-linkedin-in fa-fw" /></a></li>
                    <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://github.com/psoa"><i className="fab fa-github-alt fa-fw" /></a></li>
                    <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/tndias"><i className="fab fa-facebook fa-fw" /></a></li>
                    <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://instagram.com/psoabr/"><i className="fab fa-instagram fa-fw" /></a></li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)
  }
}