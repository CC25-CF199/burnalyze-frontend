import {
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Drawer,
  Button,
  useTheme,
  useMediaQuery,
  Collapse,
} from '@mui/material';
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

import { Link } from 'react-router-dom';
import { Image } from '../../components/atoms';
import { useRef, useState } from 'react';
import burnalyzeLogo from '../../assets/burnalyze_logo.png';
import detectionIcon from '../../assets/icons/detection.png';
import historyIcon from '../../assets/icons/history.png';
import educationIcon from '../../assets/icons/education.png';
import { ArrowDownward, ArrowUpwardSharp } from '@mui/icons-material';
import FireIcon from '../../assets/icons/FireIcon';
import ShiledIcon from '../../assets/icons/ShiledIcon';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import RiwayatDeteksiIcon from '../../assets/icons/RiwayatDeteksiIcon';
import PanduanPenangananIcon from '../../assets/icons/PanduanPenangananIcon';
import PrivasiPenggunaIcon from '../../assets/icons/PrivasiPenggunaIcon';

const LandingContainer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const featureCards = [
    {
      icon: detectionIcon,
      title: 'Deteksi',
      link: '/detection',
    },
    {
      icon: historyIcon,
      title: 'Riwayat',
      link: '/detection/history',
    },
    {
      icon: educationIcon,
      title: 'Edukasi',
      link: '/education',
    },
  ];

  const factCards = [
    {
      text: '70% kasus luka bakar rumah tangga',
      desc: 'terjadi akibat air panas, minyak goreng atau api dapur. Terjadi akibat air panas, minyak goreng, atau api dapur.',
      iconType: 'fire',
    },
    {
      text: '80% kasus luka bakar ringan',
      desc: 'Sebagian besar kasus luka bakar di Indonesia bersifat ringan dan bisa ditangani dengan pertolongan pertama yang tepat.',
      iconType: 'shield',
    },
    {
      text: 'Hanya 30% masyarakat Indonesia',
      desc: 'Yang mengetahui penanganan pertama pada luka bakar secara benar.',
      iconType: 'people',
    },
  ];

  const features = [
    {
      title: 'Deteksi Otomatis Luka',
      desc: 'Teknologi AI kami memindai luka secara instan untuk mengetahui tingkat keparahan luka bakar hanya dari gambar.',
      icon: <RiwayatDeteksiIcon />,
    },
    {
      title: 'Riwayat Deteksi',
      desc: 'Pantau perkembangan luka dari waktu ke waktu tanpa harus mengingat-ingat kapan terakhir diperiksa.',
      icon: <RiwayatDeteksiIcon />,
    },
    {
      title: 'Panduan Penanganan',
      desc: 'BurnAlyze memberi saran pertolongan pertama sesuai tingkat luka bakar, agar Anda mengambil langkah yang tepat.',
      icon: <PanduanPenangananIcon />,
    },
    {
      title: 'Privasi Pengguna',
      desc: 'BurnAlyze berkomitmen untuk menjaga kerahasiaan data Anda. Seluruh proses deteksi secara lokal, aman dan anonim.',
      icon: <PrivasiPenggunaIcon />,
    },
  ];

  const navButtonStyle = {
    backgroundColor: '#00c3ff',
    color: '#fff',
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

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
            justifyContent: 'space-between',
          },
        }}
      >
        {/* Drawer Header */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Box sx={{ width: 120, height: 30, position: 'relative' }}>
              <Image
                src={burnalyzeLogo}
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
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
                borderRadius: 1,
              }}
            >
              <HomeIcon sx={{ fontSize: 24 }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                Beranda
              </Typography>
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
                borderRadius: 1,
              }}
            >
              <CameraAltIcon sx={{ fontSize: 24, color: '#00c3ff' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                Deteksi
              </Typography>
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
                borderRadius: 1,
              }}
            >
              <HistoryIcon sx={{ fontSize: 24, color: '#ff8080' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                Riwayat
              </Typography>
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
                borderRadius: 1,
              }}
            >
              <SchoolIcon sx={{ fontSize: 24, color: '#f4a300' }} />
              <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                Edukasi
              </Typography>
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
              backgroundColor: '#00b3e6',
            },
          }}
          fullWidth
        >
          Sign In / Sign Up
        </Button>
      </Drawer>

      {/* Top Navigation Bar */}
      {isDesktop ? (
        // Desktop Navigation
        <Box
          sx={{
            position: 'fixed', // <- MAKE IT STICK
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4,
            py: 2,
            backgroundColor: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          {/* Logo */}
          <Box sx={{ width: 120, height: 30, position: 'relative' }}>
            <Image
              src={burnalyzeLogo}
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* Navigation Menu */}
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Typography
              sx={{
                color: '#00c3ff',
                textDecoration: 'underline',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{ color: '#333', fontWeight: 500, cursor: 'pointer' }}
            >
              Deteksi
            </Typography>
            <Typography
              sx={{ color: '#333', fontWeight: 500, cursor: 'pointer' }}
            >
              Riwayat
            </Typography>
            <Typography
              sx={{ color: '#333', fontWeight: 500, cursor: 'pointer' }}
            >
              Edukasi
            </Typography>
          </Box>

          {/* Sign In / Sign Up Button */}
          <Button
            sx={{
              backgroundColor: '#2ddaf4',
              color: '#ffffff',
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: 2,
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#00b3e6',
              },
            }}
          >
            Sign In / Sign Up
          </Button>
        </Box>
      ) : (
        // Mobile Navigation
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

          <Box sx={{ width: 120, height: 30, position: 'relative' }}>
            <Image
              src={burnalyzeLogo}
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>

          <Box sx={{ width: 40 }} />
        </Box>
      )}

      {/* Hero Section */}
      <Box
        sx={{
          background: `radial-gradient(circle at 40% 50%, #00c3ff 0%, #00dffb 60%, #9fecf5 85%, rgba(159,236,245,0.3) 100%)`,
          borderRadius: '0 0 20px 20px',
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
            marginTop: '52px',
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Welcome Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#ffdc3b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                }}
              >
                ✓
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                Selamat Datang di{' '}
                <Box
                  component="span"
                  sx={{ color: '#ffdc3b', fontWeight: 600 }}
                >
                  BurnAlyze
                </Box>
                !
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                lineHeight: 1.3,
                mb: 2,
              }}
            >
              Deteksi cerdas dan klasifikasi luka bakar dengan cepat.
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: '#ffffff',
                fontSize: { xs: '0.875rem', md: '1rem' },
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: { xs: '90%', md: '100%' },
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              Melalui deteksi kamera, BurnAlyze membantu Anda mengenali jenis
              luka bakar dan memberikan langkah penanganan awal yang tepat.
            </Typography>

            {/* Feature Navigation Cards only show on desktop */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-start',
                gap: 4,
                mt: 6,
                flexWrap: 'wrap',
              }}
            >
              {featureCards.map((feature, index) => (
  <Link to={feature.link} key={index} style={{ textDecoration: 'none' }}>
    <Box
      sx={{
        textAlign: 'center',
        cursor: 'pointer',
        minWidth: 80,
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'all 0.2s ease-in-out',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          border: '6px solid #57F1FF',
          borderRadius: '50%',
          width: 70,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          mb: 1,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          component="img"
          src={feature.icon}
          alt={feature.title}
          sx={{ height: 28, width: 'auto' }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: '1rem',
          fontWeight: 500,
          color: 'white',
          textDecoration: 'underline',
        }}
      >
        {feature.title}
      </Typography>
    </Box>
  </Link>
))}
            </Box>
          </Box>
          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: 170, md: 300 },
              height: 'auto',
              position: 'relative',
              mx: 'auto',
              alignSelf: { xs: 'center', md: 'flex-end' },
              transform: {
                xs: 'translateX(0%) translateY(10px)',
                md: 'translateX(0) translateY(16%)',
              },
            }}
          >
            <Image
              src="/landing1.png"
              alt="Doctor with phone"
              width={400}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Main Content Container */}
      <Box
        sx={{
          mx: 'auto',
          px: 2,
          backgroundColor: '#f8fafc',
          minHeight: 'calc(100vh - 400px)',
        }}
      >
        {/* Feature Navigation Cards */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' }, // Show only on mobile
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
            zIndex: 299,
          }}
        >
          {featureCards.map((feature, index) => (
  <Link
    key={index}
    to={feature.link}
    style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}
  >
    <Box
      sx={{
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'all 0.2s ease-in-out',
        },
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
          objectFit: 'contain',
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        {feature.title}
      </Typography>
    </Box>
  </Link>
))}
        </Box>

        {/* Fact Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            left: '50%',
            right: '50%',
            py: 5,
            px: 8,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '22px', // for mobile
                sm: '26px', // for tablets
                md: '30px', // for desktop
              },
              fontWeight: 600,
              color: '#01CEE1',
              textAlign: 'center',
              mb: 5,
            }}
          >
            Info Statistik Luka Bakar di Indonesia
          </Typography>

          {/* Cards */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              gap: 3,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {factCards.map((fact, index) => {
              const IconComponent =
                fact.iconType === 'fire'
                  ? FireIcon
                  : fact.iconType === 'shield'
                    ? ShiledIcon
                    : PeopleIcon;

              const isActive = activeCardIndex === index;

              return (
                <Box
                  key={index}
                  onClick={() => setActiveCardIndex(isActive ? null : index)}
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    maxWidth: '375px',
                    border: '1px solid #00c3ff',
                    borderRadius: 2,
                    p: 3,
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden', // penting untuk Collapse
                    '&:hover': {
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center', // opsional, hanya perlu jika ingin vertikal tengah
                      mb: 2,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40, color: '#01CEE1' }} />
                  </Box>

                  {/* Text */}
                  <Typography
                    sx={{
                      color: '#01CEE1',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {fact.text}
                  </Typography>

                  {/* Description with smooth expand */}
                  <Collapse in={isActive}>
                    <Typography
                      sx={{
                        mt: 1.5,
                        fontSize: '0.85rem',
                        color: '#01CEE1',
                        fontWeight: 400,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      {fact.desc}
                    </Typography>
                  </Collapse>

                  {/* Arrow */}
                  <Box sx={{ mt: 2 }}>
                    {isActive ? (
                      <ArrowUpwardSharp
                        sx={{ fontSize: 28, color: '#00c3ff' }}
                      />
                    ) : (
                      <ArrowDownward sx={{ fontSize: 28, color: '#00c3ff' }} />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Carousel Feature Card Section */}
        <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#f8fafc' }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '20px', // for mobile
                sm: '26px', // for tablets
                md: '30px', // for desktop
              },
              fontWeight: 600,
              textAlign: 'center',
              mb: 5,
            }}
          >
            <span style={{ color: '#555' }}>Fitur Unggulan</span>{' '}
            <span style={{ color: '#01CEE1' }}>BurnAlyze</span>
          </Typography>

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              left: '50%',
              right: '50%',
              ml: '-50vw',
              mr: '-50vw',
            }}
          >
            <Swiper
              modules={[Navigation]}
              onSwiper={swiper => {
                setTimeout(() => {
                  if (swiper.params.navigation) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
              centeredSlides={true}
              slidesPerView={'auto'}
              spaceBetween={16}
              style={{
                paddingBottom: '3rem',
                paddingLeft: '16px',
                paddingRight: '16px',
              }}
              breakpoints={{
                960: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: '80%',
                    maxWidth: 300,
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid #00c3ff',
                      borderRadius: 3,
                      p: 3,
                      backgroundColor: '#ffffff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        mx: 'auto',
                        mb: 2,
                        color: '#00c3ff',
                        fontSize: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e5fcff',
                        borderRadius: 2,
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00c3ff',
                        fontWeight: 600,
                        fontSize: '1.125rem',
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#444444',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        textAlign: 'center',
                      }}
                    >
                      {feature.desc}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: {
                  xs: 'flex', // visible on mobile
                  md: 'none', // hidden on desktop (960px and up)
                },
                gap: 2,
                zIndex: 10,
              }}
            >
              <div ref={prevRef} style={navButtonStyle}>
                ◀
              </div>
              <div ref={nextRef} style={navButtonStyle}>
                ▶
              </div>
            </Box>
          </Box>
        </Box>
        {/* Why BurnAlyze Section */}
        <Box sx={{ backgroundColor: '#f9f9f9', py: 4, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '20px', // for mobile
                sm: '26px', // for tablets
                md: '30px', // for desktop
              },
              fontWeight: 600,
              textAlign: 'center',
              mb: 5,
            }}
          >
            <span style={{ color: '#555' }}>Why </span>{' '}
            <span style={{ color: '#01CEE1' }}>BurnAlyze</span>
          </Typography>

          {/* Testimonial Cards */}
          <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            {/* Testimonial 1 - Left */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
              <Box
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  p: 2.5,
                  maxWidth: 615,
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1,
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
                    textAlign: 'left',
                  }}
                >
                  Web luar biasa! Saya panik saat adik saya terkena luka bakar,
                  dan BurnAlyze bisa membantu mendeteksi tingkat lukanya hanya
                  dari foto. Panduan pertolongannya jelas dan langsung bisa saya
                  terapkan. Sangat direkomendasikan!
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}
                  >
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
                  maxWidth: 615,
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1,
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
                    textAlign: 'left',
                  }}
                >
                  Sebagai ibu rumah tangga, saya sangat terbantu. Anak-anak
                  sering tidak sengaja terkena benda panas, dan BurnAlyze
                  membantu saya menentukan apakah cukup ditangani di rumah atau
                  perlu ke dokter.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}
                  >
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
                  maxWidth: 615,
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1,
                  }}
                >
                  "Cocok bagi mahasiswa kesehatan atau relawan"
                </Typography>

                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: '0.875rem',
                    maxWidth: 615,
                    lineHeight: 1.5,
                    mb: 2,
                    textAlign: 'left',
                  }}
                >
                  Sebagai mahasiswa keperawatan, saya pakai ini untuk latihan
                  dan belajar mengidentifikasi luka bakar. Membantu banget buat
                  pengenalan awal sebelum praktik langsung.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}
                  >
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
                  maxWidth: 615,
                  textAlign: 'left',
                }}
              >
                <Typography
                  sx={{
                    color: '#00c3ff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    mb: 1,
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
                    textAlign: 'left',
                  }}
                >
                  Saya suka karena bukan hanya deteksi luka, tapi juga ada
                  edukasi lengkap tentang jenis luka dan pertolongan pertama.
                  Cocok buat masyarakat umum.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{ fontSize: '0.875rem', color: '#ffc107', mr: 1 }}
                  >
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
              px: { xs: 2, sm: 3, md: 6 }, // responsive horizontal padding
              py: { xs: 3, md: 5 }, // responsive vertical padding
              maxWidth: { xs: '100%', md: 1200 }, // wider on desktop
              mx: 'auto',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: '20px', // for mobile
                  sm: '26px', // for tablets
                  md: '30px', // for desktop
                },
                fontWeight: 600,
                textAlign: 'center',
                mb: 5,
              }}
            >
              <span style={{ color: '#555' }}> Find answer of your </span>{' '}
              <span style={{ color: '#01CEE1' }}>questions</span>
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
                  '&.Mui-expanded': { margin: 0 },
                }}
                defaultExpanded
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f',
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
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    BurnAlyze adalah platform digital berbasis kecerdasan buatan
                    yang dirancang untuk membantu mendeteksi tingkat keparahan
                    luka bakar secara cepat dan tepat. Melalui analisis visual,
                    BurnAlyze memberikan estimasi derajat luka bakar dan panduan
                    penanganan pertama yang sesuai, guna meminimalkan risiko
                    lebih lanjut sebelum mendapatkan perawatan medis
                    profesional.
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
                  '&.Mui-expanded': { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f',
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
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    Benar. BurnAlyze sepenuhnya dapat digunakan secara gratis
                    oleh siapa saja dan kapan saja. Kami percaya bahwa akses
                    terhadap pertolongan pertama yang tepat pada luka bakar
                    adalah hak semua orang.
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
                  '&.Mui-expanded': { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f',
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
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    Benar! BurnAlyze berkomitmen untuk memberikan arahan
                    penanganan pertama luka bakar yang cepat, berdasarkan hasil
                    analisis luka. Arahan ini disusun dengan mengacu pada
                    pedoman medis dasar dan bertujuan untuk mengurangi dampak
                    cedera sebelum pertolongan medis lanjutan tersedia.
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
                  '&.Mui-expanded': { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#555555' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '12px 0',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#1f1f1f',
                    }}
                  >
                    Kegiatan seperti apa yang sering menyebabkan luka bakar
                    sampai harus lebih diperhatikan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: '#555555',
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    Luka bakar dapat terjadi dalam berbagai aktivitas
                    sehari-hari, seperti memasak di dapur, menyetrika atau
                    menggunakan alat pemanas listrik, bermain petasan atau
                    kembang api, terpapar sinar matahari berlebihan tanpa
                    pelindung, serta bekerja di industri atau laboratorium yang
                    melibatkan bahan panas atau kimia. Usahakan untuk
                    berhati-hati selama melakukan kegiatan-kegiatan tersebut.
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
            ml: 'calc(-50vw + 50%)',
          }}
        >
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 4,
              mb: 3,
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
                  color: '#f5f5f5',
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
                    '&:hover': {
                      color: '#ffffff',
                      textDecoration: 'underline',
                    },
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
                      textDecoration: 'underline',
                    },
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
                      textDecoration: 'underline',
                    },
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
                  color: '#f5f5f5',
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
                      color: '#ffffff',
                    },
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  <XIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    color: '#f5f5f5',
                    p: 0,
                    '&:hover': {
                      color: '#ffffff',
                    },
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
              my: 3,
            }}
          />

          {/* Copyright */}
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: '#f5f5f5',
              opacity: 0.8,
              textAlign: 'left',
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
