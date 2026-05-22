const HANDLE = 'eito-github';
const GITHUB_URL = 'https://github.com/eito-github/';

const Footer = () => {
  return (
    <footer>
      <p className='text-gray-700'>
        Created by{' '}
        <a className='text-emerald-600' href={GITHUB_URL}>
          @{HANDLE}
        </a>{' '}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
