import { Box, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails, Divider, Link, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupsIcon from '@mui/icons-material/Groups';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HistoryIcon from '@mui/icons-material/History';
import SchoolIcon from '@mui/icons-material/School';

import { Image } from '../../components/atoms';
import { useState } from 'react';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';
import detectionIcon from '../../assets/icons/detection.png';
import historyIcon from '../../assets/icons/history.png';
import educationIcon from '../../assets/icons/education.png';

const LandingContainer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const featureCards = [
    {
      icon: detectionIcon,
      title: 'Deteksi',
      link: '/detection'
    },
    {
      icon: historyIcon,
      title: 'Riwayat',
      link: '/history'
    },
    {
      icon: educationIcon,
      title: 'Edukasi',
      link: '/education'
    }
  ];

  const factCards = [
    {
      text: '70% kasus luka bakar rumah tangga terjadi akibat air panas, minyak goreng atau api dapur.',
      arrow: 'down',
      iconType: 'fire'
    },
    {
      text: 'Pertolongan pertama yang tepat dapat mengurangi kerusakan jaringan dan mempercepat penyembuhan.',
      arrow: 'up',
      iconType: 'shield'
    },
    {
      text: 'Deteksi dini tingkat keparahan luka bakar membantu menentukan penanganan yang optimal.',
      arrow: 'up',
      iconType: 'people'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Side Navigation Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            padding: 2.5,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        }}
      >
        {/* Drawer Header */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Image src={burnalyzeLogo} type="landingLogo" />
            </Box>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: '#333333' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                color: '#333333',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f5f5f5' },
                p: 1,
                borderRadius: 1
              }}
            >
              <HomeIcon sx={{ fontSize: 24, color: '#333333' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>Beranda</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                color: '#333333',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f5f5f5' },
                p: 1,
                borderRadius: 1
              }}
            >
              <CameraAltIcon sx={{ fontSize: 24, color: '#00c3ff' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>Deteksi</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                color: '#333333',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f5f5f5' },
                p: 1,
                borderRadius: 1
              }}
            >
              <HistoryIcon sx={{ fontSize: 24, color: '#ff8080' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>Riwayat</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                color: '#333333',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f5f5f5' },
                p: 1,
                borderRadius: 1
              }}
            >
              <SchoolIcon sx={{ fontSize: 24, color: '#f4a300' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>Edukasi</Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA Button */}
        <Button
          sx={{
            backgroundColor: '#00c3ff',
            color: '#ffffff',
            fontWeight: 600,
            py: 1.5,
            borderRadius: 2,
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#00b3e6'
            }
          }}
          fullWidth
        >
          Sign In / Sign Up
        </Button>
      </Drawer>

      {/* Top Navigation Bar */}
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1.5,
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: 'text.primary' }} />
        </IconButton>
        
        <Image src={burnalyzeLogo} type="landingLogo" />

        <Box sx={{ width: 40 }} />
      </Box>

      {/* Blue Background Section with Text and Image */}
      <Box 
        sx={{
          background: 'linear-gradient(180deg, #00c3ff 0%, #00dffb 60%, #ffffff 100%)',
          borderRadius: '0 0 20px 20px',
          pt: 3,
          pb: 4,
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          position: 'relative'
        }}
      >
        <Box sx={{ maxWidth: 480, mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <Box
              sx={{
                width: 16,
                height: 16,
                backgroundColor: '#ffdc3b',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px'
              }}
            >
              ✓
            </Box>
            <Typography 
              variant="body2"
              sx={{ 
                color: '#ffffff', 
                fontSize: '0.875rem'
              }}
            >
              Selamat Datang di <Box component="span" sx={{ color: '#ffdc3b', fontWeight: 600 }}>BurnAlyze</Box>!
            </Typography>
          </Box>
          
          <Typography 
            variant="h4" 
            component="h1"
            sx={{ 
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.75rem',
              lineHeight: 1.3,
              mb: 1
            }}
          >
            Deteksi cerdas dan klasifikasi luka bakar dengan cepat.
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#ffffff', 
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '85%',
              mx: 'auto',
              mb: 2
            }}
          >
            Melalui deteksi kamera, BurnAlyze membantu Anda mengenali jenis luka bakar dan memberikan langkah penanganan awal yang tepat.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Box
              component="img"
              src="/landing1.png"
              alt="Doctor with phone"
              sx={{
                height: 160,
                width: 'auto',
                objectFit: 'contain',
                mr: -2
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Main Content Container */}
      <Box sx={{ maxWidth: 480, mx: 'auto', px: 2, backgroundColor: '#f8fafc', minHeight: 'calc(100vh - 400px)' }}>
        {/* Feature Navigation Cards */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          px: 2,
          py: 2.5,
          borderRadius: '20px',
          mt: -3,
          mx: 'auto',
          maxWidth: 360,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          position: 'relative',
          zIndex: 2
        }}>
          {featureCards.map((feature, index) => (
            <Box 
              key={index}
              sx={{ 
                flex: 1, 
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              <Box
                component="img"
                src={feature.icon}
                alt={feature.title}
                sx={{
                  height: 28,
                  width: 'auto',
                  margin: 'auto',
                  mb: 1,
                  objectFit: 'contain'
                }}
              />
              <Typography 
                variant="body2"
                sx={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 500,
                  color: 'text.primary'
                }}
              >
                {feature.title}
              </Typography>
            </Box>
          ))}
        </Box>

                  {/* Fact Section */}
        <Box sx={{ py: 3 }}>
          {factCards.map((fact, index) => {
            // Icon component based on type
            const IconComponent = fact.iconType === 'fire' ? LocalFireDepartmentIcon 
              : fact.iconType === 'shield' ? ShieldIcon 
              : GroupsIcon;

            return (
              <Box 
                key={index}
                sx={{
                  border: '1px solid #00c3ff',
                  borderRadius: 2,
                  p: 3,
                  mb: 2,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                {/* Specific Icon for each fact */}
                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: 32,
                      color: '#00c3ff'
                    }}
                  />
                </Box>
                
                <Typography 
                  variant="body2" 
                  sx={{
                    textAlign: 'center',
                    color: '#00c3ff',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    lineHeight: 1.5
                  }}
                >
                  {fact.text}
                </Typography>
                
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  {fact.arrow === 'down' ? (
                    <KeyboardArrowDownIcon sx={{ fontSize: 28, color: '#00c3ff' }} />
                  ) : (
                    <KeyboardArrowUpIcon sx={{ fontSize: 28, color: '#00c3ff' }} />
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Riwayat Deteksi Feature Card Section */}
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Box 
            sx={{
              border: '1px solid #00c3ff',
              borderRadius: 3,
              p: 3,
              maxWidth: 300,
              mx: 'auto',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                mx: 'auto',
                mb: 2,
                color: '#00c3ff',
                fontSize: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              📓
            </Box>
            
            <Typography
              variant="h6"
              sx={{
                color: '#00c3ff',
                fontWeight: 600,
                fontSize: '1.125rem',
                mb: 1
              }}
            >
              Riwayat Deteksi
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: '#444444',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                textAlign: 'center'
              }}
            >
              Pantau perkembangan luka dari waktu ke waktu tanpa harus mengingat-ingat kapan terakhir diperiksa.
            </Typography>
          </Box>
        </Box>

        {/* Why BurnAlyze Section */}
        <Box sx={{ backgroundColor: '#f9f9f9', py: 4, textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              mb: 4
            }}
          >
            <Box component="span" sx={{ color: '#222222' }}>Why </Box>
            <Box component="span" sx={{ color: '#00c3ff' }}>BurnAlyze</Box>
            <Box component="span" sx={{ color: '#222222' }}>?</Box>
          </Typography>

          {/* Testimonial Cards */}
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {/* Testimonial 1 - Left */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  p: 2.5,
                  maxWidth: 400,
                  textAlign: 'left'
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  "Sangat membantu saat keadaan darurat!"
                </Typography>
                
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    mb: 2,
                    textAlign: 'left'
                  }}
                >
                  Web luar biasa! Saya panik saat adik saya terkena luka bakar, dan BurnAlyze bisa membantu mendeteksi tingkat lukanya hanya dari foto. Panduan pertolongannya jelas dan langsung bisa saya terapkan. Sangat direkomendasikan!
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}>
                    ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#333333' }}>
                    (5/5)
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Testimonial 2 - Right */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  p: 2.5,
                  maxWidth: 400,
                  textAlign: 'left'
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  "Teknologi yang sangat bermanfaat"
                </Typography>
                
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    mb: 2,
                    textAlign: 'left'
                  }}
                >
                  Sebagai ibu rumah tangga, saya sangat terbantu. Anak-anak sering tidak sengaja terkena benda panas, dan BurnAlyze membantu saya menentukan apakah cukup ditangani di rumah atau perlu ke dokter.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}>
                    ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#333333' }}>
                    (5/5)
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Testimonial 3 - Left */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  p: 2.5,
                  maxWidth: 400,
                  textAlign: 'left'
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  "Cocok bagi mahasiswa kesehatan atau relawan"
                </Typography>
                
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    mb: 2,
                    textAlign: 'left'
                  }}
                >
                  Sebagai mahasiswa keperawatan, saya pakai ini untuk latihan dan belajar mengidentifikasi luka bakar. Membantu banget buat pengenalan awal sebelum praktik langsung.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}>
                    ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#333333' }}>
                    (5/5)
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Testimonial 4 - Right */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  p: 2.5,
                  maxWidth: 400,
                  textAlign: 'left'
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1
                  }}
                >
                  "Mudah diakses, edukatif"
                </Typography>
                
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    mb: 2,
                    textAlign: 'left'
                  }}
                >
                  Saya suka karena bukan hanya deteksi luka, tapi juga ada edukasi lengkap tentang jenis luka dan pertolongan pertama. Cocok buat masyarakat umum.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: 2 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}>
                    ⭐⭐⭐⭐
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', color: '#333333' }}>
                    (4/5)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Box 
            sx={{
              backgroundColor: '#f3f3f3',
              borderRadius: '16px',
              p: 3,
              maxWidth: 500,
              mx: 'auto'
            }}
          >
            {/* FAQ Heading */}
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#222222',
                mb: 3,
                textAlign: 'center'
              }}
            >
              Find answer of your <Box component="span" sx={{ color: '#00c3ff' }}>questions</Box>
            </Typography>

            {/* FAQ Accordion Items */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* FAQ 1 */}
              <Accordion
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '12px !important',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: 0 }
                }}
                defaultExpanded
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f'
                    }}
                  >
                    Apa itu BurnAlyze?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#555555',
                      lineHeight: 1.6
                    }}
                  >
                    BurnAlyze adalah platform digital berbasis kecerdasan buatan yang dirancang untuk membantu mendeteksi dan menganalisis luka bakar melalui teknologi computer vision. Platform ini memberikan bantuan cepat dalam mengidentifikasi tingkat keparahan luka bakar dan memberikan panduan penanganan yang tepat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* FAQ 2 */}
              <Accordion
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '12px !important',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: 0 }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f'
                    }}
                  >
                    Apakah BurnAlyze dapat digunakan secara gratis
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#555555',
                      lineHeight: 1.6
                    }}
                  >
                    Benar. BurnAlyze sepenuhnya gratis untuk digunakan. Kami berkomitmen untuk memberikan akses mudah dan terjangkau kepada semua orang untuk mendapatkan bantuan deteksi luka bakar yang akurat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* FAQ 3 */}
              <Accordion
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '12px !important',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: 0 }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f'
                    }}
                  >
                    Apakah BurnAlyze bisa membantu penanganan pertama luka bakar
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#555555',
                      lineHeight: 1.6
                    }}
                  >
                    Benar! BurnAlyze berkomitmen memberikan panduan pertolongan pertama yang tepat berdasarkan tingkat keparahan luka bakar yang terdeteksi. Aplikasi akan memberikan langkah-langkah penanganan awal yang aman sebelum mendapatkan bantuan medis profesional.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* FAQ 4 */}
              <Accordion
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '12px !important',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: 0 }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f'
                    }}
                  >
                    Kegiatan seperti apa yang sering menyebabkan luka bakar sampai harus lebih diperhatikan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#555555',
                      lineHeight: 1.6
                    }}
                  >
                    Luka bakar dapat terjadi dari berbagai aktivitas sehari-hari seperti memasak (minyak panas, air mendidih), penggunaan alat elektronik yang panas, terpapar sinar matahari berlebihan, atau kontak dengan bahan kimia. Kegiatan di dapur dan aktivitas outdoor perlu perhatian khusus.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            backgroundColor: '#1e1f23',
            color: '#f5f5f5',
            py: 4,
            px: 3,
            width: '100vw',
            ml: 'calc(-50vw + 50%)'
          }}
        >
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 4,
              mb: 3
            }}
          >
            {/* Left Column - Branding and Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  mb: 2,
                  color: '#f5f5f5'
                }}
              >
                BurnAlyze
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link
                  href="#"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#f5f5f5',
                    textDecorationColor: '#f5f5f5',
                    '&:hover': {
                      color: '#ffffff'
                    }
                  }}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="#"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#ffffff',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Fitur
                </Link>
                <Link
                  href="#"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#ffffff',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Edukasi
                </Link>
              </Box>
            </Box>

            {/* Right Column - Social Media */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  mb: 2,
                  color: '#f5f5f5'
                }}
              >
                Media Sosial
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff'
                    }
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff'
                    }
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff'
                    }
                  }}
                >
                  <XIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff'
                    }
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              borderColor: '#d9d9d9',
              opacity: 0.3,
              my: 3
            }}
          />

          {/* Copyright */}
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#f5f5f5',
              opacity: 0.8,
              textAlign: 'left'
            }}
          >
            Hak Cipta © 2025 BurnAlyze
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingContainer; 