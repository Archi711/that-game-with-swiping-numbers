import { useRecoilValue } from "recoil";
import Layout from "../components/Layout";
import Section from "../components/Layout/section";
import Link from "../components/UI/Link";
import { Text } from "../components/UI/Typography";
import { userState } from "../recoil/atoms";

export function Home() {
  const { name } = useRecoilValue(userState)
  return (
    <Layout>
      <Text>Hello {name}</Text>
      <Section>
        <Link href="play">Start game</Link>
        <Link href="profiles">Create profile</Link>
        <Link href="leaderboards">Leaderboards</Link>
        <Link href="settings">Settings</Link>
      </Section>
    </Layout>
  )
}
