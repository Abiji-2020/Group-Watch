import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/common/ThemeToggleBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
export default async function Home() {

  const session = await getServerSession(authOptions)
  return (
   <div>Hello World

    <Button>Click Me</Button>
    <ModeToggle />
    {session && JSON.stringify(session)}
   </div>
  );
}
