import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if(session?.user){
    //means the user logged in
    return redirect("/dashboard");
  }
 return( <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Card className='w-[300px]'>
      <CardHeader>
        <CardTitle>Welcome to Quizmify🌟</CardTitle>
        <CardDescription>Quizmify is an app that allows you to create a share quizzes with your friends.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInButton text='Sign in with Google!'/>
      </CardContent>
    </Card>
 </div>
  )
}
