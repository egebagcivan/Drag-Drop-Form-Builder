import { Button, Modal } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';
import FormEmbed from './FormEmbed';

const MyModal = (props) => {

    const [ isOpen, setOpen ] = useState( false );
    const [ formData, setFormData ] = useState([]);

    const openModal = () => setOpen( true );
    const closeModal = () => {
        //setOpen( false )
    };

    useEffect(() => {
        window.addEventListener('message', event => {
            //console.log(event.data)
            if(event.data.type === "resourcePickerClosed"){
                //console.log("CLOSE..........................");
                setOpen( false );
            }
            else if(event.data.type === "resourcePicked"){
                //console.log("OPEN", event.data.data);

                if( !formData.map((x) => x.id).includes(event.data.data.id+"") ){
                    //console.log("==========WORKS=============")
                    //console.log(event.data.data.id+"");
                }

                formData.forEach(elm => {
                    if(elm.id != event.data.data.id)
                        console.log(elm.id)
                });


                setFormData( (formData) => [...formData, event.data.data] );
            }
        } )
      return () => {
        window.removeEventListener('message');
      }
    }, [])

    const form_ids = formData.map((x) => x.id)

    const forms = formData.map((item) => {

        //console.log(form_ids, form_ids.slice(-1))
        return <FormEmbed id={item.id} title={item.title}/>
    })
    //<FormEmbed id={formData.id} title={formData.title}/>
   
    return (
        <div>
            <Button variant="secondary" onClick={ openModal } style={props.styles}>
                Open Modal
            </Button>
            { isOpen && (
                <Modal title="This is my modal" 
                        onRequestClose={ closeModal } 
                        style={{width: "35em", height: "40em"}}
                        isDismissible={false}>
                    <iframe src="https://www.jotform.com/resource-picker/wrapper.php?picker=form"
                        title="jotform-resource-picker" 
                       scrolling='no'
                       style={{width: "30em", height: "30em"}}
                       id='jotform-iframe'
                    >
                    </iframe>
                </Modal>
                ) //
            }
			{ formData !== null && forms}
        </div>
    );
};

export default MyModal

    /*const iframeRef = useRef(null);
    useEffect(() => {
      iframeRef.current.contentWindow.document.getElementById("pickerCancelButton").onClick = () => {
        closeModal();
      }
      //return () => {}
    }, [])*/
    //ref={iframeRef}
 

/*let jotformIframe = document.getElementById("jotform-frame");
let elmnt = iframe.contentWindow.document.getElementById("pickerCancelButton").onClick = () => {
    setOpen(false)
};*/

/*
var iframe = document.getElementById("myFrame");
var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
elmnt.style.display = "none";
*/

/*
<br/>
<Button variant="secondary" onClick={ closeModal }>
    My custom close button
</Button>
*/

/*
window.addEventListener('message', event => {
    console.log(event)
} )
*/