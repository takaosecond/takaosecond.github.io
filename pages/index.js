import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div>Welcome to takaosecond's portfolio!</div>
      <Link href="/linkSample">
        <a>link Sample Page</a>
      </Link>
      <p>
        (And you may also see my blog as cyclist & photographer{' '}
        <a href="https://www.cyclecode.dev">here</a>.)
      </p>
    </>
  )
}

export default Index