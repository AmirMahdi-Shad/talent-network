import { Poppins } from "next/font/google";

import ContractForm from "@/components/ContractForm";
import OurTeam from "@/components/OurTeam";
import WorkSamples from "@/components/WorkSamples";

export const popnis = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "800"],
  variable: "--font-popnnis",
});

export async function getServerSideProps() {
  try {
    const response = await fetch("https://api.talentnetwork.ir/api/our_team");
    const ourTeam = await response.json();

    const worksResponse = await fetch(
      "https://api.talentnetwork.ir/api/work_sample"
    );
    const workSamples = await worksResponse.json();

    return { props: { ourTeam, workSamples } };
  } catch (e) {
    return { props: {} };
  }
}

export default function Home({ ourTeam, workSamples }) {
  return (
    <div className={`${popnis.className}`}>
      <OurTeam ourTeam={ourTeam} />
      <WorkSamples workSamples={workSamples} />
      <div className='container mx-auto'>{/* <ContractForm /> */}</div>
    </div>
  );
}
