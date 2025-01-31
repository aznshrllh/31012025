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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgUrl} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{point} Points</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Redeem Now</button>
        </div>
      </div>
    </div>
  );
}
