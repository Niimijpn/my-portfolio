export default function Page() {
    return (
        <>
        <h2 className="mt-8 text-left text-base font-bold md:text-2xl">
        Main Skills
      </h2>
      <div className="mt-4">
        <img
          alt="nextjs,tailwind,unity,opencv,git,figma"
          src="https://skillicons.dev/icons?i=nextjs,tailwind,unity,opencv,git,figma"
        />
      </div>

      <h2 className="mt-8 text-left text-base font-bold md:text-2xl">
        <img
          alt="GitHub Stats"
          src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Niimijpn&theme=default"
        />
        <div className="md:mt-4 md:flex">
          <img
            alt="GitHub Stats"
            src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=Niimijpn&theme=default"
          />
          <span className="w-5" />
          <img
            alt="GitHub Stats"
            src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Niimijpn&theme=default"
          />
        </div>
      </h2>
      </>
    );
}