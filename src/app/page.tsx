import Link from "next/link";
import MenuCard from "@/components/MenuCard";
import PremiumBadge from "@/components/PremiumBadge";

export default function BerandaPage() {
  return (
    <>
      <header className="hero">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">朝</span>
          <strong>Asahi Mandiri</strong>
        </div>
        <div>
          <p className="hero-jp" lang="ja">日本語を学ぼう</p>
          <h1>Belajar bahasa Jepang dari nol</h1>
        </div>
        <Link href="/ikusei" className="btn-emas">Mulai Belajar</Link>
      </header>

      <section className="content">
        <h2 className="judul">Menu utama</h2>
        <div className="grid">
          <MenuCard href="/latihan" label="Latihan" jp="練習" />
          <MenuCard href="/materi" label="Materi" jp="教材" />
        </div>
        <Link href="/tokutei" className="premium-card">
          <PremiumBadge />
          <strong>Persiapan kerja ke Jepang</strong>
          <small>Ikusei Shurou, JFT, Tokutei Ginou, Dokumen</small>
        </Link>
      </section>
    </>
  );
}
