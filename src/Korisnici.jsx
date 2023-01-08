import Korisnik from "./Korisnik"
import PropTypes from 'prop-types';

const Korisnici = ({ korisnici }) => {

    return (
        <div>
            {
                korisnici.map((korisnik) => {
                    return <Korisnik ime={korisnik.ime} prezime={korisnik.prezime} dob={korisnik.dob} />
                })
            }
        </div>
    );
}

export default Korisnici;

Korisnici.propTypes = {
    korisnici: PropTypes.arrayOf(
        PropTypes.shape({
            ime: PropTypes.string,
            prezime: PropTypes.string,
            dob: PropTypes.number
        })
    )
}