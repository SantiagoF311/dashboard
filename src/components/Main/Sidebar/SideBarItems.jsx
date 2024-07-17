import Accordion from 'react-bootstrap/Accordion';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import HotelIcon from '@mui/icons-material/Hotel';
import SettingsIcon from '@mui/icons-material/Settings';
import { SideBarItem } from './SideBarItem';

export const SideBarItems = () => {
  const data = [
    { IconComponent: PersonIcon, name: 'Personal', itemsName: ['Doctores', 'Usuarios'], key: '0' },
    { IconComponent: MedicalServicesIcon, name: 'Historia Clinica', itemsName: ['Agendar Citas', 'Pacientes', 'Carnets', 'Prescripciones'], key: '1' },
    { IconComponent: ReceiptIcon, name: 'Facturacion', itemsName: ['Facturas', 'Contratos', 'Cuentas'], key: '2' },
    { IconComponent: LiveTvIcon, name: 'Consultas en vivo', itemsName: ['Facturación', 'Pagos'], key: '3' },
    { IconComponent: LocalPharmacyIcon, name: 'Farmacia', itemsName: ['Facturación', 'Pagos'], key: '4' },
    { IconComponent: HotelIcon, name: 'Hospitalizacion', itemsName: ['Facturación', 'Pagos'], key: '5' },
    { IconComponent: SettingsIcon, name: 'Ajustes', itemsName: ['Facturación', 'Pagos'], key: '6' }
  ];

  return (
    <Accordion style={{ '--bs-accordion-bg': 'transparent' }}>
      {data.map((dataItem) => (
        <SideBarItem
          key={dataItem.key}
          IconComponent={dataItem.IconComponent}
          name={dataItem.name}
          itemsName={dataItem.itemsName}
          eventKey={dataItem.key}
        />
      ))}
    </Accordion>
  );
};
