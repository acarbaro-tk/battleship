import { Button, Space, Typography } from "antd";
import styled from "styled-components";
import { DIFFICULTIES } from "../../constants/game";
import { useSettings } from "../../hooks/useSettings";

const { Title } = Typography;

export const Settings = () => {
  const { handleChangeDifficulty } = useSettings();
  return (
    <div>
      <Title level={4}>Settings</Title>
      <div>
        <Space>Change difficulty:</Space>
        <DifficultyList>
          <Button onClick={() => handleChangeDifficulty(DIFFICULTIES["EASY"])}>Easy</Button>
          <Button onClick={() => handleChangeDifficulty(DIFFICULTIES["MEDIUM"])}>Medium</Button>
          <Button onClick={() => handleChangeDifficulty(DIFFICULTIES["HARD"])}>Hard</Button>
        </DifficultyList>
      </div>
    </div>
  );
};

const DifficultyList = styled.div`
  display: flex;
  gap: 1rem;
`;
