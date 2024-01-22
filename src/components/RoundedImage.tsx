import StyledRoundedImage from "./styled/RoundedImage.styled";
import { RoundedImageTwo } from "./styled/RoundedImage.styled";

// to do(pick the right image with the proper styles)
const RoundedImage = () => {
  return (
    <>
      <StyledRoundedImage src="../../public/images/head.png" />;
      <StyledRoundedImage src="../../public/images/head2.png" />;
      <StyledRoundedImage src="../../public/images/head3.png" />;
      <StyledRoundedImage src="../../public/images/headcropped.png" />;
      <RoundedImageTwo src="../../public/images/Alicia.jpg" />
      <RoundedImageTwo src="../../public/images/head3.png" />
    </>
  );
};
export default RoundedImage;
