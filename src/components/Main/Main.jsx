import { Container } from "react-bootstrap";
import { Dashboard } from "./Dashboard/Dashboard";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = () => {
  return (
    <Container fluid className="mainContainer">        
          <Sidebar />
          <Dashboard />
    </Container>
  );
};
