/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
 import { TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarItem, Button } from '@wordpress/components';
import { formatBold, formatItalic, link, edit } from '@wordpress/icons';
import MyModal from './components/MyModal';
import FormEmbed from './components/FormEmbed';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	return (
		<div { ...useBlockProps() }>
			<img src="https://www.jotform.com/resources/assets/icon/jotform-icon-orange-800x800.png" 
				alt="jotform-icon" 
				className='jotform-icon'/>
			{ __(
				'Jotform Form Builder Editor',
				'jotform-form-builder'
			) }
			<p>{attributes.message}</p>
			<MyModal styles={attributes.modalStyles}/>

			<Toolbar label="Options">
				<ToolbarGroup>
					<ToolbarButton icon={ formatBold } label="Bold" isSmall={true} onClick={() => {
						if(attributes.style.fontWeight == "lighter")
							setAttributes( { style: {fontWeight: "bold"} } );
						else setAttributes( { style: {fontWeight: "lighter"} } );
					}}/>
					<ToolbarButton icon={ formatItalic } label="Italic" />
					<ToolbarButton icon={ link } label="Link" />
					<ToolbarButton
						icon={ edit }
						label="Edit"
						onClick={ ( ) => {
							//alert( 'Editing' );
							setAttributes( { editable: !attributes.editable } );
						} }
					/>
				</ToolbarGroup>	
				<ToolbarGroup>
					<ToolbarItem as={ Button }>Alert</ToolbarItem>
					<ToolbarItem as="button">I am another toolbar button</ToolbarItem>
				</ToolbarGroup>
        	</Toolbar>
			{attributes.editable &&
			<TextControl
				value={ attributes.message } //  + "::t"
				onChange={ ( val ) => setAttributes( { message: val } ) }
				style={attributes.style}/>
			}
		</div>
	);
}
