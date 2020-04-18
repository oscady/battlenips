import React from 'react';
import { InfoComponentStyled } from './InfoComponent.styled';

const InfoComponent = () => {
  return (
    <InfoComponentStyled>
      <h2>things about this app</h2>
      <span>1. usage</span>
      <p>load your image with the select image button, then adjust the cavas size, scale of the image and x/y positioning to get the best ratio for your desired fit or aspect ratio. The number box doesn't go any smaller than 320x320 so keep that in mind for readability.</p>
      <p>set the opacity to zero and get to work positioning and sizing the box to get the nips nicely into specific boxes. once you have positioned the box over the nips with care and precision you can adjust the opacity to your preferred level for output.</p>
      <p>once you have set up the battlenip you can click the save images button on the control panel. this button will save the two pictures to your device, for the first picture the boxes background will be white, the second will be at the opacity you left the slider.</p>
      <span>2. privacy</span>
      <p>this is purely front end so i'm not saving your pics to a database, the save images button just takes a screen grab of the container.</p>
      <p>i did use html2canvas for the screen grabs, i don't know if they store the images, i should check</p>
      <span>3. mobile</span>
      <p>this will probably be crappy on mobile for now but maybe i'll sort that out. I guess make use of zooming. I haven't tried it out yet so maybe it won't work at all. i probably won't make it look nice though because i can't really do design and cba</p>
    </InfoComponentStyled>
  );

};

export default InfoComponent;