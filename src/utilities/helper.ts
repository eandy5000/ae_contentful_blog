import { getMonth } from "date-fns"

// page constants and helpers
const storyMax = 5

export const pageStartSlice = (pageNumber: number) =>
  pageNumber * storyMax - storyMax

export const pageEndSlice = (pageNumber: number) => {
  switch (pageNumber) {
    case 1:
      return storyMax
    default:
      return pageNumber * storyMax
  }
}

export const stringToParagraph = (str: string): string[] => {
  const regexNewLineChar = new RegExp(/\\n/gi)

  return str
    .split("\n")
    .map(paragraph => paragraph.replace(regexNewLineChar, ""))
}

const monthText = (month: number): string => {
  const nonZeroMonth = month + 1

  switch (nonZeroMonth) {
    case 1:
      return "JAN"
    case 2:
      return "FEB"
    case 3:
      return "MAR"
    case 4:
      return "APR"
    case 5:
      return "MAY"
    case 6:
      return "JUNE"
    case 7:
      return "JULY"
    case 8:
      return "AUG"
    case 9:
      return "SEPT"
    case 10:
      return "OCT"
    case 11:
      return "NOV"
    case 12:
      return "DEC"

    default:
      throw new Error("Error: incorrect month number")
  }
}

export const formatDateText = (date: Date) =>
  `${monthText(getMonth(date))}-${date.getDate()} ${date.getFullYear()}`
