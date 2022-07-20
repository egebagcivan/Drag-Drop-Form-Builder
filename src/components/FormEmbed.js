import React from 'react'

function FormEmbed(props) {

  const source = "https://form.jotform.com/" + props.id;
  const title = props.title;

  return (
    <div>

    <iframe
      id="JotFormIFrame-221714487915058"
      title={title}//"Toastmaster Evaluation Speaker Form" //
      allowtransparency="true"
      allowFullScreen={true}
      allow="geolocation; microphone; camera"
      src={source}//"https://form.jotform.com/221714487915058" //
      frameBorder="0"
      scrolling="yes"
    >
    </iframe>
    
    </div>
  )
}

export default FormEmbed