interface CardRedeemAwardProps {
  name: string;
  imgUrl: string;
  point: number;
}

export default function CardRedeemAward({
  name,
  imgUrl,
  point,
}: CardRedeemAwardProps) {
  return (
    <div className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <figure className="h-32">
        <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-sm">{name}</h2>
        <p className="text-xs text-gray-600">{point} Points</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Redeem Now</button>
        </div>
      </div>
    </div>
  );
}
