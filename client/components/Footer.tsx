function Footer() {
  return (
    <footer className="flex justify-center w-full py-5 px-5 bg-dd-dark-purple border-t border-t-dd-yellow/50">
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
        Dia de muertos icons created by{' '}
        <a
          href="https://www.flaticon.com/free-icons/dia-de-muertos"
          target="_blank"
          rel="noreferrer"
          title="dia de muertos icons"
          className="underline hover:no-underline"
        >
          Freepik - Flaticon
        </a>
      </p>
      <p className="text-dd-yellow"></p>
    </footer>
  )
}

export default Footer
