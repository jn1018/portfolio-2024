// ReactRouter import for main navigation
import {Link} from 'react-router-dom';
import {AnimatePresence, motion, useCycle} from 'framer-motion';

const links = [
  { name: "Homepage", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Projects", to: "/projects-design", id: 3 },
  { name: "Projects Dev", to: "/projects-dev", id: 4 },
  { name: "Contact", to: "/contact", id: 5 }
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function MainNav() {

  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{width: 0}}
            animate={{width: 300}}
            exit={{
              width: 0,
              transition: {delay: 0.2, duration: 0.3}
            }}
          >
            <motion.div
              className="nav-container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({name, to, id}) => (
                <Link
                  key={id}
                  to={to}
                  className="nav-item" 
                  style={{display: "block"}} 
                  onClick={cycleOpen}
                >
                  {name}
                </Link>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button onClick={cycleOpen}>
        <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="50px">
          <path d="M10,2 L2,2" class="upper" style={{fill: "none", stroke: "#474747", strokeLineCap: "round"}} />
          <path d="M2,5 L10,5" class="middle" style={{fill: "none", stroke: "#474747", strokeLineCap: "round"}} />
          <path d="M10,8 L2,8" class="lower" style={{fill: "none", stroke: "#474747", strokeLineCap: "round"}} />   
        </svg>
        </button>
      </div>
    </>
  );
}