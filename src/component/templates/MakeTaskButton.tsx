import { Button } from '@mui/material';

const MakeTaskButton = () => {
  const onClick = () => {
    console.log('Make Task Button Clicked');
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={onClick}>
        Make Task
      </Button>
    </div>
  );
};

export default MakeTaskButton;
