import React from 'react'

interface LocationDate {
  location: string
  date: string
  time: string
}

interface LocationDatesProps {
  items: LocationDate[]
}

export default function LocationDates({ items }: LocationDatesProps) {
  return (
    <div className="text-center mx-auto max-w-2xl">
      <ul className="flex flex-col justify-center">
        {items.map((item, index) => (
          <li key={index} className="bg-lightBlue text-darkBlue rounded-full px-4 py-2 text-lg font-light">
            {item.location}: {item.date} • {item.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

