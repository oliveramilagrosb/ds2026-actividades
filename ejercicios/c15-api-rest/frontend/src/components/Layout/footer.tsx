import { Container } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="text-center py-3 border-top mt-auto" style={{ backgroundColor: '#f3e8ff', color: '#6b21a8' }}>
      <Container>
        <span className="small text-muted">&copy; 2026 - UTN FRLP</span>
      </Container>
    </footer>
  );
}