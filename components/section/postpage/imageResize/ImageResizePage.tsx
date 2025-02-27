import { useRouter } from 'next/router';
import React, { useState } from 'react';

//styled
import * as Styled from './ImageResizeStyle';
import { ARROW_IMAGE } from '../../../../src/image/image';
//util
import { ImageCompress } from 'ts-image-compress';
import { loaderProp } from '../../../../src/utils/loaderProp';

const ImageResizePage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [resizeImage, setResizeImage] = useState<File | null>(null);
  const router = useRouter();

  const handleResizeImage = async () => {
    if (!image) {
      return;
    }
    const resizeResult = await ImageCompress(image);
    if (!resizeResult) {
      return;
    }
    setResizeImage(resizeResult as File);
  };

  return (
    <>
      <Styled.BackButton
        onClick={() => router.back()}
        loader={loaderProp}
        src={ARROW_IMAGE}
        alt={'arrow'}
        width={50}
        unoptimized={true}
        height={50}
      />
      <Styled.Wrap>
        <Styled.InputButton
          type="file"
          accept=".jpeg, .jpg, .png, .gif"
          multiple={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) {
              return;
            }
            setImage(e.target.files[0]);
          }}
        />
        <Styled.ImageInfoSection>
          <div>Origin Name: {image?.name}</div>
          <div>Origin Size: {image?.size}</div>
        </Styled.ImageInfoSection>
        <Styled.OriginImage
          image={image === null ? null : URL.createObjectURL(image)}
        ></Styled.OriginImage>
        <Styled.MiddleSection>
          <Styled.ResizeButton onClick={handleResizeImage}>
            Do you want resize image?
          </Styled.ResizeButton>
        </Styled.MiddleSection>
        <Styled.ImageInfoSection>
          <div>Resize Name: {resizeImage?.name}</div>
          <div>Resize Size: {resizeImage?.size}</div>
        </Styled.ImageInfoSection>
        <Styled.OriginImage
          image={resizeImage === null ? null : URL.createObjectURL(resizeImage)}
        ></Styled.OriginImage>
      </Styled.Wrap>
    </>
  );
};

export default ImageResizePage;
