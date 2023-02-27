import { Modal, Button, Form } from 'react-bootstrap'
function UpdateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.updateContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Atualizar Conteúdo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="nome">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control defaultValue={props.content.nome} type="text" />
          </Form.Group>

          <Form.Group controlId="genero">
            <Form.Label>
              Genero
            </Form.Label>
            <Form.Control defaultValue={props.content.genero} type="text" />
          </Form.Group>

          <Form.Group controlId="Idade">
            <Form.Label>
              Idade
            </Form.Label>
            <Form.Control defaultValue={props.content.idade} type="number" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default UpdateContentModal
