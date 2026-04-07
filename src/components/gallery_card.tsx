type Props = {
  caption: string;
  imgSrc: string;
};

export default function GalleryCard(props: Props) {
  const { caption, imgSrc } = props;

  return (
    <div className="border-2 border-black">
      <div className="">
        <img className="object-cover" src={imgSrc} />
      </div>

      <figcaption>{caption}</figcaption>
    </div>
  );
}
