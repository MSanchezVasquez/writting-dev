export const Footer = () => {
  return (
    <footer>
      <div>
        writings.dev
        <a
          href="https://twitter.com/mcodex"
          target="_blank"
          rel="noopener noreferrer"
          className="author-link"
        >
          by @mcodex
        </a>
      </div>

      <button>
        {/* Asegúrate de que este icono esté en tu carpeta public/assets */}
        <img
          src="/assets/twitter_x_new_logo_x_icon_256077.svg"
          alt="Twitter Logo"
        />
        <p>Follow @mcodex23</p>
      </button>
    </footer>
  );
};
