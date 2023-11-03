import usePresenter from "./UserScreen.presenter";
import useRouter from "./UserScreen.router";
import UserProfile from "../UserProfile";

const UserScreen = () => {
  const router = useRouter();
  const { user } = usePresenter(router);

  console.log(user);

  return (
    <>
      <UserProfile />
    </>
  );
};

export default UserScreen;
