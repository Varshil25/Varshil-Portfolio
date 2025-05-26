// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const blobs = [
  {
    className: 'top-[-150px] left-[-150px] w-[400px] h-[400px]',
    color: 'bg-pink-300',
    blur: 'blur-3xl',
    opacity: 'opacity-40',
    animate: { x: [0, 30, -20, 0], y: [0, -20, 20, 0] },
  },
  {
    className: 'bottom-[-150px] right-[-150px] w-[400px] h-[400px]',
    color: 'bg-green-300',
    blur: 'blur-3xl',
    opacity: 'opacity-30',
    animate: { x: [0, -20, 20, 0], y: [0, 30, -15, 0] },
  },
  {
    className: 'top-[40%] left-[60%] w-[300px] h-[300px]',
    color: 'bg-pink-200',
    blur: 'blur-2xl',
    opacity: 'opacity-20',
    animate: { x: [0, 10, -10, 0], y: [0, -10, 10, 0] },
  },
];

export const BackgroundEffects = () => {
  return (
    <>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.className} ${blob.color} rounded-full filter ${blob.blur} ${blob.opacity} z-0`}
          animate={blob.animate}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
};
