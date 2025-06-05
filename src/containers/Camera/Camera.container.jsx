import { CameraComponent } from '../../components/atoms';
import { Card } from '../../components/molecules';

const CameraContainer = () => {
  return (
    <>
      <CameraComponent />
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera ponsel Anda ke bagian kulit yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </>
  );
};

export default CameraContainer;
