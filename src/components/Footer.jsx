import React from 'react';
import { motion } from 'framer-motion';

function Footer() {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="footer">
        <footer>
        </footer>
      </div>
    </motion.div>
  )
}

export default Footer;