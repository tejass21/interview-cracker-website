import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textReveal } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProductShowcase = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section id="showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            variants={textReveal(0.1)}
          >
            See <span className="text-primary">DesierAI</span> in Action
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={textReveal(0.3)}
          >
            Real-time AI assistance that helps you ace every interview question
          </motion.p>
        </motion.div>

        {/* Both Images Side by Side */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={staggerContainer(0.2, 0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Candidate Image Frame */}
            <motion.div
              variants={slideIn("left", 0.1)}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-8 border border-border bg-card shadow-lg">
                <div className="text-center">
                  <motion.div 
                    className="relative mx-auto mb-6 rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src="/assest/Candidate.png" 
                      alt="Candidate"
                      className="max-w-full h-auto"
                    />
                    {/* Smaller Black Box for Candidate */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-black/90 text-white p-3 rounded-md text-sm max-w-32 shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="font-semibold mb-1">AI Assistant</div>
                      <div className="text-xs opacity-90">• Real-time help</div>
                      <div className="text-xs opacity-90">• Smart responses</div>
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Candidate</h3>
                  <p className="text-muted-foreground text-lg mb-4">Gets AI assistance during interviews</p>
                  <p className="text-muted-foreground">
                    DesierAI provides real-time assistance to candidates during interviews, 
                    helping them answer questions confidently and professionally.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Interviewer Image Frame */}
            <motion.div
              variants={slideIn("right", 0.2)}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-8 border border-border bg-card shadow-lg">
                <div className="text-center">
                  <motion.div 
                    className="relative mx-auto mb-6 rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src="/assest/Interviewer.png" 
                      alt="Interviewer"
                      className="max-w-full h-auto"
                    />
                    {/* New Black Box for Interviewer */}
                    <motion.div 
                      className="absolute bottom-4 left-4 bg-black/90 text-white p-3 rounded-md text-sm max-w-36 shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="font-semibold mb-1">Interviewer</div>
                      <div className="text-xs opacity-90">• Conducts assessment</div>
                      <div className="text-xs opacity-90">• Evaluates skills</div>
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Interviewer</h3>
                  <p className="text-muted-foreground text-lg mb-4">Conducts professional interviews</p>
                  <p className="text-muted-foreground">
                    Interviewers conduct thorough assessments while candidates receive 
                    seamless AI assistance that remains completely undetectable.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;