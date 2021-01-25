import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
<section id="education" className="education">
  <div className="section-heading text-center">
    <h2>Educação</h2>
  </div>
  <div className="container">
    <div className="education-horizontal-timeline">
      <div className="row">
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>2000 - 2004</h2>
              <h3>Tecnólogo <span>em </span> processamento de dados</h3>
            </div>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true" />
              <span className="single-timeline-horizontal" />
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <h4 className="title">
                  FATEC - São Paulo
                </h4>
                <h5></h5>
                <p className="description">
                  Na Fatec tive meu primeiro contato com tecnologia, lá aprendi os conceitos básicos da computação e fiz grandes amigos que trago até hoje.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>2008 - 2009</h2>
              <h3>Pós Graduação <span>em </span> engenharia de software</h3>
            </div>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true" />
              <span className="single-timeline-horizontal" />
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <h4 className="title">
                  IBTA
                </h4>
                <h5></h5>
                <p className="description">
                  Aqui iniciava minha jornada na Bolsa de São Paulo. Senti a necessidade de me atualizar com o que na época era
                  o hype. SOA - Service Oriented Architecture. Tive contato com excelentes profissionais de empresas como IBM e
                  SAP. A tecnologia mudou muito desde esta época mas os conceitos referentes à computação distribuida que aprendi
                  nesta época me ajudaram a desenhar muitos dos sistemas que hoje tenho orgulho de ter feito parte do desenvolvimento.  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>2017 - 2018</h2>
              <h3>MBA <span>em  </span> Mobile e internet das coisas</h3>
            </div>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true" />
              <span className="single-timeline-horizontal spacial-horizontal-line
									" />
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <h4 className="title">
                  FIAP
                </h4>
                <h5></h5>
                <p className="description">
                  Enquanto minha experiência é majoritariamente em sistemas distribuidos vi neste curso a oportunidade
                  de entrar em contato com este mundo super interessante que é o Mobile. O MBA foi uma forma de conhecer
                  as tecnologias como Android, Swift e outras que ampliaram ainda mais o leque de ferramentas para desenvolver minhas atividades profissionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
  }