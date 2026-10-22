import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SeriesCard from "./components/SeriesCard";
import series from "./series";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Container className="py-5">
        {/* Website Header */}
        <header className="text-center mb-5">
          <h1>Entertainment Gallery</h1>
          <p>My Favorite TV Series</p>
        </header>

        {/* Responsive Card Layout */}
        <Row className="g-4">
          {series.map((show) => (
            <Col key={show.id} xs={12} md={6} lg={4}>
              <SeriesCard
                title={show.title}
                genre={show.genre}
                image={show.image}
                description={show.description}
                link={show.link}
              />
            </Col>
          ))}
        </Row>

        {/* Footer */}
        <footer className="text-center mt-5">
          <p>Entertainment Gallery | Work Requirement 3</p>
        </footer>
      </Container>
    </div>
  );
}

export default App;
