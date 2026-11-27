import Image from "next/image";
import { GlobalComponents } from "@/components/global";
import { HomeComponents } from "@/components/home";

export default function Home() {
  return (
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        title="Industrial design meets fashion" 
        subtitle="Atypical leather goods" 
        btnText="Add to cart" 
      />
      <HomeComponents.Title 
        title="Obsessive Attention. Intelligent Effort."
        subtitle="Functional handbags made of luxurious and honest materials to improve people's lives in small but mighty ways."
      />
    </GlobalComponents.Layout>
  );
}
