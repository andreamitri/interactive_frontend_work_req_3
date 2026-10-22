import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SeriesCard({ title, image, description, genre, link }) {
  return (
    <Card className="series-card h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={`${title} poster`}
        className="series-image"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>

        <Card.Text>{description}</Card.Text>

        <Button
          variant="danger"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SeriesCard;
