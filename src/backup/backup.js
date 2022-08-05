
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarItem, Button } from '@wordpress/components';
import { formatBold, formatItalic, link, edit } from '@wordpress/icons';
import FormEmbed from './components/FormEmbed';

import { TextControl } from '@wordpress/components';


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