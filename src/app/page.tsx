'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function MedicalPage() {
  return (
    <div className="py-20">
      <motion.section
        className="text-start font-poppins text-blue-950 md:flex md:items-center md:justify-evenly"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div className="max-w-3xl space-y-5 p-8" variants={fadeInUp}>
          <h1 className="break-words text-5xl font-bold lg:text-7xl">
            Centralizamos tu salud, simplificamos tu vida.
          </h1>
          <h3 className="lg:text-2xl">
            Gestiona tus registros médicos de forma segura y sencilla desde
            cualquier lugar.
          </h3>
        </motion.div>
        <motion.picture className="p-5" variants={fadeInUp}>
          <Image
            alt="banner-home"
            src={'/banners/banner1-home.png'}
            width={600}
            height={600}
            className="rounded-xl"
          />
        </motion.picture>
      </motion.section>
      <motion.section
        className="container mx-auto rounded-lg bg-white"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.article
          className="flex flex-col items-center p-8 font-poppins lg:flex-row lg:justify-evenly"
          variants={fadeInUp}
        >
          <picture className="p-5">
            <Image
              alt="banner-home"
              src={'/images/home/que-es-medlink.png'}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </picture>
          <div className="max-w-xl space-y-5 text-center lg:text-start">
            <h2 className="text-3xl font-bold">
              ¿Qué es Med<span className="text-sky-400">Link</span>?
            </h2>
            <p className="leading-loose">
              <strong>MedLink</strong> es la plataforma médica centralizada que
              permite a los profesionales de la salud gestionar el historial
              clínico de sus pacientes con una visión integral de 360º, sin
              cambiar de herramienta. Cumple con los más altos estándares de
              seguridad y normativas de Protección de Datos Personales (RGPD).
            </p>
          </div>
        </motion.article>
        <motion.article
          className="flex flex-col items-center p-8 font-poppins lg:flex-row lg:justify-evenly"
          variants={fadeInUp}
        >
          <div className="max-w-xl space-y-5 text-center lg:text-start">
            <h2 className="text-3xl font-bold">Gestion de Usuarios</h2>
            <p className="leading-loose">
              MedLink es un sistema de gestión integral para consultorios,
              centros de salud, clínicas, sanatorios, hospitales y redes de
              salud. Nuestra empresa está enfocada en fortalecer y mejorar la
              gestión de las instituciones de salud, tanto pequeñas como
              grandes, teniendo como objetivos primordiales la eficiencia de la
              atención sanitaria potenciando la calidad y la seguridad de la
              información y de los pacientes brindando herramientas intuitivas y
              fáciles de usar.
            </p>
          </div>
          <picture className="p-5">
            <Image
              alt="banner-home"
              src={'/images/home/gestion-de-pacientes.jpg'}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </picture>
        </motion.article>
        <motion.article
          className="flex flex-col items-center p-8 font-poppins lg:flex-row lg:justify-evenly"
          variants={fadeInUp}
        >
          <picture className="p-5">
            <Image
              alt="banner-home"
              src={'/images/home/perfil-patient.png'}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </picture>
          <div className="max-w-xl space-y-5 text-center lg:text-start">
            <h2 className="text-3xl font-bold">
              Información Médica al Alcance de Tu Mano
            </h2>
            <p className="leading-loose">
              Los pacientes podrán acceder a un perfil de diseño intuitivo y
              fácil de usar, donde podrán personalizar su información personal,
              como agregar una foto de perfil, su edad, altura y detalles sobre
              su salud, como si padece de presión arterial alta, realiza
              actividad física o tiene alergias. También podrán subir documentos
              de sus análisis más recientes, ingresar información sobre los
              medicamentos que están tomando y completar formularios
              relacionados con afecciones específicas. Esta sección
              proporcionará a los médicos una visión más completa y detallada
              del estado de salud del paciente, facilitando un seguimiento más
              efectivo y personalizado.
            </p>
          </div>
        </motion.article>
        <motion.article
          className="flex flex-col items-center p-8 font-poppins lg:flex-row lg:justify-evenly"
          variants={fadeInUp}
        >
          <div className="max-w-xl space-y-5 text-center lg:text-start">
            <h2 className="text-3xl font-bold">
              Todo sobre Tu Médico en un Solo Lugar
            </h2>
            <p className="leading-loose">
              Los doctores tendrán un perfil profesional donde podrán completar
              información relevante como su especialidad, número de matrícula y
              datos básicos. Además, podrán agregar los lugares de atención
              donde trabajan, incluyendo horarios y si aceptan obra social.
              Desde su perfil, los médicos podrán buscar a sus pacientes y
              solicitar autorización para acceder a su historial médico cuando
              lo necesiten. Los pacientes que visiten el perfil de los doctores
              tendrán la opción de comunicarse directamente por WhatsApp o
              compartir el perfil del profesional con otras personas. Esto
              facilitará una interacción más fluida y accesible entre médicos y
              pacientes.
            </p>
          </div>
          <picture className="p-5">
            <Image
              alt="banner-home"
              src={'/images/home/perfil-doctor.png'}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </picture>
        </motion.article>
      </motion.section>
      <motion.section
        className="container mx-auto flex flex-col items-center rounded-lg pb-20 font-poppins"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.picture className="p-5" variants={fadeInUp}>
          <Image
            alt="banner-home"
            src={'/images/home/contact.png'}
            width={700}
            height={700}
            className="rounded-xl"
          />
        </motion.picture>
        <motion.div variants={fadeInUp}>
          <Button asChild className="rounded-xl p-10">
            <Link href={'/contacto'} className="text-xl">
              Ponte en contacto con Nosotros
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
