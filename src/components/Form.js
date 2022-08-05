import { useContext } from '@wordpress/element';
import { FormDataContext } from '../edit';

const FormEmbed = () => {

  const formData = useContext(FormDataContext);

  return (
      <iframe
        id="JotFormIFrame" //JotFormIFrame-221714487915058
        title={formData.title}//"Toastmaster Evaluation Speaker Form"
        allowtransparency="true"
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src={"https://form.jotform.com/" + formData.id} //"https://form.jotform.com/221714487915058"
        frameBorder="0"
        scrolling="yes">
      </iframe>
  )
}
export default FormEmbed