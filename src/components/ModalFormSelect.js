import { Modal } from '@wordpress/components';
import { useEffect, useContext } from '@wordpress/element';

import { SetFormDataContext, SetModalOpenContext, SetVisibleContext } from '../edit';

const ModalFormSelect = (props) => {
    const setFormData = useContext(SetFormDataContext);
    const setModalOpen = useContext(SetModalOpenContext);
    const setVisible = useContext(SetVisibleContext);

    useEffect(() => {
        window.addEventListener('message', event => {
            if(event.data.type === "resourcePickerClosed"){
                setModalOpen( false );
            }
            else if(event.data.type === "resourcePicked"){
                setModalOpen( false );
                setFormData( event.data.data );
                setVisible( false );
                props.setAttributes( {heightStyle: 50, heightMetric: "vw"} );
            }
        } )
      return () => {
        window.removeEventListener('message', event => {});
      }
    }, [])
    
    return (
        <Modal title="This is my modal" 
                //onRequestClose={ () => setModalOpen( false )  }
                style={{width: "35em", height: "40em"}}
                isDismissible={false}>
            <iframe src="https://www.jotform.com/resource-picker/wrapper.php?picker=form"
                title="jotform-resource-picker" 
                scrolling='no'
                id='embed-form-iframe' //IT WAS jotform-iframe
            >
            </iframe>
        </Modal>
    );
}
export default ModalFormSelect;