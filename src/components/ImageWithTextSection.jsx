import { motion } from 'framer-motion';
import '../styles/ImageWithTextSection.css';

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ImageWithTextSection = ({ image, title, children, imageSide = 'left' }) => {
  return (
    <motion.section
      className={`image-with-text-section ${imageSide === 'right' ? 'image-right' : ''}`}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="image-container1">
        <motion.img 
          src={image} 
          alt={title} 
          initial={{ scale: 1.05, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
      <div className="text-container"> 
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </motion.section>
  );
};

export default ImageWithTextSection; 