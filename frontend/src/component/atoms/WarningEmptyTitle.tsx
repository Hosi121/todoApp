
import { Button } from "@mui/material";
import { WarningEmptyTitleProps } from "../../types/WarningEmptyTitleProps";

const WarningEmptyTitle = (props:WarningEmptyTitleProps) =>
{
  const { alertModalIsOpen,setAlertModalIsOpen,closeAlertModal } = props;
  return (
    <>
      <h2>警告</h2>
      <p>タイトルが未記入です</p>
      <Button onClick={closeAlertModal}>Close</Button>
    </>
  );
  
};

export default WarningEmptyTitle;