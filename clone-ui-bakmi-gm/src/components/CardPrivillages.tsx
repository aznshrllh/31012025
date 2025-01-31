interface CardPrivillagesProps {
  name: string;
  imgUrl: string;
  expire: string;
}

export default function CardPrivillages({
  name,
  imgUrl,
  expire,
}: CardPrivillagesProps) {
  return (
    <div className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <figure className="h-40 overflow-hidden">
        <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-sm">{name}</h2>
        <p className="text-xs text-gray-600">Exp. {expire}</p>
      </div>
    </div>
  );
}
