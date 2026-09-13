import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import TechCard from './Components/Card';
import StackSidebar from './Components/Slidbar';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading JSON data:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, { position: "top-right" });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`, { position: "top-right" });
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`, { position: "top-right" });
    }
  };

  const handleClearAll = () => {
    setStack([]);
    toast.error("Cleared all items from stack.", { position: "top-right" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 font-sans">
      <ToastContainer />
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-center md:text-left">
          Explore <span className="text-brand-gradient">Technologies</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-secondary"></span>
            <span className="ml-3 text-lg font-medium">Loading data...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}