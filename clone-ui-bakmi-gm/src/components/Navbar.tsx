export default function Navbar() {
  return (
    <div className="navbar bg-white px-4 py-2 shadow-sm">
      <div className="flex-1">
        <img
          src="https://scontent.fmlg11-1.fna.fbcdn.net/v/t39.30808-6/326545617_1004489673859652_4220196882407414458_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Jxz8o0WyufIQ7kNvgFgXm1N&_nc_zt=23&_nc_ht=scontent.fmlg11-1.fna&_nc_gid=A6-Pw2-wmIU640ykGS9XoFa&oh=00_AYBtnvgEzKVsrESVoCcgSS3GCDygIXlGDFsepKAvK8pp4Q&oe=67A2B866"
          alt="Bakmi GM Logo"
          className="h-14 w-auto object-contain"
        />
      </div>
      <div className="flex-none gap-1">
        <button className="btn btn-ghost btn-sm px-2">
          <span className="material-icons text-lg">qr_code_scanner</span>
        </button>
        <button className="btn btn-ghost btn-sm px-2">
          <span className="material-icons text-lg">chat_bubble_outline</span>
        </button>
        <button className="btn btn-ghost btn-sm px-2">
          <span className="material-icons text-lg">more_vert</span>
        </button>
      </div>
    </div>
  );
}
