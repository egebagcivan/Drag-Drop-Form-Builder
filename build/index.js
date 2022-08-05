/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/FormEmbed.js":
/*!*************************************!*\
  !*** ./src/components/FormEmbed.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit */ "./src/edit.js");




const FormEmbed = () => {
  const formData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_1__.FormDataContext);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    id: "JotFormIFrame" //JotFormIFrame-221714487915058
    ,
    title: formData.title //"Toastmaster Evaluation Speaker Form"
    ,
    allowtransparency: "true",
    allowFullScreen: true,
    allow: "geolocation; microphone; camera",
    src: "https://form.jotform.com/" + formData.id //"https://form.jotform.com/221714487915058"
    ,
    frameBorder: "0",
    scrolling: "yes"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormEmbed);

/***/ }),

/***/ "./src/components/ModalFormSelect.js":
/*!*******************************************!*\
  !*** ./src/components/ModalFormSelect.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit */ "./src/edit.js");





const ModalFormSelect = props => {
  const setFormData = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_2__.SetFormDataContext);
  const setModalOpen = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_2__.SetModalOpenContext);
  const setVisible = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_2__.SetVisibleContext);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('message', event => {
      if (event.data.type === "resourcePickerClosed") {
        setModalOpen(false);
      } else if (event.data.type === "resourcePicked") {
        setModalOpen(false);
        setFormData(event.data.data);
        setVisible(false);
        props.setAttributes({
          heightStyle: 50,
          heightMetric: "vw"
        });
      }
    });
    return () => {
      window.removeEventListener('message', event => {});
    };
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "This is my modal" //onRequestClose={ () => setModalOpen( false )  }
    ,
    style: {
      width: "35em",
      height: "40em"
    },
    isDismissible: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: "https://www.jotform.com/resource-picker/wrapper.php?picker=form",
    title: "jotform-resource-picker",
    scrolling: "no",
    id: "embed-form-iframe" //IT WAS jotform-iframe

  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFormSelect);

/***/ }),

/***/ "./src/components/MyAlignmentToolbar.js":
/*!**********************************************!*\
  !*** ./src/components/MyAlignmentToolbar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const whichWidth = alignment => {
  if (alignment === 'full') return '-webkit-fill-available';else if (alignment === 'wide') return "1000px";else return "650px";
}; //textAlign: 'right',


const MyAlignmentToolbar = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
  group: "block"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockAlignmentToolbar, {
  value: props.alignment,
  onChange: newAlignment => {
    props.setAttributes({
      alignment: newAlignment
    }); //  === undefined ? 'none' : newAlignment 

    props.setAttributes({
      maxWidth: whichWidth(newAlignment)
    });
  }
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAlignmentToolbar); // onChange(newValue: Control | undefined): void;

/*

<AlignmentToolbar
    value={ props.alignment }
    onChange={ ( newAlignment ) => {
        setAttributes( {alignment: newAlignment === undefined ? 'left' : newAlignment,} ); // 'none'
    } }
/>

*/

/*

<AlignmentControl
			value={ "right" }
            onChange={ ( nextAlign ) => {
				setAttributes( { textAlign: nextAlign } );
			} }
		/>

*/

/***/ }),

/***/ "./src/components/MySidebar.js":
/*!*************************************!*\
  !*** ./src/components/MySidebar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

//import React from 'react'


 // Toolbar, ToolbarItem, Button, 
//import { BlockAlignmentToolbar } from '@wordpress/block-editor';



function MySidebar(props) {
  //const [ size, setSize ] = useState( '50%' );
  //const [ value, setValue ] = useState( '10px' );
  //console.log(props.attributes.heightStyle + props.attributes.heightMetric) // 
  console.log(props.attributes.alignmentStyle);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "gutenpride-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    label: " Height with metric",
    value: props.attributes.heightStyle,
    unit: props.attributes.heightMetric,
    onChange: value => props.setAttributes({
      heightStyle: parseInt(value, 10)
    }),
    onUnitChange: unit => props.setAttributes({
      heightMetric: unit
    }),
    style: {
      padding: 10
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySidebar);
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

/***/ }),

/***/ "./src/components/OpenModal.js":
/*!*************************************!*\
  !*** ./src/components/OpenModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit */ "./src/edit.js");






const OpenModal = () => {
  const message = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_3__.MessageContext);
  const setModalOpen = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_3__.SetModalOpenContext);
  const isVisible = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_edit__WEBPACK_IMPORTED_MODULE_3__.IsVisibleContext);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: isVisible ? {
      display: 'flex',
      flexDirection: "column",
      margin: 8
    } : {
      display: 'none'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://www.jotform.com/resources/assets/icon/jotform-icon-transparent-560x560.png",
    alt: "jotform-icon",
    className: "jotform-icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: '18pt',
      paddingTop: 10
    }
  }, "Jotform Form Builder")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '0.9rem',
      marginLeft: '0.5em'
    }
  }, message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    id: "pickerBtn",
    onClick: () => setModalOpen(true),
    style: {
      width: '95px',
      borderRadius: 5,
      marginLeft: '0.5em'
    }
  }, " Select Form"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenModal);
/*
  { __(
          'Jotform Form Builder Editor',
          'jotform-form-builder'
          ) }
*/

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDataContext": () => (/* binding */ FormDataContext),
/* harmony export */   "IsModalOpenContext": () => (/* binding */ IsModalOpenContext),
/* harmony export */   "IsVisibleContext": () => (/* binding */ IsVisibleContext),
/* harmony export */   "MessageContext": () => (/* binding */ MessageContext),
/* harmony export */   "SetFormDataContext": () => (/* binding */ SetFormDataContext),
/* harmony export */   "SetModalOpenContext": () => (/* binding */ SetModalOpenContext),
/* harmony export */   "SetVisibleContext": () => (/* binding */ SetVisibleContext),
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _components_OpenModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/OpenModal */ "./src/components/OpenModal.js");
/* harmony import */ var _components_ModalFormSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ModalFormSelect */ "./src/components/ModalFormSelect.js");
/* harmony import */ var _components_FormEmbed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FormEmbed */ "./src/components/FormEmbed.js");
/* harmony import */ var _components_MyAlignmentToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MyAlignmentToolbar */ "./src/components/MyAlignmentToolbar.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MySidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/MySidebar */ "./src/components/MySidebar.js");









const FormDataContext = React.createContext();
const SetFormDataContext = React.createContext();
const MessageContext = React.createContext();
const IsModalOpenContext = React.createContext();
const SetModalOpenContext = React.createContext();
const IsVisibleContext = React.createContext();
const SetVisibleContext = React.createContext();
function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;

  function setFormData(data) {
    setAttributes({
      formData: data
    });
  }

  function setModalOpen(flag) {
    setAttributes({
      isModalOpen: flag
    });
  }

  function setVisible(flag) {
    setAttributes({
      isVisible: flag
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)(), {
    id: "formBlock",
    style: {
      maxWidth: attributes.maxWidth,
      height: attributes.heightStyle + attributes.heightMetric
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SetModalOpenContext.Provider, {
    value: setModalOpen
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FormDataContext.Provider, {
    value: attributes.formData
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SetVisibleContext.Provider, {
    value: setVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SetFormDataContext.Provider, {
    value: setFormData
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(IsModalOpenContext.Provider, {
    value: attributes.isModalOpen
  }, attributes.isModalOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_ModalFormSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes
  })))), !attributes.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_FormEmbed__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(IsVisibleContext.Provider, {
    value: attributes.isVisible
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(MessageContext.Provider, {
    value: attributes.message
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_OpenModal__WEBPACK_IMPORTED_MODULE_3__["default"], null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_MyAlignmentToolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    alignment: attributes.alignment,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_MySidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockPreview, {
    blocks: [],
    viewportWidth: 800
  }), " ");
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

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.jotform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "600",
  height: "600",
  viewBox: "120 120 400 400",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "600",
  height: "600",
  fill: "white"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M231.287 450.612C237.601 456.733 233.139 467.221 224.173 467.221H168.06C156.989 467.221 147.98 458.488 147.98 447.756V393.358C147.98 384.666 158.799 380.341 165.113 386.462L231.287 450.612Z",
  fill: "#0A1551"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M319.003 454.845C302.393 438.343 302.394 411.589 319.003 395.088L378.947 335.535C395.557 319.033 422.486 319.033 439.096 335.535C455.705 352.036 455.705 378.79 439.096 395.292L379.152 454.845C362.542 471.346 335.613 471.346 319.003 454.845Z",
  fill: "#FFB629"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M160.64 305.204C144.031 288.703 144.031 261.949 160.64 245.447L261.52 145.155C278.129 128.653 305.059 128.653 321.669 145.155C338.278 161.656 338.278 188.41 321.669 204.912L220.789 305.204C204.179 321.705 177.25 321.705 160.64 305.204Z",
  fill: "#0099FF"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M243.108 376.686C226.498 360.185 226.498 333.43 243.108 316.929L379.414 181.511C396.024 165.009 422.953 165.009 439.563 181.511C456.173 198.012 456.173 224.766 439.563 241.268L303.256 376.686C286.647 393.187 259.717 393.187 243.108 376.686Z",
  fill: "#FF6100"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"].jotform
});
registerPlugin("jotform-form-builder", {
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"].jotform,
  // The Plugin icon
  render: Sidebar
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDataContext": () => (/* binding */ FormDataContext),
/* harmony export */   "IsModalOpenContext": () => (/* binding */ IsModalOpenContext),
/* harmony export */   "IsVisibleContext": () => (/* binding */ IsVisibleContext),
/* harmony export */   "MessageContext": () => (/* binding */ MessageContext),
/* harmony export */   "SetFormDataContext": () => (/* binding */ SetFormDataContext),
/* harmony export */   "SetModalOpenContext": () => (/* binding */ SetModalOpenContext),
/* harmony export */   "SetVisibleContext": () => (/* binding */ SetVisibleContext),
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




const FormDataContext = React.createContext();
const SetFormDataContext = React.createContext();
const MessageContext = React.createContext();
const IsModalOpenContext = React.createContext();
const SetModalOpenContext = React.createContext();
const IsVisibleContext = React.createContext();
const SetVisibleContext = React.createContext(); //import Form from './components/Form';
//const formData = useContext(FormDataContext);
//import { useContext } from '@wordpress/element';
//import { FormDataContext } from '../edit';

function save(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: {
      maxWidth: attributes.maxWidth
    }
  }, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save()), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Jotform Form Builder – hello from the saved content!', 'jotform-form-builder'), !attributes.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("iframe", {
    id: "JotFormIFrame2" //JotFormIFrame-221714487915058
    ,
    title: attributes.formData.title //"Toastmaster Evaluation Speaker Form"
    ,
    allowtransparency: "true",
    allowFullScreen: true,
    allow: "geolocation; microphone; camera",
    src: "https://form.jotform.com/" + attributes.formData.id //"https://form.jotform.com/221714487915058"
    ,
    frameBorder: "0",
    style: {
      width: "-webkit-fill-available",
      height: attributes.heightStyle + attributes.heightMetric
    },
    scrolling: "yes"
  }));
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

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/jotform-form-builder","version":"0.1.0","title":"Jotform Form Builder","category":"widgets","description":"Jotform Drag & Drop Form Builder","attributes":{"message":{"type":"string","default":"Select a form to embed in your site."},"isModalOpen":{"type":"boolean","default":false},"isVisible":{"type":"boolean","default":true},"formData":{"type":"object","default":{"id":null,"title":null}},"alignment":{"type":"string","default":"none"},"maxWidth":{"type":"string","default":"650px"},"heightStyle":{"type":"number","default":160},"heightMetric":{"type":"string","default":"px"},"alignmentStyle":{"type":"object","default":{"maxWidth":"650px","minWidth":300,"width":650}},"editable":{"type":"boolean","default":true},"style":{"type":"object","default":{"fontWeight":"lighter"}}},"supports":{"html":false},"textdomain":"jotform-form-builder","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkjotform_form_builder"] = globalThis["webpackChunkjotform_form_builder"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map