import { createFileRoute } from "@tanstack/react-router";
import BirthdayExperience from "@/components/BirthdayExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Moksha ❤️ — A Surprise for Lady Don" },
      { name: "description", content: "A magical birthday surprise for Moksha — Lady Don, our Garba Queen." },
      { property: "og:title", content: "Happy Birthday Moksha ❤️" },
      { property: "og:description", content: "A magical birthday surprise crafted just for you, Lady Don." },
    ],
  }),
  component: Index,
});

function Index() {
  return <BirthdayExperience />;
}
