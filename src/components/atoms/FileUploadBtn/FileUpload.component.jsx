import { Button } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileUploadComponent = () => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUpload />}
      sx={{
        color: '#fff',
        borderRadius: '8px',
        fontWeight: 600,
        boxShadow: 3,
      }}
    >
      Upload foto
      <VisuallyHiddenInput
        type="file"
        onChange={event => console.log(event.target.files)}
        multiple
      />
    </Button>
  );
};

export default FileUploadComponent;
