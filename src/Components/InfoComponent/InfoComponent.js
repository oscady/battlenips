import React from 'react';
import { InfoComponentStyled } from './InfoComponent.styled';

const InfoComponent = () => {
  return (
    <InfoComponentStyled>
      <div>
        <h2>things about this app</h2>
        <p style={ { fontWeight: "bold" } }>1. usage</p>
        <p>load your image with the select image button, then adjust the cavas size, scale of the image and x/y positioning to get the best ratio for your desired fit or aspect ratio. The number box doesn't go any smaller than 200px so keep that in mind for readability.</p>
        <p>set the opacity to zero and get to work positioning and sizing the box to get the nips nicely into specific boxes. once you have positioned the box over the nips with care and precision you can adjust the opacity to your preferred level for output.</p>
        <p>once you have set up the battlenip you can click the save images button on the control panel. this button will save the two pictures to your device but you may be prompted to ask you if you'd like to download multiple files, you would. this will save the first picture at the current opacity labelled "answer" and the second with no opacity labelled "question".</p>
        <p style={ { fontWeight: "bold" } }>2. privacy</p>
        <p>this is purely front end so i'm not saving your pics to a database, the save images button just takes a screen grab of the container, usage is between you and the fbi guy</p>
        <p style={ { fontWeight: "bold" } }>3. mobile</p>
        <p>this will probably be crappy on mobile for now but maybe i'll sort that out. I guess make use of zooming. I haven't tried it out yet so maybe it won't work at all. i probably won't make it look nice though because i can't really do design and cba</p>
      </div>
    </InfoComponentStyled>
  );

};

export default InfoComponent;