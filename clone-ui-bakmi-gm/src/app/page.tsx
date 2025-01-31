import Banner from "@/components/Banner";
import CardPrivillages from "@/components/CardPrivillages";
import CardRedeemAward from "@/components/CardRedeemAward";
import TableLocation from "@/components/TableLocation";
import { TReedemReward, TLocation, TPrivillages } from "@/Types";

export default function Home() {
  const reedemRewards: TReedemReward[] = [
    {
      id: 1,
      name: "Es Teh Manis",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      point: 40,
    },
    {
      id: 2,
      name: "Es Lemon Teh",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      point: 45,
    },
    {
      id: 3,
      name: "Es Jeruk",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      point: 300,
    },
  ];

  const privillages: TPrivillages[] = [
    {
      id: 1,
      name: "Platinum Member",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      expire: "12/12/2022",
    },
    {
      id: 2,
      name: "Gold Member",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      expire: "12/12/2022",
    },
    {
      id: 3,
      name: "Silver Member",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      expire: "12/12/2022",
    },
    {
      id: 4,
      name: "Birthday Reward",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      expire: "12/12/2022",
    },
    {
      id: 5,
      name: "Reedem Point",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      expire: "12/12/2022",
    },
    {
      id: 6,
      name: "Sign Up Reward",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      expire: "12/12/2022",
    },
  ];

  const locations: TLocation[] = [
    {
      id: 1,
      name: "Raya Darmo Permai",
      address: "Jl. Raya Darmo Permai III No. 1, Pradah",
      distance: 2.4,
    },
    {
      id: 2,
      name: "Citra Garden",
      address: "Jl. Raya Citra Garden No. 1, Pradah",
      distance: 6.2,
    },
    {
      id: 3,
      name: "Pakuwon Mall",
      address: "Jl. Raya Pakuwon Indah No. 1, Pradah",
      distance: 8.4,
    },
    {
      id: 4,
      name: "Galaxy Mall",
      address: "Jl. Raya Galaxy Mall No. 1, Pradah",
      distance: 10.4,
    },
    {
      id: 5,
      name: "Pakuwon Trade Center",
      address: "Jl. Raya Pakuwon Trade Center No. 1, Pradah",
      distance: 12.4,
    },
  ];

  return (
    <>
      <Banner />
      <div>
        <div>
          <h1>Your Level</h1>
        </div>
      </div>
      <div>
        <h1> Bakmi GM Points</h1>
      </div>
      <div>
        <h2>Icon Table</h2>
      </div>
      <div>
        <h1>Image like banner</h1>
      </div>
      <div>
        <div className="flex ">
          <div className="w-4/5">
            <h1 className="">Redeem Your Award</h1>
            <h5>Earn more to get your rewards</h5>
          </div>
          <div className="w-1/5">
            <button className="btn btn-ghost">See all</button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 py-2 snap-x scrollbar-hide">
          {reedemRewards.map((reward) => (
            <div className="flex-none w-[280px] snap-start" key={reward.id}>
              <CardRedeemAward
                name={reward.name}
                imgUrl={reward.imgUrl}
                point={reward.point}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        {" "}
        {/* Add padding for mobile */}
        <h1 className="text-xl font-bold mb-4">Privillage</h1>
        <div className="grid grid-cols-2 gap-2 auto-rows-auto">
          {privillages.map((privillage) => (
            <CardPrivillages
              key={privillage.id}
              name={privillage.name}
              imgUrl={privillage.imgUrl}
              expire={privillage.expire}
            />
          ))}
        </div>
      </div>
      <div className="px-4">
        <div className="space-y-4">
          <div className="flex flex-col mt-4">
            <h2 className="text-lg font-bold">Our Locations</h2>
            <h5 className="text-xs text-gray-500">Explore your options</h5>
          </div>
          {locations.map((location) => (
            <TableLocation
              key={location.id}
              name={location.name}
              address={location.address}
              distance={location.distance}
            />
          ))}
        </div>
        <div className="flex justify mb-8">
          <button className="btn btn-ghost text-orange-400">See all</button>
        </div>
      </div>
    </>
  );
}
