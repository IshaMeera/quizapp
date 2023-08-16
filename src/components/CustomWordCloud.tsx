"use client"
import React from 'react'
import D3WordCloud from 'react-d3-cloud'
import { useTheme } from 'next-themes'

type Props = {}

const data = [
  {
    text: "Science",
    value: 3,
  },
  {
    text: "Math",
    value: 5,
  },
  {
    text: "Next-js",
    value: 9,
  },
  {
    text: "History",
    value: 7,
  },
  {
    text: "Computer",
    value: 8,
  },
  {
    text: "AI",
    value: 10,
  },
  {
    text: "Data Science",
    value: 11,
  },
];

const fontSizeMapper = (word: {value: number}) => {
  return Math.log2(word.value) * 5 + 16;
}

const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  return (
    <>
    <D3WordCloud
        height={550}
        data={data}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme == "dark"?"white":"black"}
     />
    </>
  )
}


export default CustomWordCloud