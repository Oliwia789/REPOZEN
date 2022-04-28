import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faQuestion, faPenToSquare, faGauge } from "@fortawesome/free-solid-svg-icons"


const pages = [
    {
        id: 1,
        name: "MON PROFIL",
        link: "profil",
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        id: 2,
        name: "MES FAQ",
        link: "faq",
        icon: <FontAwesomeIcon icon={faQuestion} />
    },
    {
        id: 3,
        name: "MES PUBLICATIONS",
        link: "publications",
        icon: <FontAwesomeIcon icon={faPenToSquare} />
    },
    {
        id: 4,
        name: "MES MESSAGES",
        link: "messages",
        icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
        id: 5,
        name: "MON TABLEAU DE BORD",
        link: "tableaubord",
        icon: <FontAwesomeIcon icon={faGauge} />
    }
]

export default pages