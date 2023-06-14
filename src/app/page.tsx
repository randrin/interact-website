import Image from "next/image";
import styles from "./page.module.css";
import InteractSubscription from "@/core/InteractSubscription";
import InteractBlogs from "@/core/InteractBlogs";
import InteractTestimonials from "@/core/InteractTestimonials";
import InteractServices from "@/core/InteractServices";
import InteractCountArea from "@/core/InteractCountArea";
import InteractClients from "@/core/InteractClients";
import InteractRequestCall from "@/core/InteractRequestCall";

export default function Home() {
  return (
    <>
      <InteractServices />
      <InteractCountArea />
      <InteractRequestCall />
      <InteractTestimonials />
      <InteractBlogs />
      <InteractClients />
      <InteractSubscription />
    </>
  );
}
