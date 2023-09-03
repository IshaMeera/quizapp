import QuizCreation from '@/components/forms/QuizCreation'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    searchParams:{
        topic?: string;
    };
}

export const metadata = {
    title: "Quiz | Quizmify"
}

const  Quizpage = async({searchParams}: Props) => {
    const session = await getAuthSession();
    if(!session?.user){
        return redirect('/')
    }
  return <QuizCreation topicParam={searchParams.topic ?? ""}/>;
}

export default Quizpage
