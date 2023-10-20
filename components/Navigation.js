import Link from "next/link"

const Navigation = () => {
//Router gir error, har prøvd mange forskjellige versjoner av navigasjoner + prøvd å brukt TSX filer istedet. 
//Prøvd å følge undervisnings videon også men noe slår seg feil, men vet ikke hva som går galt. 
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/catfacts">Animals</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navigation
