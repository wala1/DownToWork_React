import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className='RightCard'>
      <Card.Body>
      <div className="Buttons">
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-primary" type="button">
            Edit
          </button>
          <button className="btn btn-secondary" type="button">
            Desactivate
          </button>
          <button className="btn btn-danger" type="button">
            Delete
          </button>
          <button className="btn btn-primary" type="button">
            Edit
          </button>
          <button className="btn btn-secondary" type="button">
            Desactivate
          </button>
          <button className="btn btn-danger" type="button">
            Delete
          </button>
        </div>
        
      </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;