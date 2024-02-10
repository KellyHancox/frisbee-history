import Container from '@mui/material/Container';
import { Link } from '@mui/material';

function HomePage() {
  
    return (
      <div className="App">
        <Container maxWidth={'lg'}>
            <Link href="/womensclub">Women's Club</Link>
            <br/>
            <Link href="/mensclub">Men's Club</Link>
            <br/>
            <Link href="/mixedclub">Mixed's Club</Link>
            <br/>
            <Link href="/womenscollege">Women's College</Link>
            <br/>
            <Link href="/menscollege">Men's College</Link>
        </Container>
      </div>
    );
  }
  
  export default HomePage;
  