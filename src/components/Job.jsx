import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={2}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <Button
          className="d-flex align-items-center"
          onClick={() => {
            dispatch({
              type: "ADD_FAVOURITES",
              payload: data.company_name,
            });
          }}
        >
          <span className="me-2">ADD TO</span>
          <MdFavorite fontSize={20} />
        </Button>
      </Col>
    </Row>
  );
};
export default Job;
