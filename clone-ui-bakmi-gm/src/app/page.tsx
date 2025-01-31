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

      {/* icon menu */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span className="text-xs mt-1">Order</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xs mt-1">Redeem</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <span className="text-xs mt-1">My Voucher</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="text-xs mt-1">Privilege</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xs mt-1">History</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xs mt-1">Contact Us</span>
          </div>
        </div>
      </div>

      {/* banner invite teman */}
      <div className="px-4 py-2">
        <div className="w-full h-40 rounded-lg overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            alt="Promo Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* redeem award */}
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-lg font-bold">Redeem Your Award</h1>
            <h5 className="text-xs text-gray-500">
              Earn more to get your rewards
            </h5>
          </div>
          <button className="btn btn-ghost btn-sm">See all</button>
        </div>
        <div className="flex overflow-x-auto gap-3 snap-x scrollbar-hide -mx-4 px-4 -ml-1">
          {reedemRewards.map((reward) => (
            <div
              className="flex-none w-[160px] snap-start mb-2"
              key={reward.id}
            >
              <CardRedeemAward
                name={reward.name}
                imgUrl={reward.imgUrl}
                point={reward.point}
              />
            </div>
          ))}
        </div>
      </div>

      {/* privileges */}
      <div className="px-4">
        {" "}
        {/* Add padding for mobile */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-lg font-bold">Privileges</h1>
            <h5 className="text-xs text-gray-500">
              Keep discovering our promo and news
            </h5>
          </div>
        </div>
        {/* <h1 className="text-xl font-bold mb-4">Privillage</h1> */}
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

      {/* Locations */}
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
