import CheckCircleOutlined from "@ant-design/icons/lib/icons/CheckCircleOutlined";
import { memo } from "react";
import classes from "./Avatar.module.scss";

type AvatarProps = {
  avatarImage: string;
};

function Avatar({ avatarImage }: AvatarProps): JSX.Element {
  return (
    <div className="avatar_container">
      <CheckCircleOutlined className="online" />
      <img
        className={classes.avatar}
        src={avatarImage}
        width="50"
        height="50"
        alt=""
      />
    </div>
  );
}

export default memo(Avatar);
