import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const Favourites = () => {
  const favorites = useSelector((state) => {
    return state.favourites.content;
  });
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">AZIENDE PREFERITE</h1>
        </Col>
        <Col xs={2} className="mx-auto my-3 d-flex align-items-center">
          <Button className="">
            <span className="me-2">FAVOURITES</span>
            <MdFavorite fontSize={30} />
          </Button>
        </Col>
        {/* LISTA AZIENDE */}
        {favorites.map((company, i) => (
          <Row key={i} className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
            <Col xs={8} key={i}>
              <Link to={`/${company}`}>{company}</Link>
            </Col>
            <Col xs={4}>
              <Button
                className="d-flex align-items-center"
                onClick={() => {
                  dispatch({
                    type: "DELETE_FAVOURITE",
                    payload: i,
                  });
                }}
              >
                <span className="me-2">REMOVE</span>
                <FaRegTrashAlt fontSize={20} />
              </Button>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};
export default Favourites;
