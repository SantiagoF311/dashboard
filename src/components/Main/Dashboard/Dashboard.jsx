import { Container } from "react-bootstrap"
import { Card } from "./Card"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PaymentsIcon from '@mui/icons-material/Payments';
import HotelIcon from '@mui/icons-material/Hotel';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import WomanIcon from '@mui/icons-material/Woman';
import LockIcon from '@mui/icons-material/Lock';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ScienceIcon from '@mui/icons-material/Science';
import MedicationIcon from '@mui/icons-material/Medication';
import PersonIcon from '@mui/icons-material/Person';

export const Dashboard = () => {
  const cardData = [
    { IconComponent: CreditCardIcon, value: '1.61M', title: 'Monto de la factura' },
    { IconComponent: DescriptionIcon, value: '2.34M', title: 'Total de la factura' },
    { IconComponent: LocalAtmIcon, value: '2.34M', title: 'Monto del pago' },
    { IconComponent: PaymentsIcon, value: '2.34M', title: 'Monto de anticipo' },
    { IconComponent: HotelIcon, value: '0', title: 'Camas disponibles' },
    { IconComponent: PermContactCalendarIcon, value: '5', title: 'Doctoras' },
    { IconComponent: WheelchairPickupIcon, value: '4', title: 'Pacientes' },
    { IconComponent: WomanIcon, value: '0', title: 'Enfermeras' },
    { IconComponent: LockIcon, value: '0', title: 'Administradoras' },
    { IconComponent: RequestPageIcon, value: '0', title: 'Contador' },
    { IconComponent: ScienceIcon, value: '0', title: 'Tecnico de laboratorio' },
    { IconComponent: MedicationIcon, value: '0', title: 'Farmaceuticos' },
    { IconComponent: PersonIcon, value: '0', title: 'Recepcionistas' },
  ];

  return (
    <Container fluid className="cardsContainer">
      {cardData.map((item, index) => (
        <Card
          key={index}
          IconComponent={item.IconComponent}
          value={item.value}
          title={item.title}
        />
      ))}
    </Container>
  );
};