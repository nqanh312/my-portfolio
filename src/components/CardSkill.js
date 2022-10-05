import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function CardSkill() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img style={{ width: '6rem' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'/>
        <Card.Title>HTML</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          6 months
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardSkill;