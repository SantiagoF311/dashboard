import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SideBarItems } from './SideBarItems';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Stack className="flex-column" gap={1}>
        <Button className="button" as={Link} to="/">Inicio</Button>
        <SideBarItems />
      </Stack>
    </div>
  );
};
