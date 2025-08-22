import { InstagramIcon } from "../icons/instagram";

const followImages = [
  "/images/follow/follow-one.png",
  "/images/follow/follow-two.jpg",
  "/images/follow/follow-three.png",
  "/images/follow/follow-four.png",
  "/images/follow/follow-five.png",
  "/images/follow/follow-six.png",
];

export default function Follow() {
  return (
    <div className="container py-25">
      <div className="flex flex-col items-center gap-8">
        <h2 className="font-semibold">Follow us on Instagram</h2>
        <div className="w-full flex gap-6 flex-wrap justify-center">
          {followImages.map((image, index) => (
            <FollowCard key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FollowCard({ image }: { image: string }) {
  return (
    <div
      className={`size-50 rounded-[10px] overflow-hidden group bg-[url(${image})] bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hidden group-hover:flex h-full w-full justify-center items-center bg-[#2B572ECC]">
        <InstagramIcon />
      </div>
    </div>
  );
}
