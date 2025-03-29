import Link from "next/link";


export default function Fusszeile() {
  return (
    <div className="d-flex justify-content-center fixed-bottom text-secondary bg-light">
      <h4>
        🔓 RP Schlüsseldienst | 📞 +49 176 236 875 42 | ⌚ Mo-So: 0:00-24:00
      </h4>

      <Link href="/">

        <p className="nav-link">Impressum</p>

      </Link>


    </div>
  );
}
