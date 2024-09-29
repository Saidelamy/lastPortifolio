import { FaBars, FaTimes } from 'react-icons/fa';
import { LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import useNavbar from '../hooks/useNavbar';

const containerVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visable: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -50 },
  visable: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const { isOpened, toggleMenu } = useNavbar();

  return (
    <div className="text-3xl text-white">
      <nav className="fixed right-0 top-0 z-30 p-4 md:h-full md:bg-black md:p-8">
        <button
          onClick={toggleMenu}
          className="rounded-md p-2 md:fixed md:right-4 md:top-1/2"
          id="text"
        >
          {isOpened ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </nav>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial="hidden"
            animate="visable"
            exit="hidden"
            variants={containerVariants}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black text-white"
          >
            <ul className="space-y-6 text-3xl">
              {LINKS.map((link) => (
                <motion.li variants={linkVariants} key={link.id}>
                  <Link
                    as={NavLink}
                    to={`${link.id}`}
                    onClick={toggleMenu}
                    className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
