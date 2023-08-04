import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/db"
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInButton from "@/components/SignInButton";

export default async function Home() {
 return( <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Card className='w-[300px]'>
      <CardHeader>
        <CardTitle>Welcome to Quizmify🌟</CardTitle>
        <CardDescription>Quizmify is an app that allows you to create a share quizzes with your friends. Get started by logging in below!</CardDescription>
      </CardHeader>
      <CardContent>
        <SignInButton text='Sign in with Google!'/>
      </CardContent>
    </Card>
 </div>
  )
}
