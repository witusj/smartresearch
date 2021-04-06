import { Row } from 'react-bootstrap'
import { AuditCard } from '../components/auditcard'
import styles from '../styles/auditcards.module.scss'

export const AuditCards = () => {
    return (
        <div className={styles.main}>
            <Row>
                <AuditCard
                    title="Discovery"
                    imagehref = "discovery.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik relevante bronnen vinden"
                    learninggoals={['de context van het onderzoeksthema beter begrijp', 'een betere inschatting kan maken wat betreft de uitdagingen', 'inspiratie vind over hoe deze uitdagingen benaderd kunnen worden.']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante informatie omtrent het het vraagstuk hebt gevonden?"
                    thirdquestionansw={[[<a href="https://en.wikipedia.org/wiki/Delphi_method" target="_blank">Delphi</a>, ' methode'], [<a href="https://en.wikipedia.org/wiki/PICO_process" target="_blank">PICO</a>, ' framework'], [<a href="https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/9741/8144" target="_blank">ECLIPSE</a>, ' framework'], [<a href="https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/9741/8144" target="_blank">SPICE</a>, ' framework']]}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Analysis"
                    imagehref = "research.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik op een methodische wijze data verzamelen, verwerken en analyseren"
                    learninggoals={['daarmee nieuwe domeinkennis genereer die van acceptabele kwaliteit is']}
                    firstquestiontxt="Welke kwaliteitskeuzes heb je gemaakt m.b.t. de methodes van datavergaring?"
                    firstquestionansw={['Controleerbaarheid', 'Balans kwantitatief / kwalitatief', 'Detail / aggregatieniveau', 'Traditioneel / innovatief', 'Anders']}
                    secondquestiontxt="Welke kwaliteitskeuzes heb je gemaakt m.b.t. de  opslag van de data?"
                    secondquestionansw={['Toegankelijkheid', 'Veiligheid', 'Kosten', 'Anders']}
                    thirdquestiontxt="Op welke wijze heb je de kwaliteit van je ruwe data gecontroleerd?"
                    thirdquestionansw={['Visueel', 'Triangulatie', 'Statistisch', 'Anders']}
                    fourthquestiontxt="Welke systemen heb je gebruikt voor de verwerking en analyse van je data?"
                    fourthquestionansw={['Spreadsheet', 'QDA - bv Atlas.ti', 'BI Tools', 'Anders']}
                />
                <AuditCard
                    title="Writing"
                    imagehref = "management.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik het verloop van het onderzoeksproces en de uitkomsten documenteren"
                    learninggoals={['aan stakeholders de kwaliteit van uitvoering van het onderzoeksproces kan aantonen', 'ik stakeholders een duidelijk antwoord teruggeef op hun vragen', 'ik andere onderzoekers bruikbare input bied voor vervolgonderzoek']}
                    firstquestiontxt="Waarom heb je voor een specifiek format gekozen voor je eindproduct? Mogelijke formats: "
                    firstquestionansw={['Een statisch document, bv. Word of pdf', 'Een levend document, bv. Website of video', 'Een prototype', '.....']}
                    secondquestiontxt="Welke systemen heb je geïmplementeerd t.b.v. de reproduceerbaarheid van je onderzoek?"
                    secondquestionansw={['Notebooks', 'Github e.d.', 'Zotero e.d.', 'Anders']}
                    thirdquestiontxt="Welke criteria heb je gehanteerd voor een optimale UX?"
                    thirdquestionansw={['Leesbaar', 'Snel doorzoekbaar', 'Informatief', 'Aantrekkelijk vormgegeven', 'Anders']}
                    fourthquestiontxt="Hoe heb je de kwaliteit van documentatie gecontroleerd?"
                    fourthquestionansw={['Peer reviews', 'Via comments op social media', 'User testing', 'A/B testing', 'Anders']}
                />
                <AuditCard
                    title="Publication"
                    imagehref = "manual.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik het juiste medium voor publicatie kiezen"
                    learninggoals={['voldoende feedback kan ontvangen', 'stakeholders het materiaal makkelijk voor eigen doeleinden kunnen gebruiken']}
                    firstquestiontxt="Via welke kanalen heb je jouw werk gepubliceerd?"
                    firstquestionansw={['Alleen rechtstreeks met de stakeholders', 'Social Media', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gebruikt bij de keuze van de publicatiemedia?"
                    secondquestionansw={[]}
                    thirdquestiontxt="Welke feedback heb je ontvangen?"
                    thirdquestionansw={[]}
                    fourthquestiontxt="Voor welke doeleinden wordt jouw werk gebruikt?"
                    fourthquestionansw={[]}
                />
                <AuditCard
                    title="Outreach"
                    imagehref = "sharing.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik nieuwe samenwerkingen initiëren"
                    learninggoals={['actief bijdraag aan waardecreatie']}
                    firstquestiontxt="Welke sociale verbindingen zijn door jouw onderzoek ontstaan? Samenwerking binnen:"
                    firstquestionansw={['De driehoek Onderwijs, Onderzoek en Werkveld', 'De supply chain', 'Anders']}
                    secondquestiontxt="Bij welke interessegroepen ben je betrokken?"
                    secondquestionansw={['Linkedin', 'Meetups', 'Anders']}
                    thirdquestiontxt="Welke mogelijkheden voor samenwerking binnen jouw onderzoeksgebied zie jij?"
                    thirdquestionansw={['De driehoek Onderwijs, Onderzoek en Werkveld', 'De supply chain', 'Anders']}
                    fourthquestiontxt="Op welke wijze voegen specifieke samenwerkingen waarde toe?"
                    fourthquestionansw={['Betere value proposition', 'Voorspelbaarheid uitkomsten', 'Hogere groei', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Assessment"
                    imagehref = "scoring.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik input verzamelen over de kwaliteit van mijn werk"
                    learninggoals={['kan reflecteren op het verloop van het onderzoeksproces en de kwaliteit van de uitkomsten', 'dit kan vertalen naar een handelingsperspectief', 'het contract met de opdrachtgever kan afsluiten']}
                    firstquestiontxt="Welke kwaliteitsinput heb je ontvangen?"
                    firstquestionansw={['Feedback van stakeholders', 'Comments op social media', 'Feedback van peers', 'Anders']}
                    secondquestiontxt="Welke zaken binnen het onderzoeksproces gingen niet goed en hoe heb je het opgelost?"
                    secondquestionansw={[]}
                    thirdquestiontxt="Op welke vlakken heb je persoonlijke groei ervaren?"
                    thirdquestionansw={[]}
                    fourthquestiontxt="Op welke wijze heb je het contract met de stakeholders afgesloten?"
                    fourthquestionansw={[]}
                />
            </Row>
        </div>
    )
}