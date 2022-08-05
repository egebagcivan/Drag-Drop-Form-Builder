import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export const FormDataContext = React.createContext();
export const SetFormDataContext = React.createContext();
export const MessageContext = React.createContext();
export const IsModalOpenContext = React.createContext();
export const SetModalOpenContext = React.createContext();
export const IsVisibleContext = React.createContext();
export const SetVisibleContext = React.createContext();

//import Form from './components/Form';

//const formData = useContext(FormDataContext);
//import { useContext } from '@wordpress/element';
//import { FormDataContext } from '../edit';

export default function save( { attributes, setAttributes } ) {

	return (
		<div style={{maxWidth: attributes.maxWidth}} { ...useBlockProps.save() } >
			{ __(
				'Jotform Form Builder – hello from the saved content!',
				'jotform-form-builder'
			) }
				{!attributes.isVisible && 
					<iframe
					id="JotFormIFrame2" //JotFormIFrame-221714487915058
					title={attributes.formData.title}//"Toastmaster Evaluation Speaker Form"
					allowtransparency="true"
					allowFullScreen={true}
					allow="geolocation; microphone; camera"
					src={"https://form.jotform.com/" + attributes.formData.id} //"https://form.jotform.com/221714487915058"
					frameBorder="0"
					style={{width: "-webkit-fill-available", height: attributes.heightStyle+attributes.heightMetric}}
					scrolling="yes">
					</iframe>
				}
		</div>
	);
}

/**
 * Retrieves the translation of text.
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @return {WPElement} Element to render.
 */