'use client'

interface Props {
    message: string;
    reset(): void;
}
export default function BlogErrorMock({message, reset}: Props) {
  return (
      <>
        <h1>Block Error Mock</h1>
          <p>{message}</p>
          <button onClick={reset}>Reset</button>
      </>
  )
}
