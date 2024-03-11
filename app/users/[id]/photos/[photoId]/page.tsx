import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      UserDetails at {id} Photo {photoId}
    </div>
  );
};

export default PhotoPage;
