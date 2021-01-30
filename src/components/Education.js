import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Education extends Component {
  render() {
    return (
      <section id="education" className="education">
        <div className="section-heading text-center">
          <h2>Educação</h2>
        </div>
        <div className="container">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ width: '15px', height: '15px', background: '#8f00ff', color: '#fff' }}
              visible="true"
           
            >
              <h3 className="vertical-timeline-element-title">MBA em Mobile E Internet Das Coisas</h3>
              <h4 className="vertical-timeline-element-subtitle">FIAP</h4>
              <p>
              Enquanto minha experiência é majoritariamente em sistemas distribuidos vi neste curso a oportunidade
               de entrar em contato com este mundo super interessante que é o Mobile.
                O MBA foi uma forma de conhecer as tecnologias como Android, Swift e outras que ampliaram ainda mais o leque de ferramentas para desenvolver 
                minhas atividades profissionais.              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2009"
              iconStyle={{ width: '15px', height: '15px', background: '#8f00ff', color: '#fff' }}
              visible="true"
            
            >
              <h3 className="vertical-timeline-element-title">Pós Graduação em Engenharia De Software</h3>
              <h4 className="vertical-timeline-element-subtitle">IBTA</h4>
              <p>
              Aqui iniciava minha jornada na Bolsa de São Paulo. Senti a necessidade de me atualizar com o que na época era o hype. SOA - Service Oriented Architecture. Tive contato com excelentes profissionais de empresas como IBM e SAP. A tecnologia mudou muito desde esta época mas os conceitos referentes à computação distribuida que aprendi nesta época me ajudaram a desenhar muitos dos sistemas que hoje tenho orgulho de ter feito parte do desenvolvimento.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2000 - 2004"
              iconStyle={{ width: '15px', height: '15px', background: '#8f00ff', color: '#fff' }}
              visible="true"
              
            >
              <h3 className="vertical-timeline-element-title">Tecnólogo em Processamento De Dados</h3>
              <h4 className="vertical-timeline-element-subtitle">FATEC - SÃO PAULO</h4>
              <p>
              Na Fatec tive meu primeiro contato com tecnologia, lá aprendi os conceitos básicos da computação e fiz grandes amigos que trago até hoje.               </p>
            </VerticalTimelineElement>
           </VerticalTimeline>
        </div>
      </section>



        )
    }
  }