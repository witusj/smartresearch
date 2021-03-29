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
                    learninggoals={['de context van het onderzoeksthema beter begrijp', 'een betere inschatting kan maken wat betreft de uitdagingen', 'een betere inschatting kan maken wat betreft de uitdagingen']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante bronnen hebt gevonden?"
                    thirdquestionansw={[[<a href="https://en.wikipedia.org/wiki/Delphi_method" target="_blank">Delphi</a>, ' methode'], [<a href="https://en.wikipedia.org/wiki/PICO_process" target="_blank">PICO</a>, ' framework'], [<a href="https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/9741/8144" target="_blank">ECLIPSE</a>, ' framework'], [<a href="https://journals.library.ualberta.ca/eblip/index.php/EBLIP/article/view/9741/8144" target="_blank">SPICE</a>, ' framework']]}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Analysis"
                    imagehref = "research.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik op een methodische wijze data verzamelen, verwerken en analyseren"
                    learninggoals={['daarmee nieuwe domeinkennis genereer die van acceptabele kwaliteit is']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante bronnen hebt gevonden?"
                    thirdquestionansw={['Delphi methode', 'PICO framework', 'ECLIPSE framework', 'SPICE framework']}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Writing"
                    imagehref = "management.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik relevante bronnen vinden"
                    learninggoals={['de context van het onderzoeksthema beter begrijp', 'een betere inschatting kan maken wat betreft de uitdagingen', 'een betere inschatting kan maken wat betreft de uitdagingen']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante bronnen hebt gevonden?"
                    thirdquestionansw={['Delphi methode', 'PICO framework', 'ECLIPSE framework', 'SPICE framework']}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Publication"
                    imagehref = "manual.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik relevante bronnen vinden"
                    learninggoals={['de context van het onderzoeksthema beter begrijp', 'een betere inschatting kan maken wat betreft de uitdagingen', 'een betere inschatting kan maken wat betreft de uitdagingen']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante bronnen hebt gevonden?"
                    thirdquestionansw={['Delphi methode', 'PICO framework', 'ECLIPSE framework', 'SPICE framework']}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Outreach"
                    imagehref = "sharing.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik relevante bronnen vinden"
                    learninggoals={['de context van het onderzoeksthema beter begrijp', 'een betere inschatting kan maken wat betreft de uitdagingen', 'een betere inschatting kan maken wat betreft de uitdagingen']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante bronnen hebt gevonden?"
                    thirdquestionansw={['Delphi methode', 'PICO framework', 'ECLIPSE framework', 'SPICE framework']}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
                <AuditCard
                    title="Assessment"
                    imagehref = "scoring.svg"
                    learningoutcome="Als bedrijfskundig onderzoeker kan ik relevante bronnen vinden"
                    learninggoals={['de context van het onderzoeksthema beter begrijp', 'een betere inschatting kan maken wat betreft de uitdagingen', 'een betere inschatting kan maken wat betreft de uitdagingen']}
                    firstquestiontxt="Welke repositories heb je gebruikt en welke zoekstrategieën heb je toegepast?"
                    firstquestionansw={['Google Scholar', 'Web of Science', 'YouTube', 'Anders']}
                    secondquestiontxt="Welke criteria heb je gehanteerd om de bruikbaarheid te bepalen van de gevonden bronnen en hoe heb je getest?"
                    secondquestionansw={['Autoriteit', 'Accuraatheid', 'Objectiviteit', 'Recentheid', 'Dekking', 'Andere criteria']}
                    thirdquestiontxt="Welke methode heb je gehanteerd om  te bepalen dat je alle relevante bronnen hebt gevonden?"
                    thirdquestionansw={['Delphi methode', 'PICO framework', 'ECLIPSE framework', 'SPICE framework']}
                    fourthquestiontxt="Waaruit blijkt de deelname van stakeholders en experts tijdens de discoveryfase?"
                    fourthquestionansw={['Beschrijft empathize-proces', 'Beschrijft define-proces', 'Beschrijft ideate-proces', 'Beschrijft prototype-proces', 'Anders']}
                />
            </Row>
        </div>
    )
}