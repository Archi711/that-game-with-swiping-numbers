import Layout from "../components/Layout";
import Section from "../components/Layout/section";
import Link from "../components/UI/Link";

export function Home() {
  return (
    <Layout>
      <Section>
        <Link href="play">Start game</Link>
        <Link href="profiles">Create profile</Link>
        <Link href="leaderboards">Leaderboards</Link>
        <Link href="settings">Settings</Link>
      </Section>
    </Layout>
  )
}
