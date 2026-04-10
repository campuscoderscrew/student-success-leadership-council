type Props = {
  caption: string;
  imgSrc: string;
};

export default function GalleryCard(props: Props) {
  const { caption, imgSrc } = props;

  return (
    <div className="space-y-2 md:space-y-4">
      <img
        className="w-full 
          rounded-xl mdrounded-3xl border-2 border-black object-cover"
        src={imgSrc}
      />

      <figcaption className="subtitle-text font-bold text-center">
        {caption}
      </figcaption>
    </div>
  );
}
