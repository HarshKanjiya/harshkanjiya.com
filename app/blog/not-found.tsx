import { NotFound as PageNotFound } from "@/components/not-found";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return <div className="min-h-svh border-x border-edge">
    <PageNotFound />
  </div>;
}
