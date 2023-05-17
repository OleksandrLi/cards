import React from "react";
import Input from "../../../../shared/input";
import { Container } from "./styles";

type WaitingPlayersRoomProps = {
  idForShare: string;
};

const WaitingPlayersRoom: React.FC<WaitingPlayersRoomProps> = ({
  idForShare,
}) => {
  const handleCopyId = () => {
    navigator.clipboard.writeText(idForShare);
  };

  return (
    <Container>
      <Input
        value={idForShare}
        onChange={() => {}}
        disabled={true}
        title={`Натисніть, щоб скопіювати або скопіюйте вручну цей айді і поділіться ним з другом,
         щоб він приєднався до гри`}
        onClick={handleCopyId}
      />
    </Container>
  );
};

export default WaitingPlayersRoom;
