import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to OurLifeBook</h1>
      <Link href="/home">Go to App</Link>
      <p>Your personal family life journal.</p>
    </div>
  );
}
