import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { MessageContext, SetModalOpenContext, IsVisibleContext } from '../edit';

const OpenModal = () => {

  const message = useContext(MessageContext);
  const setModalOpen = useContext(SetModalOpenContext);
  const isVisible = useContext(IsVisibleContext);

  return (
    <div style={isVisible ? {display: 'flex', flexDirection: "column", margin: 8} : {display: 'none'}}>
        <div style={{display: 'flex'}}>
          <img src="https://www.jotform.com/resources/assets/icon/jotform-icon-transparent-560x560.png" 
              alt="jotform-icon" 
              className='jotform-icon'/>
          <div style={{fontSize: '18pt', paddingTop: 10}}>Jotform Form Builder</div>
        </div>
        <p style={{fontSize: '0.9rem', marginLeft: '0.5em'}}>{message}</p>
        <Button variant="secondary" 
                id='pickerBtn' 
                onClick={ () => setModalOpen( true ) }
                style={{width: '95px', borderRadius: 5, marginLeft: '0.5em'}}
        > Select Form
        </Button>
    </div>
  )
}
export default OpenModal

/*
  { __(
          'Jotform Form Builder Editor',
          'jotform-form-builder'
          ) }
*/