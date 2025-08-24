import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { floating, pulse } from "@/lib/animations";

const FloatingCTA = () => {
  const onClick = () => {
    const el = document.getElementById('downloads');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        animate={floating}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button size="lg" className="rounded-full shadow-sm" onClick={onClick}>
          <Download className="w-5 h-5 mr-2" /> Get the App
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCTA;


