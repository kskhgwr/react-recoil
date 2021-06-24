import styled from "styled-components";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
import { useHistory } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecoundaryButton onClick={onClickAdmin}>管理者ユーザー</SecoundaryButton>
      <br />
      <br />
      <SecoundaryButton onClick={onClickGeneral}>一般ユーザー</SecoundaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
