import styled from "styled-components";

//to do (pick the right image with the proper styles)
const RoundedImage = styled.img`
  border-radius: 130px;
  /* border-radius: 50%; */
  width: 294x;
  height: 460px;

  margin: 50px;

  object-fit: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Horizontal offset, vertical offset, blur radius, color */
`;

export const RoundedImageTwo = styled.img`
  /* border-radius: 80px; */
  /* border-radius: 50%; */
  width: 370px;
  height: 579px;
  border-top-right-radius: 200px;
  border-top-left-radius: 200px;

  margin: 50px;

  object-fit: cover;
`;

export default RoundedImage;
