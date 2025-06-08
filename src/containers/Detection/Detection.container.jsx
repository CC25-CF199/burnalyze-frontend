import { Card } from '../../components/molecules';
import { DetectionHeader } from '../../components/organisms';

const DetectionContainer = () => {
  return (
    <>
      <DetectionHeader />
      <Card
        title="Cara Penggunaan"
        content="Arahkan kamera ponsel Anda ke bagian kulit yang terkena luka bakar atau unggah foto luka bakar anda. AI akan menganalisis dan mengklasifikasikan luka bakar tersebut untuk Anda."
      />
    </>
  );
};

export default DetectionContainer;
