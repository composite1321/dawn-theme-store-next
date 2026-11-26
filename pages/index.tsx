import Image from "next/image";
import { GlobalComponents } from "@/components/global";

export default function Home() {
  return (
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        title="Industrial design meets fashion" 
        subtitle="Atypical leather goods" 
        btnText="Add to cart" 
      />
    </GlobalComponents.Layout>
  );
}
