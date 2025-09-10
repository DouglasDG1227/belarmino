import React, { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Scissors, MessageCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Importando as imagens ultra clean
import barbeariaUltraClean from './assets/pXtWTPai1NYI.jpg'
import corteModerno from './assets/dGJyouXiz9QL.jpeg'
import barbeiroProfissional from './assets/Vo5ciUeQQO9l.jpg'

function App() {
  const servicos = [
    { nome: "Corte", preco: "35" },
    { nome: "Barba", preco: "25" },
    { nome: "Corte + Barba", preco: "55" },
    { nome: "Sobrancelha", preco: "15" }
  ]

  const whatsappNumber = "5511999999999"
  const whatsappMessage = "Olá! Gostaria de agendar um horário."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  // Custom hook for IntersectionObserver
  const useIntersectionObserver = (ref, options) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      }, options)

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [ref, options])

    return isIntersecting
  }

  const img1Ref = useRef(null)
  const img2Ref = useRef(null)
  const img3Ref = useRef(null)

  const isImg1Visible = useIntersectionObserver(img1Ref, { threshold: 0.95 })
  const isImg2Visible = useIntersectionObserver(img2Ref, { threshold: 0.95 })
  const isImg3Visible = useIntersectionObserver(img3Ref, { threshold: 0.95 })

  return (
    <div className="min-h-screen bg-white">
      {/* Header Ultra Clean */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scissors className="h-7 w-7 text-black" />
              <span className="text-2xl font-extralight tracking-wide text-black">ELITE</span>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              variant="ghost"
              size="sm"
              className="text-black hover:bg-gray-50 font-light tracking-wide"
            >
              CONTATO
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section Ultra Clean */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-8xl font-extralight text-black leading-none tracking-tight">
                  ELITE
                </h1>
                <div className="w-20 h-px bg-black"></div>
                <p className="text-xl font-light text-gray-600 leading-relaxed tracking-wide">
                  Tradição e modernidade<br />
                  em cada detalhe
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-light tracking-wide group"
                >
                  AGENDAR
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  ref={img1Ref}
                  src={barbeariaUltraClean} 
                  alt="Interior da barbearia" 
                  className={`w-full h-full object-cover transition-all duration-700 ${isImg1Visible ? '' : 'grayscale'}`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Ultra Clean */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extralight text-black mb-6 tracking-wide">SERVIÇOS</h2>
            <div className="w-20 h-px bg-black mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-light text-black mb-6 tracking-wide">{servico.nome}</h3>
                    <div className="text-4xl font-extralight text-black mb-8">R$ {servico.preco}</div>
                    <Button 
                      onClick={handleWhatsAppClick}
                      variant="outline" 
                      className="w-full border-black text-black hover:bg-black hover:text-white font-light tracking-wide group-hover:border-black transition-all"
                    >
                      AGENDAR
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Ultra Clean */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extralight text-black mb-6 tracking-wide">TRABALHOS</h2>
            <div className="w-20 h-px bg-black mx-auto"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 mx-auto w-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  ref={img2Ref}
                  src={corteModerno} 
                  alt="Corte moderno" 
                  className={`w-full h-full object-cover transition-all duration-700 ${isImg2Visible ? '' : 'grayscale'}`}
                />
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-light text-black tracking-wide">PRECISÃO</h3>
                <p className="text-gray-600 font-light leading-relaxed tracking-wide">
                  Cada corte é executado com técnica apurada e atenção aos detalhes, 
                  garantindo resultados excepcionais.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 mx-auto w-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  ref={img3Ref}
                  src={barbeiroProfissional} 
                  alt="Barbeiro profissional" 
                  className={`w-full h-full object-cover transition-all duration-700 ${isImg3Visible ? '' : 'grayscale'}`}
                />
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-light text-black tracking-wide">EXCELÊNCIA</h3>
                <p className="text-gray-600 font-light leading-relaxed tracking-wide">
                  Profissionais experientes dedicados a proporcionar uma experiência 
                  única e personalizada.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Ultra Clean */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl font-extralight mb-8 tracking-wide">SOBRE</h2>
            <div className="w-20 h-px bg-white mx-auto mb-12"></div>
            <p className="text-xl font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
              Desde 2008, a Elite Barbershop redefine o conceito de barbearia moderna. 
              Combinamos tradição artesanal com técnicas contemporâneas, criando uma 
              experiência única em um ambiente sofisticado e acolhedor.
            </p>
            <div className="grid md:grid-cols-3 gap-12 pt-16">
              <div>
                <div className="text-4xl font-extralight mb-4">15+</div>
                <div className="font-light tracking-wide text-gray-300">ANOS</div>
              </div>
              <div>
                <div className="text-4xl font-extralight mb-4">5000+</div>
                <div className="font-light tracking-wide text-gray-300">CLIENTES</div>
              </div>
              <div>
                <div className="text-4xl font-extralight mb-4">4.9</div>
                <div className="font-light tracking-wide text-gray-300">AVALIAÇÃO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato Ultra Clean */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extralight text-black mb-6 tracking-wide">CONTATO</h2>
            <div className="w-20 h-px bg-black mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h3 className="text-xl font-light text-black tracking-wide">LOCALIZAÇÃO</h3>
              <p className="text-gray-600 font-light leading-relaxed tracking-wide">
                Rua das Flores, 123<br />
                Centro - São Paulo/SP
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h3 className="text-xl font-light text-black tracking-wide">HORÁRIO</h3>
              <p className="text-gray-600 font-light leading-relaxed tracking-wide">
                Segunda a Sexta: 8h às 19h<br />
                Sábado: 8h às 17h
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h3 className="text-xl font-light text-black tracking-wide">TELEFONE</h3>
              <p className="text-gray-600 font-light leading-relaxed tracking-wide mb-6">
                (11) 99999-9999
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 font-light tracking-wide group"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WHATSAPP
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Ultra Clean */}
      <footer className="border-t border-gray-100 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Scissors className="h-6 w-6 text-black" />
              <span className="text-xl font-extralight tracking-wide text-black">ELITE</span>
            </div>
            <p className="text-sm font-light text-gray-500 tracking-wide">
              © 2024 ELITE BARBERSHOP. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


