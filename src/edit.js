
import './editor.scss';

import OpenModal from './components/OpenModal';
import ModalFormSelect from './components/ModalFormSelect';
import FormEmbed from './components/FormEmbed';
import MyAlignmentToolbar from './components/MyAlignmentToolbar';


import {
    useBlockProps,
    //RichText,
    //AlignmentToolbar,
    //BlockControls,
    BlockPreview,
} from '@wordpress/block-editor';
import MySidebar from './components/MySidebar';

export const FormDataContext = React.createContext();
export const SetFormDataContext = React.createContext();
export const MessageContext = React.createContext();
export const IsModalOpenContext = React.createContext();
export const SetModalOpenContext = React.createContext();
export const IsVisibleContext = React.createContext();
export const SetVisibleContext = React.createContext();

export default function Edit( { attributes, setAttributes } ) {
	function setFormData(data){
		setAttributes({formData : data});
	}
	function setModalOpen(flag){
		setAttributes({isModalOpen : flag});
	}
	function setVisible(flag){
		setAttributes({isVisible : flag});
	}

	return (
		<div { ...useBlockProps() } 
			id="formBlock" 
			style={
				{
					maxWidth: attributes.maxWidth, 
					height: attributes.heightStyle + attributes.heightMetric
				}
			}>

			<SetModalOpenContext.Provider value={setModalOpen}>
				<FormDataContext.Provider value={attributes.formData}>
					<SetVisibleContext.Provider value={setVisible}>
					<SetFormDataContext.Provider value={setFormData}>
					<IsModalOpenContext.Provider value={attributes.isModalOpen}>

						{attributes.isModalOpen && <ModalFormSelect setAttributes={setAttributes} />}

					</IsModalOpenContext.Provider>
					</SetFormDataContext.Provider>
					</SetVisibleContext.Provider>

					{!attributes.isVisible && <FormEmbed  />}
				</FormDataContext.Provider>

				<IsVisibleContext.Provider value={attributes.isVisible}>
				<MessageContext.Provider value={attributes.message}>
					<OpenModal />
				</MessageContext.Provider>
				</IsVisibleContext.Provider>
			</SetModalOpenContext.Provider>

			<MyAlignmentToolbar alignment={attributes.alignment} setAttributes={setAttributes}/>

			<MySidebar attributes={attributes} setAttributes={setAttributes}/>

			<BlockPreview blocks={ [] } viewportWidth={ 800 } /> {/* blocks */}

		</div>
	);
}


/** Retrieves the translation of text.
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 * WordPress components that create the necessary UI elements for the block
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */