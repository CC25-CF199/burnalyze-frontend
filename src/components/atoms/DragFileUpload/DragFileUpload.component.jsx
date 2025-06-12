import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Box } from '@mui/material';

const { Dragger } = Upload;

const DragFileUploadComponent = ({ setUploadedImage }) => {
  const props = {
    name: 'file',
    multiple: false,
    beforeUpload: file => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('Anda hanya dapat mengunggah gambar!');
        return Upload.LIST_IGNORE;
      }
      setUploadedImage(file);
      return false;
    },
    onDrop(e) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setUploadedImage(file);
      }
      console.log('Dropped files', e.dataTransfer.files);
    },
    onRemove: () => {
      setUploadedImage(null);
      return true;
    },
  };

  return (
    <Box
      sx={{
        '.ant-upload-drag': {
          height: {
            xs: '250px', // mobile height
            sm: '180px', // tablet height
            md: '200px', // desktop height
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.ant-upload-text': {
          fontSize: {
            xs: '12px !important',
            sm: '14px !important',
            md: '16px !important',
          },
          'ant-upload-list-item-name': {
            fontFamily: 'Metropolis !important',
          },
          fontFamily: 'Metropolis',
        },
      }}
    >
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <CloudUploadOutlined />
        </p>
        <p className="ant-upload-text">Seret gambar atau Pilih gambar</p>
      </Dragger>
    </Box>
  );
};

export default DragFileUploadComponent;
