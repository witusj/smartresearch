import { Toolbar } from '../components/toolbar'
import { AuditCards } from '../components/auditcards'
import styles from '../styles/index.module.scss'

const Intro = (props) => {
  return (
    <div >
      <h1>{props.heading}</h1>
      <hr>
      </hr>
      <p className='lead pb-5'>{props.lead}</p>
      <img src="workflows-traditional.png" alt="" width="1149" height="181" role="presentation" className="img-fluid" />
      <img src="workflow.png" alt="" width="1149" height="180" role="presentation" className="img-fluid" />
      <img src="workflows-innovative.png" alt="" width="1149" height="180" role="presentation" className="img-fluid" />
    </div>
  )
}

const Paragraph= (props) => {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
  </div>
  )
}

const WorkFlowTable = () => {
  return (
    <div>
      <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Fase</th>
                    <th scope="col">Beschrijving</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="discovery.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Discovery</td>
                    <td>In de eerste fase vindt de begripvorming plaats. Door inzichten in de externe en interne context van de organisatie, kan het probleem beter worden begrepen, de scope van het onderzoek worden bepaald en specifieke onderzoeksvragen worden
                        geformuleerd.<br></br>Deze fase kan worden gekoppeld aan de <i>Understand-fase </i>binnen <a href="https://www.ideou.com/blogs/inspiration/what-is-design-thinking">Design Thinking</a>, waarbij de onderzoeker zich inleeft in de uitdagingen en behoeftes
                        van de vragende organisatie en tot een definitie van de onderzoeksvraag probeert te komen.</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="research.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Analysis</td>
                    <td>Nadat de onderzoeksvraag is geformuleerd, beslist de onderzoeker hoe hij het verdere onderzoek wil gaan uitvoeren. De inspiratie hiervoor heeft hij in de discovery fase opgedaan.
    
                        <br></br>In het begin van de Analysis-fase vindt intensief overleg met stakeholders plaats waarbij ideeën worden getoetst en afspraken worden gemaakt over bijvoorbeeld communicatie en milestones. Als alle stakeholders overtuigd zijn,
                        kan de onderzoeker aan het werk: data verzamelen, verwerken en uitkomsten interpreteren.
                    </td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="management.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Writing</td>
                    <td>In deze fase worden alle uitkomsten van alle voorgaande fases samengevoegd tot een kennis- of discussiestuk (bijvoorbeeld een adviesrapport of een proof of concept).</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="manual.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Publication</td>
                    <td>Alle informatie omtrent het verloop van het onderzoek en de resultaten dienen te worden vastgelegd in een vorm die aansluit bij de wensen van de stakeholders. Deze wensen zijn in de vorige stap geïnventariseerd en afspraken hierover zijn
                        samengevat in een aantal kwaliteitscriteria voor communicatie. De keuze voor de plek en vorm van publicatie hangt af van deze criteria.</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="sharing.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Outreach</td>
                    <td>Als de kwaliteit voldoende is en de stakeholders het toelaten, dient de kennis die is gegenereerd te worden gedeeld met het publiek van de HAN. Aangezien de HAN een maatschappelijke organisatie is, dient in principe iedereen die geïnteresseerd
                        is vrij toegang te hebben.</td>
                </tr>
                <tr>
                    <td><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
      <image xlinkHref="scoring.svg" height="50" width="50"></image>
    </svg></td>
                    <td>Assessment</td>
                    <td>Om de PDCA-cirkel te sluiten, beoordeelt de kritische onderzoeker het hele traject dat hij heeft doorlopen en kijkt of hij zijn eigen leerdoelen heeft behaald. Daarbij kijkt hij ook vooruit en formuleert een aantal leerpunten. Inspiratie
                        hiervoor haalt hij uit de feedback van de gebruikers van zijn materiaal.</td>
                </tr>
            </tbody>
        </table>
  </div>
  )
}

const Contributors = () => {
  return (
    <div>
      <h3>Bronnen</h3>
      <ul>
        <li>
          <div className="csl-entry">Davies, K. S. (2011). Formulating the Evidence Based Practice Question: A Review of the Frameworks. <i>Evidence Based Library and Information Practice</i>, <i>6</i>(2), 75–80. <a href="https://doi.org/10.18438/B8WS5N">https://doi.org/10.18438/B8WS5N</a>
          </div>
        </li>
        <li>
          <div className="csl-entry"><i>Innovations in Scholarly Communication</i>. (n.d.). Innovations in Scholarly Communication. Retrieved March 29, 2021, from <a href="https://101innovations.wordpress.com/">https://101innovations.wordpress.com/</a>
          </div>
        </li>
      </ul>
        <h3>Contributors</h3>
          <ul>
              <li>
                  <a href="https://www.linkedin.com/in/witektenhove/" target="_blank">Witek ten Hove</a> - Senior Lecturer Data Analytics &amp; Machine Learning at HAN University of AS
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/erik-j-vries-de-6861b68/" target="_blank">Erik de Vries</a> - Lector Innovation in the Public Sector at HAN University of AS
              </li>
              <li><a href="https://www.linkedin.com/in/arjen-van-weert-81a5b14/" target="_blank">Arjen van Weert</a> - Senior Researcher at HAN University of AS</li>
          </ul>
        <h3>Credits</h3>
        <div>Icons made by
              <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>
              from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <Intro
          heading="Kwaliteitsnormen Smart Research"
          lead="Het doel van onderzoek is waardevolle informatie te genereren m.b.t. complexe vraagstukken en duurzame oplossingsrichtingen. We definiëren voor deze context onderzoek als het gehele proces van genereren, delen en verwerken van informatie. Door studenten
            van te voren goed te laten nadenken over dit proces en te ondersteunen bij de inrichting ervan wordt gestreefd naar een adequate kwaliteit van informatie. Dit document dient ter inspiratie voor docenten die onderzoeksprocessen van studenten begeleiden
            en beoordelen en geeft aanknopingspunten voor feedback en assessment."
        />
        <Paragraph
          heading="Onderzoeksworkflow"
          content="Onderzoek is een proces en kan worden beschreven als een aantal fases in een workflow. Aan iedere fase kunnen kwaliteitscriteria worden gekoppeld. Deze kwaliteitscriteria kunnen gaan over de input, het verwerkingsproces en de output, waarbij de kwaliteit van de output natuurlijk weer wordt bepaald door de inputcriteria van de volgende fase.

          In dit stuk hanteren we een workflow voor wetenschappelijk onderzoek (“Innovations in Scholarly Communication”, z.d.) met volgende fases:"
        />
        <WorkFlowTable />
        <Paragraph
          heading="Kwaliteitsaudit onderzoeksproces"
          content="Uiteindelijk kunnen aan iedere fase criteria worden gekoppeld, waarmee de kwaliteit van het onderzoeksproces kan worden bepaald. Omdat het een workflow betreft, is een goede eindkwaliteit per fase essentieel voor het succes van de volgende fase ('rubish in is rubish out'). De kwaliteit van de onderzoeker kan worden getest door de kwaliteit van de door hem gegenereerde uitkomsten per fase te meten. De meting kan plaats vinden door voor iedere fase bewijsmateriaal te verzamelen. In het onderstaande overzicht zijn daarom per fase een aantal auditvragen geformuleerd."
        />
        <AuditCards />
        <Contributors />
      </div>
    </div>
    
  )
}

export default Home
