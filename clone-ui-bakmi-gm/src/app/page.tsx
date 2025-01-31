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
        <h1>Redeem Award</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reedemRewards.map((reward) => (
            <CardRedeemAward
              key={reward.id}
              name={reward.name}
              imgUrl={reward.imgUrl}
              point={reward.point}
            />
          ))}
        </div>
      </div>
      <div>
        <h1>Privillage</h1>
        {privillages.map((privillage) => (
          <CardPrivillages
            key={privillage.id}
            name={privillage.name}
            imgUrl={privillage.imgUrl}
            expire={privillage.expire}
          />
        ))}
        {/* // <CardPrivillages /> */}
      </div>
      <div>
        <h1>Outlet Location</h1>
        <TableLocation />
      </div>
    </>
  );
}
