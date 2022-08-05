//import React from 'react'
import { __ } from '@wordpress/i18n';
import {
    //ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';

import { SelectControl, TextControl, __experimentalUnitControl as UnitControl } from '@wordpress/components'; // Toolbar, ToolbarItem, Button, 
//import { BlockAlignmentToolbar } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

function MySidebar(props) {
    //const [ size, setSize ] = useState( '50%' );
    //const [ value, setValue ] = useState( '10px' );
    //console.log(props.attributes.heightStyle + props.attributes.heightMetric) // 
    console.log(props.attributes.alignmentStyle);

    return (
        <InspectorControls key="setting">
            <div id="gutenpride-controls">
                <fieldset>
                
                <UnitControl 
                    label=" Height with metric"
                    value={ props.attributes.heightStyle }
                    unit={ props.attributes.heightMetric }
                    onChange={ ( value ) => props.setAttributes( {heightStyle: parseInt(value,10)} ) }
                    onUnitChange={ ( unit ) => props.setAttributes( {heightMetric: unit} ) }
                    style={{padding: 10}}
                />
                </fieldset>
                
                <fieldset>
                   
                </fieldset>
            </div>
        </InspectorControls>
    )
}

export default MySidebar

/*

<TextControl
    label=" Height"
    value={ props.attributes.heightStyle } //className
    onChange={ ( val ) => props.setAttributes( {heightStyle: parseInt(val,10)} ) }
/>

*/

/*

 <SelectControl
                        label="Size"
                        value={ size }
                        options={ [
                            { label: 'Big', value: '100%' },
                            { label: 'Medium', value: '50%' },
                            { label: 'Small', value: '25%' },
                        ] }
                        onChange={ ( newSize ) => setSize( newSize ) }
                        //__nextHasNoMarginBottom
                    />

*/

/*

const [ value, setValue ] = useState( '' );

    const onChangeBGColor = ( hexColor ) => {
        props.setAttributes( { bg_color: hexColor } );
    };

    const onChangeTextColor = ( hexColor ) => {
        props.setAttributes( { text_color: hexColor } );
    };

*/

/*

<fieldset>
                <legend className="blocks-base-control__label">
                    { __( 'Background color', 'gutenpride' ) }
                </legend>
                <ColorPalette // Element Tag for Gutenberg standard colour selector
                    onChange={ onChangeBGColor } // onChange event callback
                />
            </fieldset>
            <fieldset>
                <legend className="blocks-base-control__label">
                    { __( 'Text color', 'gutenpride' ) }
                </legend>
                <ColorPalette // Element Tag for Gutenberg standard colour selector
                    onChange={ onChangeTextColor } // onChange event callback
                />
            </fieldset>
            <fieldset>
                <Toolbar label="Options">
                    <ToolbarItem as={ Button }>I am a toolbar button</ToolbarItem>
                    <ToolbarItem as="button">I am another toolbar button</ToolbarItem>
                </Toolbar>
            </fieldset>
            <fieldset>
                <BlockAlignmentToolbar 
                    value={ props.alignment }  
                    onChange={ ( newAlignment ) => {
                        props.setAttributes( { alignment: newAlignment, } ); //  === undefined ? 'none' : newAlignment 
                        props.setAttributes( { alignmentStyle: { maxWidth: whichWidth(newAlignment)} } )
                    } }/>
            </fieldset>

*/