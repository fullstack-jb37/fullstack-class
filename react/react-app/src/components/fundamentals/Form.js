import { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

export class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      selectOption: 1,
      checkbox: 'true',
      textarea: '',
    }
  }

  onChange(value, id) {
    this.setState({ [id]: value })
  }

  render() {
    return (
      <Container className="mt-5 offset-md-5">
        <Row>
          <Col xs={3}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter email address..."
                  onChange={(event) => {
                    this.onChange(event.target.value, event.target.id)
                  }}
                ></Form.Control>
                <Form.Text className="text-muted">
                  We will never share your email with anyone
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Enter password..."
                  onChange={(event) => {
                    this.onChange(event.target.value, event.target.id)
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Lang</Form.Label>
                <Form.Select
                  id="selectOption"
                  onChange={(event) => {
                    this.onChange(event.target.value, event.target.id)
                  }}
                >
                  <option value={1}>React</option>
                  <option value={2}>Angular</option>
                  <option value={3}>Vue</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Text area</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="textarea"
                  onChange={(event) => {
                    this.onChange(event.target.value, event.target.id)
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  id="checkbox"
                  type="checkbox"
                  label="Check me out"
                  checked={this.state.checkbox === 'true'}
                  onChange={(event) => {
                    this.onChange(
                      event.target.checked.toString(),
                      event.target.id
                    )
                  }}
                ></Form.Check>
              </Form.Group>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <ul>
          {Object.keys(this.state).map((property) => {
            return (
              <li key={property}>
                {property}: {this.state[property]}
              </li>
            )
          })}
        </ul>
      </Container>
    )
  }
}

export default Register
