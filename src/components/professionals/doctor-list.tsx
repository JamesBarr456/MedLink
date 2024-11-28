'use client';

import { Button } from '../ui/button';
import DoctorCard from './card-doctor';
import { UserDoctor } from '@/interfaces/auth';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface DoctorsListProps {
  doctors: UserDoctor[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function DoctorsList({ doctors }: DoctorsListProps) {
  const [displayCount, setDisplayCount] = useState(10);
  const hasMore = displayCount < doctors.length;
  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, doctors.length));
  };

  return (
    <div className="space-y-8">
      <motion.div
        className="container mx-auto mt-12 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {doctors.slice(0, displayCount).map((doctor) => (
          <motion.div key={doctor.id} variants={cardVariants}>
            <DoctorCard
              doctorId={doctor.id}
              title={
                doctor.firstName && doctor.lastName
                  ? `Dr. ${doctor.firstName} ${doctor.lastName}`
                  : ''
              }
              subtitle={'Especialista'}
              imageUrl={doctor.avatar}
              stats={doctor.specialization[0]}
              tuition={String(doctor.licenseNumber)}
            />
          </motion.div>
        ))}
      </motion.div>
      {hasMore && (
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={handleShowMore} className="w-80 p-8">
            Mostrar más
          </Button>
        </motion.div>
      )}
    </div>
  );
}
