import React from 'react';
import tw from 'twin.macro';

const ProfileImage = () => {
  return (
    <ProfileImageWrapper>
      <BGCircle />

      <Avatar>
        <img
          src="/profile/profile.png"
          alt="Profile"
          width="200px"
          height="200px"
          tw="w-full h-full object-cover"
        />
      </Avatar>
    </ProfileImageWrapper>
  );
};

const ProfileImageWrapper = tw.div`
  relative h-[235px] w-[280px]
`;

const BGCircle = tw.div`
  absolute bottom-0 left-0 bg-primary w-[200px] h-[200px] rounded-circle
`;

const Avatar = tw.div`
  absolute top-0 right-0 w-[200px] h-[200px] z-10 rounded-circle overflow-hidden
`;

export default ProfileImage;
