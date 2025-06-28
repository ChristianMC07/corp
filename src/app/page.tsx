import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </nav>
      Home Page
    </div>
  );
}