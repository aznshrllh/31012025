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
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/13c95b20-96a2-46eb-9412-27d6cc9cfbd4_Go-Biz_20200919_160218.jpeg",
      point: 40,
    },
    {
      id: 2,
      name: "Es Lemon Teh",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1b5kbcE1-xokvKMoB3pbMood_DH0rtqfSng&s",
      point: 45,
    },
    {
      id: 3,
      name: "Es Jeruk",
      imgUrl:
        "https://dcostseafood.id/wp-content/uploads/2021/12/ES-JERUK-murni.jpg",
      point: 300,
    },
  ];

  const privillages: TPrivillages[] = [
    {
      id: 1,
      name: "Platinum Member",
      imgUrl:
        "https://www.shutterstock.com/image-vector/vip-platinum-membership-badge-premium-600w-1731306640.jpg",
      expire: "12/12/2025",
    },
    {
      id: 2,
      name: "Gold Member",
      imgUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/12/EL/AE/AP/181507398/gold-membership.png",
      expire: "12/12/2025",
    },
    {
      id: 3,
      name: "Silver Member",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaC8HjtWsnTfuT5HKtyMGIdk5MX-jtVIpO5g&s",
      expire: "12/12/2025",
    },
    {
      id: 4,
      name: "Birthday Reward",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHwHEP5yG2hPUZaiwabKkh7GmBeEqPnkrCw&s",
      expire: "12/12/2025",
    },
    {
      id: 5,
      name: "Reedem Point",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mXs8WdoPh_Pm9iBzNtRcQZNHw2Afn24RcQ&s",
      expire: "12/12/2025",
    },
    {
      id: 6,
      name: "Sign Up Reward",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KlEYi_SizcM--jJgxyJttff07ffK_aolHg&s",
      expire: "12/12/2025",
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
      <div className="px-4 py-2">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Your Level</h1>
            <a
              href="#"
              className="text-xs text-orange-400 font-bold hover:underline"
            >
              Learn More
            </a>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-2">
                <span className="text-xs">Silver</span>
              </div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>

            <div className="flex-1 h-[2px] bg-gray-200 mx-2"></div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-xs">Gold</span>
              </div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>

            <div className="flex-1 h-[2px] bg-gray-200 mx-2"></div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-xs">Platinum</span>
              </div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Spend 3.500.001 by November 2025 to reach Gold
          </p>
        </div>
      </div>

      {/* Bakmi GM Points */}
      <div className="px-4 py-2">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-lg font-bold">Bakmi GM Points</h1>
              <p className="text-xs text-gray-500">
                40 will expire on 22 Februari 2025.{" "}
                <a href="#" className="text-xs text-blue-600 hover:underline">
                  See Details
                </a>
              </p>
            </div>
            <div className="text-xl font-bold text-black">40</div>
          </div>
        </div>
      </div>

      {/* icon menu */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-3 gap-4">
          {/* Order - Blue */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <span className="material-icons text-2xl text-blue-500">
                shopping_cart
              </span>
            </div>
            <span className="text-xs mt-1">Order</span>
          </div>

          {/* Redeem - Red */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
              <span className="material-icons text-2xl text-red-500">
                redeem
              </span>
            </div>
            <span className="text-xs mt-1">Redeem</span>
          </div>

          {/* My Voucher - Pink */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
              <span className="material-icons text-2xl text-pink-500">
                confirmation_number
              </span>
            </div>
            <span className="text-xs mt-1">My Voucher</span>
          </div>

          {/* Privilege - Purple */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
              <span className="material-icons text-2xl text-purple-500">
                star
              </span>
            </div>
            <span className="text-xs mt-1">Privilege</span>
          </div>

          {/* History - Violet */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center">
              <span className="material-icons text-2xl text-violet-500">
                calendar_month
              </span>
            </div>
            <span className="text-xs mt-1">History</span>
          </div>

          {/* Contact Us - Green */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
              <span className="material-icons text-2xl text-green-500">
                forum
              </span>
            </div>
            <span className="text-xs mt-1">Contact Us</span>
          </div>
        </div>
      </div>

      {/* banner invite teman */}
      <div className="px-4 py-2">
        <div className="w-full h-40 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col justify-center px-4 text-white">
          <h2 className="text-xl font-bold mb-8 text-right">
            Dapatkan 5 Poin dengan mengajak teman kamu
          </h2>
          <div className="flex justify-end">
            <button className="btn btn-sm bg-white text-purple-500 hover:bg-gray-100 border-none">
              REFER NOW
            </button>
          </div>
        </div>
      </div>

      {/* redeem award */}
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mb-2 mt-2">
          <div>
            <h1 className="text-lg font-bold">Redeem Your Award</h1>
            <h5 className="text-xs text-gray-500">
              Earn more to get your rewards
            </h5>
          </div>
          <button className="btn btn-ghost btn-sm text-orange-400">
            See all
          </button>
        </div>
        <div className="flex overflow-x-auto gap-3 snap-x scrollbar-hide -mx-4 px-4 -ml-1 -mr-1">
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
