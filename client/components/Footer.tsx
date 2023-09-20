function Footer() {
  return (
    <footer className="flex justify-center absolute bottom-0 w-full py-5 bg-dd-dark-purple border-t border-t-dd-yellow/50">
      <p className="text-dd-yellow">
        Image by{' '}
        <a
          href="https://pixabay.com/users/limoncitosketching-7400657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3368234"
          className="underline hover:no-underline"
        >
          Marta Simon
        </a>{' '}
        from{' '}
        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3368234">
          Pixabay.
        </a>{' '}
        Animal icons created by{' '}
        <a
          href="https://www.flaticon.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          Flaticon
        </a>
      </p>
      <p className="text-dd-yellow"></p>
    </footer>
  )
}

export default Footer
