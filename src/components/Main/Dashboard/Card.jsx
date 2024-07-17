import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Card = ({ IconComponent, value, title }) => {
  const shouldShowAttachMoneyIcon = ['Monto de la factura', 'Total de la factura', 'Monto del pago', 'Monto de anticipo'].includes(title);

  return (
    <div className='card'>
      <div className='cardIconContainer'>
        <IconComponent className='cardIcon'/>
      </div>
      <div className='cardDataContainer'>
        <p className='cardDataText'>{title}</p>
        {shouldShowAttachMoneyIcon && (
          <div className='cardDataValueContainer'>
            <div className='cardValueIconContainer'>
              <AttachMoneyIcon fontSize='large' data-testid="AttachMoneyIcon" className='cardValueIcon'/>
            </div>
            <h2 className='cardDataValue'>{value}</h2>
          </div>
        )}
        {!shouldShowAttachMoneyIcon && (
          <div className='cardDataValueContainer'>
            <h2 className='cardDataValue'>{value}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
