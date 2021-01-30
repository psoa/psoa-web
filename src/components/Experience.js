import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
/**https://www.npmjs.com/package/react-vertical-timeline-component*/
export default class Experience extends Component {
  render() {
    return (
      <section id="experience" className="experience">
        <div className="section-heading text-center">
          <h2>Experiência</h2>
        </div>
        <div className="container">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2007 - "
              iconStyle={{ width: '15px', height: '15px', background: '#8f00ff', color: '#fff' }}
              visible="true"
            >
              <h3 className="vertical-timeline-element-title">B3 - Especialista em desenvolvimento de software</h3>
              <h4 className="vertical-timeline-element-subtitle">São Paulo, SP / Estocolmo</h4>
              <p>
                Posso dizer que a B3 é minha segunda casa. Durante minha jornada nesta empresa eu experimentei
                2 fusões  (BM&F > BMFBOVESPA > B3). Trabalhei em diversas áreas e com diversas tecnologias.
                Participei do desenvolvimento de novos produtos e na manutenção de tantos outros.
                Trabalhei com sistemas que eram inteiramente desenvolvidos em banco de dados (SQL) e também em outros 
                que não contam com banco de dados. Sistemas VB6 que evoluíram para ".NET" até
                o atual em JAVA. Conheci o funcionamento do mercado financeiro integrando a negociação de ativos até a liquidação
                financeira das operações. Como parte de minha jornada fui enviado a Estocolmo na Suécia onde trabalhei por 
                mais de dois anos em parceria com a Cinnober (posteriomente comprada pela NASDAQ) no desenvolvimento da atual plataforma de Post-Trade da B3.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2003 - 2007"
              iconStyle={{ width: '15px', height: '15px', background: '#8f00ff', color: '#fff' }}
              visible="true"
              
            >
              <h3 className="vertical-timeline-element-title">S&L Consulting - Empreendedor</h3>
              <h4 className="vertical-timeline-element-subtitle">São Paulo - SP</h4>
              <p>
                Ainda na Faculdade resolvei abrir uma empresa com um amigo. O objetivo dela era fornecer softwares de apoio 
                para empresas de Recursos Humanos e Terceirização. A empresa foi vendida para o GI Group, uma empresa
                Multinacional de Recrutamento e Terceirização. Posso dizer que foi uma grande escola sobre como funciona
                as diversas áreas e processos de desenvolvimento de um produto. O aprendizado tecnico também foi enorme
                uma vez que eu era responsável desde as estações de trabalho para os colaboradores até o software de gestão de
                currículos e pessoal em campo.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2001 - 2003"
              iconStyle={{ width: '15px', height: '15px', background: '#8f00ff', color: '#fff' }}
              visible="true"
              
            >
              <h3 className="vertical-timeline-element-title">IG - Programador</h3>
              <h4 className="vertical-timeline-element-subtitle">São Paulo, SP</h4>
              <p>
                Aqui começou minha jornada como programador. Foi uma época muito divertida, a internet estava engatinhando
                e eu estava na área de desenvolvimento móvel do IG (o SELIG). Ali tive contato com a primeira versão de uma série
                de tecnologias, conheci o PHP antes dele ter a penetração de hoje - as pessoas sempre pediam para soletrar. Neste 
                época não existia o JQUERY, Angular ou React e os celulares tinham 3 linhas na tela. Lidar com os modens de 56k e 
                o GSM/CDMA me ensinou muito sobre otimização de código. Ali conheci linguagens como o Perl/Bash/PHP.  
                </p>
            </VerticalTimelineElement>
           </VerticalTimeline>
        </div>
      </section>

    )
  }
}